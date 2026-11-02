import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  VolumeX, 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  RefreshCw, 
  Flame, 
  Radio, 
  Terminal, 
  Sliders, 
  Power,
  Zap
} from 'lucide-react';
import { sound } from './utils/sound';
import { QUESTIONS, DIAGNOSES } from './data/questions';
import type { Option, DiagnosticResult } from './data/questions';

export default function App() {
  const [appState, setAppState] = useState<'landing' | 'quiz' | 'scanning' | 'results'>('landing');
  
  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [answers, setAnswers] = useState<Option[]>([]);
  const [logs, setLogs] = useState<string[]>(['> INITIATING FLAG ANALYZER CORE...', '> READY FOR TARGET INPUT.']);
  const [isMuted, setIsMuted] = useState(false);
  const [autoAdvanceProgress, setAutoAdvanceProgress] = useState(100);
  
  // Custom interactive tweaks
  const [partnerName, setPartnerName] = useState('');
  
  // Scanning state animation
  const [scanProgress, setScanProgress] = useState(0);
  const [scanText, setScanText] = useState('LOCKING SYSTEM CORRELATIONS...');

  // Self Destruct countdown state
  const [destructCountdown, setDestructCountdown] = useState<number | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [crtShutdown, setCrtShutdown] = useState<'open' | 'shuttingY' | 'shuttingX'>('open');

  const logsEndRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  // Mute toggle handler
  const handleToggleMute = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  // Scroll terminal logs to bottom
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Audio configuration sync
  useEffect(() => {
    setIsMuted(sound.getMutedStatus());
  }, []);

  // Compute live cumulative scores based on answered questions
  const liveScores = useMemo(() => {
    let red = 0;
    let green = 0;
    let beige = 0;

    // Sum from completed answers
    answers.forEach(ans => {
      red += ans.red;
      green += ans.green;
      beige += ans.beige;
    });

    // Add currently selected option if they haven't submitted yet
    if (selectedOption) {
      red += selectedOption.red;
      green += selectedOption.green;
      beige += selectedOption.beige;
    }

    return { red, green, beige };
  }, [answers, selectedOption]);

  // Calculate live gauge percentages
  // Max possible per question: red = 25, green = 20, beige = 25
  const maxPossiblePoints = (answers.length + (selectedOption ? 1 : 0)) * 25 || 25;
  const redPercentage = Math.min((liveScores.red / maxPossiblePoints) * 100, 100);
  const greenPercentage = Math.min((liveScores.green / maxPossiblePoints) * 100, 100);

  // Gauge needles angles (ranging from -90 to +90 degrees)
  const redAngle = -90 + (redPercentage / 100) * 180;
  const greenAngle = -90 + (greenPercentage / 100) * 180;

  // Typewriter terminal log utility
  const addLog = (text: string) => {
    setLogs(prev => [...prev, text]);
  };

  // Start the actual questionnaire
  const handleStartInvestigation = () => {
    sound.playWhoosh();
    addLog(`> TARGET NAME REGISTERED: ${partnerName || 'SUBJECT-X'}`);
    setAppState('quiz');
  };

  // Handles clicking an option in the quiz
  const handleSelectOption = (option: Option) => {
    if (selectedOption) return; // Disable clicking another while auto-advancing
    
    sound.playBeep();
    setSelectedOption(option);
    
    // Add logs
    addLog(`> DECODING CHOICE: "${option.text.substring(0, 32)}..."`);
    addLog(`> DIAGNOSIS: ${option.feedback}`);

    // Set up auto-advance countdown
    let progress = 100;
    setAutoAdvanceProgress(100);
    
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = window.setInterval(() => {
      progress -= 4;
      setAutoAdvanceProgress(Math.max(0, progress));
      if (progress <= 0) {
        if (timerRef.current) clearInterval(timerRef.current);
        advanceQuiz(option);
      }
    }, 80);
  };

  // Helper to commit selected option and move forward
  const advanceQuiz = (option: Option) => {
    const nextAnswers = [...answers, option];
    setAnswers(nextAnswers);
    setSelectedOption(null);
    setAutoAdvanceProgress(100);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      sound.playClick();
      addLog(`> LOADING MODULE ${currentQuestionIndex + 2} / ${QUESTIONS.length}...`);
    } else {
      // Finished all questions, enter scanning mode!
      sound.playSiren(4);
      setAppState('scanning');
      startScanning();
    }
  };

  // Skip the auto-advance timer and go immediately
  const handleForceNext = () => {
    if (selectedOption) {
      if (timerRef.current) clearInterval(timerRef.current);
      advanceQuiz(selectedOption);
    }
  };

  // Handles simulated diagnostic scanning
  const startScanning = () => {
    setScanProgress(0);
    let currentPct = 0;
    
    const phrases = [
      'LOCKING CORE GRID...',
      'CALIBRATING BEIGE FLAG SENSORS...',
      'COMPUTING TOXIC EMISSIONS...',
      'CORRELATING PSYCHO-LOGICAL DATA...',
      'DISSOLVING EGO MATRIX...',
      'FINALIZING DIAGNOSTIC REPORT...'
    ];

    const scanInterval = setInterval(() => {
      currentPct += 2;
      setScanProgress(currentPct);
      
      // Play brief synth chirps on progress intervals
      if (currentPct % 12 === 0) {
        sound.playWarning();
      }

      // Shift text phrases
      const phraseIndex = Math.floor((currentPct / 100) * phrases.length);
      if (phrases[phraseIndex] && phrases[phraseIndex] !== scanText) {
        setScanText(phrases[phraseIndex]);
      }

      if (currentPct >= 100) {
        clearInterval(scanInterval);
        sound.playSuccess();
        setAppState('results');
      }
    }, 60);
  };

  // Determine final diagnostic category
  const finalDiagnosis: DiagnosticResult = useMemo(() => {
    if (answers.length === 0) return DIAGNOSES.beige;

    let red = 0;
    let green = 0;
    let beige = 0;

    answers.forEach(ans => {
      red += ans.red;
      green += ans.green;
      beige += ans.beige;
    });

    // Check for high chaos (Red and Green are closely balanced and high, or high variance)
    const diffRedGreen = Math.abs(red - green);
    if (red > 50 && green > 50 && diffRedGreen < 25) {
      return DIAGNOSES.chaos;
    }

    if (red > green && red >= beige) {
      return DIAGNOSES.red;
    } else if (green >= red && green >= beige) {
      return DIAGNOSES.green;
    } else {
      return DIAGNOSES.beige;
    }
  }, [answers]);

  // Recalibrate / Reset application
  const handleRecalibrate = () => {
    sound.playWhoosh();
    setAppState('landing');
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setLogs(['> INITIATING FLAG ANALYZER CORE...', '> READY FOR TARGET INPUT.']);
    setPartnerName('');
    setDestructCountdown(null);
    setIsShaking(false);
    setCrtShutdown('open');
  };

  // Emergency Self Destruct sequence (easter egg)
  const handleSelfDestruct = () => {
    if (destructCountdown !== null) return; // Prevent double trigger
    sound.playWarning();
    setDestructCountdown(3);
    setIsShaking(true);
    addLog('💥 SELF-DESTRUCT INITIATED! CLEAR CHAMBER IMMEDIATELY!');

    const countdown = setInterval(() => {
      setDestructCountdown(prev => {
        if (prev === null) {
          clearInterval(countdown);
          return null;
        }
        if (prev <= 1) {
          clearInterval(countdown);
          // Trigger CRT screen shutdown animation
          triggerCrtShutdown();
          return 0;
        }
        sound.playWarning();
        return prev - 1;
      });
    }, 1000);
  };

  const triggerCrtShutdown = () => {
    // Stage 1: Compress Vertically
    setCrtShutdown('shuttingY');
    setTimeout(() => {
      // Stage 2: Compress Horizontally and vanish
      setCrtShutdown('shuttingX');
      setTimeout(() => {
        // Stage 3: Fully reset application and boot up
        handleRecalibrate();
      }, 500);
    }, 400);
  };

  // Shake Variant mapping
  const shakeVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, -6, 6, -4, 4, 0],
      y: [0, 8, -8, 8, -8, 4, -4, 3, -3, 0],
      transition: { duration: 0.5, repeat: 6, ease: "easeInOut" }
    },
    default: { x: 0, y: 0 }
  } as any;

  // CRT shutdown animations
  const crtShutdownStyles = {
    open: { transform: 'scale(1)', opacity: 1 },
    shuttingY: { transform: 'scaleX(1) scaleY(0.003)', opacity: 1, filter: 'brightness(3)' },
    shuttingX: { transform: 'scaleX(0) scaleY(0.003)', opacity: 0, filter: 'brightness(5)' }
  };

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden flex flex-col justify-between items-center p-4 md:p-8 aurora-bg font-sans select-none"
      style={{ transition: 'all 0.5s ease' }}
    >
      {/* Aurora Floating Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-pink-500/10 filter blur-3xl animate-blob-1 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-indigo-500/10 filter blur-3xl animate-blob-2 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-emerald-500/5 filter blur-3xl animate-blob-3 pointer-events-none" />

      {/* Top Navigation Bar */}
      <header className="w-full max-w-5xl flex justify-between items-center z-20 mb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] animate-pulse" />
          <span className="mono-font text-sm tracking-wider text-slate-300 uppercase">
            Flag Reactor v1.0.4
          </span>
        </div>
        
        <button 
          onClick={handleToggleMute}
          className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 transition-all cursor-pointer backdrop-blur"
          title={isMuted ? "Unmute sound" : "Mute sound"}
        >
          {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-emerald-400" />}
        </button>
      </header>

      {/* Main Glassmorphism Reactor Panel Container */}
      <motion.main 
        variants={shakeVariants}
        animate={isShaking ? "shake" : "default"}
        style={crtShutdownStyles[crtShutdown]}
        className="w-full max-w-lg glass-panel rounded-3xl p-6 md:p-8 flex flex-col items-center relative z-10 my-auto shadow-2xl border border-white/10"
      >
        <AnimatePresence mode="wait">
          
          {/* LANDING STATE */}
          {appState === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full flex flex-col items-center text-center"
            >
              {/* Floating Magnifying Glass SVG Illustration */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 4, -4, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-28 h-28 mb-6 flex items-center justify-center pointer-events-none"
              >
                {/* SVG Magnifying glass */}
                <svg className="w-24 h-24 text-slate-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" />
                  <circle cx="11" cy="11" r="6" fill="rgba(15,23,42,0.6)" />
                  {/* Subtle crosshairs inside lens */}
                  <line x1="8" y1="11" x2="14" y2="11" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="11" y1="8" x2="11" y2="14" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="1 1" />
                </svg>
                {/* Micro Emoji floats */}
                <motion.div
                  animate={{ scale: [1, 1.25, 1], y: [0, -6, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-2 left-6 text-2xl drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                >
                  🚩
                </motion.div>
                <motion.div
                  animate={{ scale: [1.2, 1, 1.2], y: [0, 6, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 right-5 text-2xl drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                >
                  🟢
                </motion.div>
              </motion.div>

              {/* Title Section */}
              <h1 className="heading-font text-4xl md:text-5xl font-extrabold tracking-tight leading-none text-slate-100 flex flex-col gap-1 mb-4 select-none">
                <span className="text-red-500 glow-red">Red Flag,</span>
                <span className="text-emerald-400 glow-green">Green Flag</span>
                <span className="text-slate-300 text-3xl md:text-4xl mt-1 font-medium">Detector</span>
              </h1>

              {/* Subtitle Section */}
              <div className="text-slate-300 text-base md:text-lg tracking-wide flex flex-col gap-0.5 mb-8">
                <p className="opacity-95">🔍 Decode the vibes.</p>
                <p className="opacity-95">⚡ Know the truth.</p>
                <p className="text-emerald-400 font-bold drop-shadow-[0_0_6px_rgba(52,211,153,0.3)]">💡 Date smart, not hard.</p>
              </div>

              {/* Subject Input Field */}
              <div className="w-full max-w-sm mb-6 flex flex-col gap-1.5 text-left">
                <label className="mono-font text-xs text-slate-400 tracking-wider uppercase pl-1">
                  Enter Subject Name (Target):
                </label>
                <input 
                  type="text" 
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  placeholder="e.g. Brad, Jennifer, Mysterious stranger"
                  maxLength={25}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-all font-medium text-sm text-center"
                />
              </div>

              {/* Animated CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartInvestigation}
                className="ripple-btn w-full max-w-sm py-4 bg-gradient-to-r from-red-500 via-purple-600 to-emerald-500 text-white font-bold text-lg rounded-xl shadow-lg border border-white/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] cursor-pointer select-none transition-all duration-300"
              >
                Start Investigation
              </motion.button>

              {/* How It Works Section */}
              <div className="mt-8 pt-6 border-t border-white/10 w-full max-w-sm">
                <h3 className="mono-font text-slate-400 text-xs font-bold tracking-widest uppercase mb-4 text-center">
                  How It Works
                </h3>
                <div className="grid grid-cols-3 gap-2.5 text-[11px] text-slate-400 leading-normal">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-red-500/10 w-7 h-7 rounded-lg flex items-center justify-center text-red-400 font-mono mb-2 font-bold border border-red-500/20">
                      01
                    </div>
                    <span>Answer quirky psychological questions</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-purple-500/10 w-7 h-7 rounded-lg flex items-center justify-center text-purple-400 font-mono mb-2 font-bold border border-purple-500/20">
                      02
                    </div>
                    <span>Reactor engine correlates the vibes</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-emerald-500/10 w-7 h-7 rounded-lg flex items-center justify-center text-emerald-400 font-mono mb-2 font-bold border border-emerald-500/20">
                      03
                    </div>
                    <span>Receive complete safety diagnosis</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* QUESTIONNAIRE STATE */}
          {appState === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col"
            >
              {/* Dashboard Layout Header (Power status, gauges) */}
              <div className="w-full grid grid-cols-3 gap-3 mb-6 items-center">
                
                {/* Live Gauges Container */}
                <div className="col-span-2 flex justify-between items-center gap-4 bg-slate-950/40 p-2.5 rounded-xl border border-white/5">
                  
                  {/* Red Gauge */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="gauge-container h-12 w-20">
                      <svg viewBox="0 0 100 60" className="w-full h-full">
                        <defs>
                          <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#450a0a" />
                            <stop offset="100%" stopColor="#ef4444" />
                          </linearGradient>
                        </defs>
                        <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
                        <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="url(#redGrad)" strokeWidth="8" strokeLinecap="round" strokeDasharray="125" strokeDashoffset={125 - (125 * redPercentage) / 100} />
                        <g transform={`translate(50, 50) rotate(${redAngle})`}>
                          <line x1="0" y1="0" x2="0" y2="-38" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                          <circle cx="0" cy="0" r="4.5" fill="#f8fafc" />
                        </g>
                      </svg>
                    </div>
                    <span className="mono-font text-[9px] text-red-400 font-bold uppercase tracking-wider mt-1">Red Core</span>
                  </div>

                  {/* Green Gauge */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="gauge-container h-12 w-20">
                      <svg viewBox="0 0 100 60" className="w-full h-full">
                        <defs>
                          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#064e3b" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                        </defs>
                        <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
                        <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="url(#greenGrad)" strokeWidth="8" strokeLinecap="round" strokeDasharray="125" strokeDashoffset={125 - (125 * greenPercentage) / 100} />
                        <g transform={`translate(50, 50) rotate(${greenAngle})`}>
                          <line x1="0" y1="0" x2="0" y2="-38" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                          <circle cx="0" cy="0" r="4.5" fill="#f8fafc" />
                        </g>
                      </svg>
                    </div>
                    <span className="mono-font text-[9px] text-emerald-400 font-bold uppercase tracking-wider mt-1">Green Core</span>
                  </div>

                </div>

                {/* Battery Status bar / Reactor indicators */}
                <div className="flex flex-col gap-1.5 h-full justify-between bg-slate-950/40 p-2.5 rounded-xl border border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="mono-font text-[8px] text-slate-400 uppercase">Power Load</span>
                    <span className="mono-font text-[9px] text-yellow-400 font-semibold">98.4%</span>
                  </div>
                  {/* Energy Battery Blocks */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((idx) => {
                      const isActive = (currentQuestionIndex + 1) * 0.7 > idx * 0.7;
                      return (
                        <div 
                          key={idx} 
                          className={`h-2 flex-1 rounded-sm transition-all duration-300 ${
                            isActive ? 'bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.5)]' : 'bg-slate-800'
                          }`}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-between items-center text-[7px] mono-font text-slate-500 uppercase tracking-tight">
                    <span>Temp: 31°C</span>
                    <span className="text-emerald-400 animate-pulse">Online</span>
                  </div>
                </div>

              </div>

              {/* Reactor Main CRT Diagnostic Display Screen */}
              <div className="crt-screen w-full bg-slate-950 border-2 border-slate-800 rounded-2xl p-4 md:p-5 relative flex flex-col gap-4 shadow-inner min-h-[220px]">
                
                {/* CRT Header Scan details */}
                <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-[10px] mono-font text-slate-500 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                    Channel: {QUESTIONS[currentQuestionIndex].category}
                  </span>
                  <span>Mod: {currentQuestionIndex + 1}/{QUESTIONS.length}</span>
                </div>

                {/* Active Question Display */}
                <div className="flex-1 flex flex-col justify-center">
                  <motion.p
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-slate-200 text-sm md:text-base font-semibold leading-relaxed"
                  >
                    {QUESTIONS[currentQuestionIndex].question}
                  </motion.p>
                </div>

                {/* Auto Advance Bar */}
                {selectedOption && (
                  <div className="w-full flex items-center justify-between gap-3 bg-slate-900/60 py-1.5 px-3 rounded-lg border border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <span className="animate-spin text-purple-400 text-xs">🌀</span>
                      <span className="mono-font text-[9px] text-purple-300 font-bold uppercase tracking-wider">
                        Locking values...
                      </span>
                    </div>
                    {/* Visual countdown bar */}
                    <div className="flex-1 max-w-[120px] h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-500 transition-all duration-75"
                        style={{ width: `${autoAdvanceProgress}%` }}
                      />
                    </div>
                    <button 
                      onClick={handleForceNext}
                      className="mono-font text-[9px] text-white hover:text-purple-300 font-bold uppercase border border-white/20 px-2 py-0.5 rounded cursor-pointer"
                    >
                      Skip
                    </button>
                  </div>
                )}
              </div>

              {/* Multiple Choice Answers Container */}
              <div className="flex flex-col gap-2.5 mt-4">
                {QUESTIONS[currentQuestionIndex].options.map((option, idx) => {
                  const isSelected = selectedOption === option;
                  const hasSelection = selectedOption !== null;

                  return (
                    <motion.button
                      key={idx}
                      whileHover={!hasSelection ? { scale: 1.01, x: 4 } : {}}
                      onClick={() => !hasSelection && handleSelectOption(option)}
                      disabled={hasSelection}
                      className={`text-left p-3.5 rounded-xl border font-medium text-xs md:text-sm transition-all duration-200 select-none flex items-start gap-3 cursor-pointer ${
                        isSelected 
                          ? 'bg-purple-950/40 border-purple-500 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.15)]'
                          : hasSelection
                            ? 'bg-slate-950/20 border-slate-900/40 text-slate-600'
                            : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 text-slate-300 hover:bg-slate-900/60'
                      }`}
                    >
                      {/* Interactive radio bulb */}
                      <span className={`w-4 h-4 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center border text-[9px] font-bold font-mono ${
                        isSelected 
                          ? 'border-purple-400 bg-purple-500/20 text-purple-300' 
                          : 'border-slate-700 bg-slate-950 text-slate-500'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option.text}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Bottom Panel: Live Terminal Logs Output */}
              <div className="mt-5 bg-slate-950 border border-slate-800 rounded-xl p-3 h-24 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 border-b border-slate-900 pb-1 mb-1 text-[8px] mono-font text-slate-500 uppercase tracking-widest font-bold">
                  <Terminal className="w-3 h-3 text-slate-500" />
                  Telemetry Diagnostic Data Feed
                </div>
                <div className="flex-1 overflow-y-auto mono-font text-[9px] text-emerald-500/90 leading-tight space-y-0.5 custom-scrollbar">
                  {logs.map((log, index) => (
                    <div key={index}>{log}</div>
                  ))}
                  <div ref={logsEndRef} />
                </div>
              </div>

            </motion.div>
          )}

          {/* DIAGNOSTIC SCANNING STATE */}
          {appState === 'scanning' && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center py-10 text-center"
            >
              {/* Flashing nuclear scanner sign */}
              <motion.div
                animate={{
                  opacity: [1, 0.4, 1],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="mb-8 p-4 rounded-full bg-red-500/10 border-2 border-red-500/40 text-red-500 inline-block drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]"
              >
                <AlertTriangle className="w-12 h-12" />
              </motion.div>

              <h2 className="heading-font text-2xl font-bold tracking-wide text-slate-100 uppercase mb-2">
                Analyzing Core Integrity
              </h2>
              
              <div className="mono-font text-xs text-red-400 h-6 mb-6 tracking-widest font-bold">
                {scanText}
              </div>

              {/* Cyber Progress Indicator */}
              <div className="w-full max-w-sm bg-slate-950 p-2 rounded-xl border border-slate-800">
                <div className="h-4 w-full bg-slate-900 rounded-md overflow-hidden relative">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-emerald-500"
                    style={{ width: `${scanProgress}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-white font-bold drop-shadow">
                    {scanProgress}%
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-xs mt-6 max-w-xs leading-normal">
                SYSTEM SAFEGUARDS ENABLED. KEEP DEVICE UPRIGHT WHILE SCANNING COMPILATION IS EN ROUTE.
              </p>
            </motion.div>
          )}

          {/* DIAGNOSTIC RESULTS STATE */}
          {appState === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="w-full flex flex-col items-center text-center"
            >
              
              {/* Dynamic Reactor Core Animation */}
              <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
                <div className={`absolute inset-0 rounded-full border-2 border-dashed opacity-25 animate-spin duration-1000 ${
                  finalDiagnosis.type === 'red' ? 'border-red-500' :
                  finalDiagnosis.type === 'green' ? 'border-emerald-500' :
                  finalDiagnosis.type === 'beige' ? 'border-yellow-500' : 'border-purple-500'
                }`} />

                {/* Animated Core Graphic SVG */}
                {finalDiagnosis.type === 'red' && (
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ rotate: { duration: 15, repeat: Infinity, ease: 'linear' }, scale: { duration: 1, repeat: Infinity } }}
                    className="p-4 rounded-full bg-red-950/20 border border-red-500/50 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                  >
                    <Flame className="w-12 h-12" />
                  </motion.div>
                )}

                {finalDiagnosis.type === 'green' && (
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 180, 270, 360] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="p-4 rounded-full bg-emerald-950/20 border border-emerald-500/50 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                  >
                    <ShieldCheck className="w-12 h-12" />
                  </motion.div>
                )}

                {finalDiagnosis.type === 'beige' && (
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="p-4 rounded-full bg-yellow-950/20 border border-yellow-500/50 text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                  >
                    <Sliders className="w-12 h-12" />
                  </motion.div>
                )}

                {finalDiagnosis.type === 'chaos' && (
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ rotate: { duration: 2, repeat: Infinity, ease: 'linear' }, scale: { duration: 1.5, repeat: Infinity } }}
                    className="p-4 rounded-full bg-purple-950/20 border border-purple-500/50 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  >
                    <ShieldAlert className="w-12 h-12" />
                  </motion.div>
                )}
              </div>

              {/* Diagnosis Badge Title */}
              <div className={`px-4 py-2 border rounded-xl text-sm font-bold mono-font tracking-wider mb-4 uppercase ${finalDiagnosis.glowClass}`}>
                {finalDiagnosis.funnyTitle}
              </div>

              {/* Subject Description */}
              <h2 className="heading-font text-2xl font-extrabold text-slate-100 mb-2">
                Target: {partnerName || 'Subject-X'}
              </h2>
              
              <p className="text-slate-300 text-xs md:text-sm px-2 mb-6 leading-relaxed">
                {finalDiagnosis.description}
              </p>

              {/* Funny Verdict Lines List */}
              <div className="w-full bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 text-left space-y-3 mb-6">
                <span className="mono-font text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  Diagnostic Bulletins
                </span>
                <ul className="text-xs text-slate-300 space-y-2 md:space-y-2.5">
                  {finalDiagnosis.lines.map((line, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.15 + 0.2 }}
                      className="flex items-start gap-2.5 leading-normal"
                    >
                      <span className="text-[10px] mt-0.5">🔹</span>
                      <span>{line}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Console Action Bar */}
              <div className="w-full grid grid-cols-2 gap-3">
                <button
                  onClick={handleRecalibrate}
                  className="py-3.5 px-4 bg-slate-900 border border-slate-800 rounded-xl font-bold text-xs uppercase tracking-widest text-slate-300 hover:text-white hover:border-slate-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4 animate-spin-hover" />
                  Recalibrate
                </button>
                <button
                  onClick={handleSelfDestruct}
                  className="py-3.5 px-4 bg-red-950/20 border border-red-500/40 rounded-xl font-bold text-xs uppercase tracking-widest text-red-400 hover:bg-red-900/20 hover:text-red-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.1)]"
                >
                  <Power className="w-4 h-4 text-red-500" />
                  Self-Destruct
                </button>
              </div>

            </motion.div>
          )}

        </AnimatePresence>

        {/* Self-Destruct Flashing Warnings */}
        {destructCountdown !== null && (
          <div className="absolute inset-0 bg-red-950/95 border-2 border-red-500 rounded-3xl flex flex-col items-center justify-center z-50 p-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-red-500 mb-4"
            >
              <AlertTriangle className="w-16 h-16" />
            </motion.div>
            <h2 className="mono-font text-red-400 text-lg font-bold tracking-widest uppercase mb-1">
              REACTOR OVERLOAD IN:
            </h2>
            <div className="mono-font text-white text-6xl font-extrabold mb-4 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]">
              {destructCountdown}
            </div>
            <p className="mono-font text-[10px] text-red-500 uppercase tracking-wider text-center animate-pulse">
              SYSTEM MEMORY CORRUPTION DETECTED. AUTO-REBOOT INITIATING...
            </p>
          </div>
        )}

      </motion.main>

      {/* Futuristic Dashboard Footer */}
      <footer className="w-full max-w-5xl flex justify-between items-center text-[9px] mono-font text-slate-500 uppercase tracking-widest mt-4 border-t border-slate-900 pt-4 z-20">
        <span>© Flag Diagnostic Reactor INC</span>
        <div className="flex gap-4">
          <span>Containment Status: STABLE</span>
          <span>Core Temp: 28°C</span>
        </div>
      </footer>
    </div>
  );
}
