'use client';
import React, { useState, useEffect } from 'react';
import { useSettingsStore } from '@/store/useSettingsStore';
import { Verse } from '@/types/quran';
import { Search, Settings, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import SettingsSidebar from './SettingsSidebar';

interface SurahViewProps {
  verses: Verse[];
}

export default function SurahView({ verses }: SurahViewProps) {
  const router = useRouter();
  const { arabicFont, arabicSize, translationSize, translationLanguage, darkMode } = useSettingsStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const filteredVerses = verses.filter(v => 
    v.translation.toLowerCase().includes(searchTerm.toLowerCase()) || 
    v.en_translation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-accent transition-colors duration-300">
      <nav className="sticky top-0 bg-bg-card/80 backdrop-blur-md border-b border-primary/10 z-40 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          <button 
            onClick={() => router.push('/')} 
            className="p-2 hover:bg-accent rounded-full transition-colors text-primary"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input
              type="text"
              placeholder="Search in translation..."
              className="w-full pl-10 pr-4 py-2 bg-accent border border-primary/5 rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm text-text-main transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all font-bold text-sm"
          >
            <Settings size={18} />
            <span className="hidden sm:inline">Settings</span>
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 space-y-10 pb-20">
        {filteredVerses.length > 0 ? (
          filteredVerses.map((verse) => (
            <div 
              key={verse.id} 
              className="group border-b border-primary/5 pb-10 last:border-0"
              style={{ contentVisibility: 'auto' }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between gap-6">
                  <span className="w-10 h-10 flex-shrink-0 rounded-full bg-bg-card flex items-center justify-center text-primary font-bold text-xs border border-primary/10 shadow-sm">
                    {verse.verse_number}
                  </span>
                  <p 
                    className={`text-right leading-[2.8] font-arabic text-text-main ${arabicFont}`} 
                    style={{ fontSize: `${arabicSize}px` }}
                  >
                    {verse.text_uthmani}
                  </p>
                </div>

                <div className="pl-2 sm:pl-14 space-y-4">
                  {(translationLanguage === 'bn' || translationLanguage === 'both') && (
                    <p 
                      className="text-text-main font-medium leading-relaxed border-l-3 border-primary/30 pl-4" 
                      style={{ fontSize: `${translationSize}px` }}
                    >
                      {verse.translation}
                    </p>
                  )}
                  {(translationLanguage === 'en' || translationLanguage === 'both') && (
                    <p 
                      className="text-text-muted italic leading-relaxed border-l-3 border-slate-300 dark:border-slate-700 pl-4" 
                      style={{ fontSize: `${translationSize - 2}px` }}
                    >
                      {verse.en_translation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-text-muted font-medium">
            কোনো আয়াত পাওয়া যায়নি।
          </div>
        )}
      </main>

      <SettingsSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}