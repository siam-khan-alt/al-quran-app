'use client';
import SettingsSidebar from "@/components/SettingsSidebar";
import { Settings } from "lucide-react";
import { useState } from "react";

export default function Home() {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="container mx-auto p-6 w-full flex gap-6">
      <p>Al Quran</p>
      <button 
            onClick={() => setIsSidebarOpen(true)}
            className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-bold"
          >
            <Settings size={20} /> সেটিংস
          </button>

        <SettingsSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      </main>
  );
}