"use client";
import SettingsSidebar from "@/components/SettingsSidebar";
import { Search, BookOpen, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { getSurahList } from "@/utils/api";
import { Surah } from "@/types/quran";
import Link from "next/link";
import { useSettingsStore } from "@/store/useSettingsStore";

export default function Home() {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const darkMode = useSettingsStore((state) => state.darkMode);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");

    const fetchSurahs = async () => {
      try {
        const data = await getSurahList();
        setSurahs(data);
      } catch (error) {
        console.error("Failed to fetch surahs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSurahs();
  }, [darkMode]);

  const filteredSurahs = surahs.filter(
    (s) =>
      s.englishName.toLowerCase().includes(search.toLowerCase()) ||
      s.name.includes(search)
  );

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center bg-accent">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );

  return (
    <main className="container mx-auto p-4 md:p-6 w-full ">
      <header className="mb-10 flex flex-col gap-6 px-1">
        {/* Top Row: Logo & Mobile Settings */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-black text-primary flex items-center gap-2 md:gap-3 leading-tight">
              <BookOpen className="w-8 h-8 md:w-10 md:h-10" />
              <span>Al-Quran</span>
            </h1>
            <p className="text-text-muted text-sm md:text-base font-medium mt-1 hidden sm:block">
              পবিত্র কুরআনুল কারীম পড়ুন এবং শিখুন
            </p>
          </div>

          {/* Settings Button for Mobile */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden p-3 bg-bg-card border border-primary/10 rounded-xl shadow-sm text-primary active:scale-95 transition-transform"
            aria-label="Settings"
          >
            <Settings size={22} />
          </button>
        </div>

        {/* Bottom Row: Search & Desktop Settings */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <div className="relative w-full">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
              size={18}
            />
            <input
              type="text"
              placeholder="সুরা সার্চ করুন..."
              className="w-full pl-11 pr-4 py-3.5 bg-bg-card border border-primary/5 rounded-xl focus:ring-2 focus:ring-primary shadow-sm outline-none text-text-main text-sm md:text-base transition-all"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Settings Button for Desktop */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-xl hover:shadow-lg active:scale-95 transition-all font-bold whitespace-nowrap"
          >
            <Settings size={20} />
            <span>সেটিংস</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredSurahs.map((surah) => (
          <Link key={surah.number} href={`/surah/${surah.number}`}>
            <div className="group p-4 md:p-6 bg-bg-card border border-primary/5 rounded-2xl hover:border-primary/40 hover:shadow-xl transition-all flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 flex items-center justify-center bg-accent text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all font-black text-xl">
                  {surah.number}
                </div>
                <div>
                  <h3 className="font-bold text-text-main text-lg group-hover:text-primary">
                    {surah.englishName}
                  </h3>
                  <p className="text-xs text-text-muted font-bold uppercase tracking-widest">
                    {surah.numberOfAyahs} Ayahs
                  </p>
                </div>
              </div>
              <p className="text-2xl font-arabic text-primary">{surah.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <SettingsSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </main>
  );
}
