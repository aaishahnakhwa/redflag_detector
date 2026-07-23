import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://preselection-3d48d-default-rtdb.firebaseio.com/",
};

// Initialize Firebase App singleton
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Realtime Database
export const db = getDatabase(app);

export type SubmissionData = {
  yourName: string;
  partnerName: string;
  percent: number;
  verdict?: string;
  yourGender?: string;
  partnerGender?: string;
  relationship?: string;
  timestamp?: number;
};

/**
 * Saves assessment submission data to Firebase Realtime Database under /submissions node.
 */
export async function saveSubmission(data: SubmissionData): Promise<string | null> {
  try {
    const submissionsRef = ref(db, "submissions");
    const newSubmissionRef = push(submissionsRef);
    
    const payload = {
      yourName: data.yourName || "Anonymous",
      partnerName: data.partnerName || "Partner",
      percent: typeof data.percent === "number" ? data.percent : 0,
      verdict: data.verdict || "UNKNOWN",
      yourGender: data.yourGender || "",
      partnerGender: data.partnerGender || "",
      relationship: data.relationship || "",
      timestamp: data.timestamp || Date.now(),
    };

    await set(newSubmissionRef, payload);
    console.log("Successfully saved submission to Firebase RTDB with key:", newSubmissionRef.key);
    return newSubmissionRef.key;
  } catch (error) {
    console.error("Failed to save submission to Firebase RTDB:", error);
    return null;
  }
}
