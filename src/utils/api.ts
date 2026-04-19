import axios from 'axios';
import {  Surah, Verse, QuranResponse } from '@/types/quran';

interface APIAyah {
  number: number;
  text: string;
  numberInSurah: number;
}

interface APIEditionData {
  ayahs: APIAyah[];
  edition: {
    identifier: string;
  };
}

const API_BASE = 'https://api.alquran.cloud/v1';

export const getSurahList = async (): Promise<Surah[]> => {
  const response = await axios.get<QuranResponse<Surah[]>>(`${API_BASE}/surah`);
  return response.data.data;
};

export const getSurahDetails = async (id: string): Promise<Verse[]> => {
  if (!id || id === 'undefined') return [];

  try {
    const response = await axios.get<QuranResponse<APIEditionData[]>>(
      `${API_BASE}/surah/${id}/editions/quran-uthmani,bn.bengali,en.sahih`
    );
    
    const data = response.data?.data;
    if (!data || data.length < 3) return [];

    const arabic = data.find(ed => ed.edition.identifier === 'quran-uthmani');
    const bengali = data.find(ed => ed.edition.identifier === 'bn.bengali');
    const english = data.find(ed => ed.edition.identifier === 'en.sahih');

    if (!arabic?.ayahs) return [];

    return arabic.ayahs.map((ayah, index): Verse => ({
      id: ayah.number,
      verse_number: ayah.numberInSurah,
      text_uthmani: ayah.text,
      translation: bengali?.ayahs[index]?.text || "অনুবাদ পাওয়া যায়নি",
      en_translation: english?.ayahs[index]?.text || "Translation not found" 
    }));
  } catch (error) {
    console.error(`Error fetching Surah ${id}:`, error);
    return [];
  }
};

