import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface QuranSettings {
  arabicFont: string;
  arabicSize: number;
  translationSize: number;
  translationLanguage: 'bn' | 'en' | 'both';
  darkMode: boolean; 
  setArabicFont: (font: string) => void;
  setArabicSize: (size: number) => void;
  setTranslationSize: (size: number) => void;
  setTranslationLanguage: (lang: 'bn' | 'en' | 'both') => void;
  toggleDarkMode: () => void; 
}

export const useSettingsStore = create<QuranSettings>()(
  persist(
    (set) => ({
      arabicFont: 'font-amiri',
      arabicSize: 24,
      translationSize: 16,
      translationLanguage: 'bn',
      darkMode: false,
      setArabicFont: (font) => set({ arabicFont: font }),
      setArabicSize: (size) => set({ arabicSize: size }),
      setTranslationSize: (size) => set({ translationSize: size }),
      setTranslationLanguage: (lang) => set({ translationLanguage: lang }),
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    { name: 'quran-settings' }
  )
);

