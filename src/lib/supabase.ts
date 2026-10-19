import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client-side Supabase instance
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

// ── Type helpers ──────────────────────────────────────────────
export type Family = {
  id: string; name: string; invite_code: string;
  religion: string; region: string; created_by: string; created_at: string;
};

export type FamilyMemberDB = {
  id: string; family_id: string; user_id: string | null;
  name: string; role: string; relation: string | null;
  religion: string | null; region: string | null;
  email: string | null; initials: string | null;
  color: string; joined_at: string;
};

export type RitualDB = {
  id: string; family_id: string; name: string; subtitle: string | null;
  category: string; religion: string[]; region: string | null;
  language: string | null; steps: string[]; samagri: { item: string; quantity: string; purpose: string }[];
  mantras: { devanagari: string; transliteration: string; meaning: string }[];
  elder_notes: string | null; preparation_days: number;
  performed_count: number; is_template: boolean;
  created_by: string | null; created_at: string; updated_at: string;
};

export type FestivalDB = {
  id: string; family_id: string | null; name: string; date: string;
  religion: string; significance: string | null;
  ritual_steps: string[]; food: string | null; samagri: string[];
  is_custom: boolean; created_at: string;
};

export type MediaItemDB = {
  id: string; family_id: string; ritual_id: string | null;
  type: "photo" | "video" | "audio"; emoji: string;
  label: string | null; url: string | null; ritual_label: string;
  reactions_count: number; uploaded_by: string | null; created_at: string;
};
