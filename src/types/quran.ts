export interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export interface Verse {
  id: number;
  verse_number: number;
  text_uthmani: string;
  translation: string;
  en_translation: string;
}

export interface QuranResponse<T> {
  code: number;
  status: string;
  data: T;
}
