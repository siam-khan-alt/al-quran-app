'use client';
import { useSettingsStore } from '@/store/useSettingsStore';
import { X, Settings2, Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';

interface SettingsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

type LanguageOption = 'bn' | 'en' | 'both';

export default function SettingsSidebar({ isOpen, onClose }: SettingsSidebarProps) {
  const { 
    arabicFont, arabicSize, translationSize, translationLanguage, darkMode,
    setArabicFont, setArabicSize, setTranslationSize, setTranslationLanguage, toggleDarkMode 
  } = useSettingsStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const languages: { id: LanguageOption; label: string }[] = [
    { id: 'bn', label: 'বাংলা' },
    { id: 'en', label: 'English' },
    { id: 'both', label: 'Both' }
  ];

  return (
    <div className={`fixed inset-y-0 right-0 w-80 bg-bg-card shadow-2xl z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 border-l border-primary/10 p-6`}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold flex items-center gap-2 text-primary">
          <Settings2 size={24} /> সেটিংস
        </h2>
        <button onClick={onClose} className="p-2 hover:bg-accent rounded-full text-text-muted transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="space-y-8">
        <section>
          <label className="block text-sm font-semibold mb-3 text-text-muted uppercase tracking-wider">অ্যাপ থিম</label>
          <button 
            onClick={toggleDarkMode}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-accent border border-primary/10 hover:border-primary transition-all"
          >
            <span className="text-sm font-bold text-text-main">{darkMode ? 'ডার্ক মোড' : 'লাইট মোড'}</span>
            {darkMode ? <Moon size={20} className="text-primary" /> : <Sun size={20} className="text-orange-500" />}
          </button>
        </section>

        <section>
          <label className="block text-sm font-semibold mb-3 text-text-muted uppercase tracking-wider">অনুবাদ ভাষা</label>
          <div className="grid grid-cols-3 gap-2">
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setTranslationLanguage(lang.id)}
                className={`py-2 px-1 rounded-xl border text-[12px] font-bold transition-all ${translationLanguage === lang.id ? 'bg-primary text-white border-primary shadow-md' : 'border-text-muted/20 text-text-muted hover:border-primary'}`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </section>

        <section>
          <label className="block text-sm font-semibold mb-3 text-text-muted uppercase tracking-wider">আরবিক ফন্ট</label>
          <div className="grid grid-cols-2 gap-2">
            {['font-amiri', 'font-lateef'].map((font) => (
              <button
                key={font}
                onClick={() => setArabicFont(font)}
                className={`py-2 px-3 rounded-xl border text-sm transition-all ${arabicFont === font ? 'bg-primary text-white border-primary shadow-lg' : 'border-text-muted/20 text-text-muted hover:border-primary'}`}
              >
                {font === 'font-amiri' ? 'Amiri' : 'Lateef'}
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <div className="flex justify-between mb-2 text-sm font-semibold text-text-muted">
              <label>আরবিক সাইজ</label>
              <span className="text-primary font-bold">{arabicSize}px</span>
            </div>
            <input 
              type="range" min="20" max="60" value={arabicSize}
              onChange={(e) => setArabicSize(Number(e.target.value))}
              className="w-full h-2 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2 text-sm font-semibold text-text-muted">
              <label>অনুবাদ সাইজ</label>
              <span className="text-primary font-bold">{translationSize}px</span>
            </div>
            <input 
              type="range" min="14" max="30" value={translationSize}
              onChange={(e) => setTranslationSize(Number(e.target.value))}
              className="w-full h-2 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
