import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, User, Heart } from "lucide-react";
import { useState } from "react";
import { GlassButton } from "../components/GlassButton";
import { GlassCard } from "../components/GlassCard";
import { PageShell } from "../components/PageShell";
import { TopBar } from "../components/TopBar";
import { useQuiz, type Gender, type RelationshipType } from "../context/QuizContext";
import { cn } from "../lib/utils";

export const Route = createFileRoute("/user-info")({
  head: () => ({ meta: [{ title: "Tell us about them — R/G Detector" }] }),
  component: UserInfoPage,
});

const genders: Gender[] = ["Male", "Female", "Non-binary", "Prefer not to say"];
const relationships: RelationshipType[] = ["Dating", "Situationship", "Crush", "Don't know"];

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm transition-all",
        active
          ? "bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          : "glass text-white/70 hover:text-white",
      )}
    >
      {children}
    </motion.button>
  );
}

function UserInfoPage() {
  const { state, setInfo } = useQuiz();
  const navigate = useNavigate();
  const [local, setLocal] = useState(state.info);

  const ready = local.yourName.trim() && local.partnerName.trim() && local.relationship;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ready) return;
    setInfo(local);
    navigate({ to: "/quiz" });
  };

  return (
    <PageShell>
      <TopBar />
      <section className="mx-auto w-full max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-balance text-4xl font-bold tracking-tight md:text-5xl"
        >
          Who are we investigating?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-white/60"
        >
          A little context helps us personalize every question.
        </motion.p>

        <form onSubmit={submit}>
          <GlassCard className="mt-8 space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Your name" icon={<User className="h-4 w-4" />}>
                <input
                  value={local.yourName}
                  onChange={(e) => setLocal({ ...local, yourName: e.target.value })}
                  placeholder="Alex"
                  className="w-full bg-transparent text-lg outline-none placeholder:text-white/25"
                />
              </Field>
              <Field label="Their name" icon={<Heart className="h-4 w-4" />}>
                <input
                  value={local.partnerName}
                  onChange={(e) => setLocal({ ...local, partnerName: e.target.value })}
                  placeholder="Jordan"
                  className="w-full bg-transparent text-lg outline-none placeholder:text-white/25"
                />
              </Field>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label>Your gender</Label>
                <div className="flex flex-wrap gap-2">
                  {genders.map((g) => (
                    <Chip key={g} active={local.yourGender === g} onClick={() => setLocal({ ...local, yourGender: g })}>
                      {g}
                    </Chip>
                  ))}
                </div>
              </div>
              <div>
                <Label>Their gender</Label>
                <div className="flex flex-wrap gap-2">
                  {genders.map((g) => (
                    <Chip
                      key={g}
                      active={local.partnerGender === g}
                      onClick={() => setLocal({ ...local, partnerGender: g })}
                    >
                      {g}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Label>Relationship type</Label>
              <div className="flex flex-wrap gap-2">
                {relationships.map((r) => (
                  <Chip key={r} active={local.relationship === r} onClick={() => setLocal({ ...local, relationship: r })}>
                    {r}
                  </Chip>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <p className="text-xs text-white/40">Nothing is saved. This stays on your device.</p>
              <GlassButton type="submit" size="lg" disabled={!ready}>
                Continue <ArrowRight className="h-4 w-4" />
              </GlassButton>
            </div>
          </GlassCard>
        </form>
      </section>
    </PageShell>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="mb-3 text-xs uppercase tracking-[0.25em] text-white/40">{children}</div>;
}

function Field({ label, icon, children }: { label: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
        {icon} {label}
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 focus-within:border-white/30">
        {children}
      </div>
    </label>
  );
}
