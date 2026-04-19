import { getSurahDetails, getSurahList } from "@/utils/api";
import { Surah } from "@/types/quran";
import SurahView from "@/components/SurahView";

export async function generateStaticParams() {
  const surahs = await getSurahList();
  return surahs.map((surah: Surah) => ({
    id: surah.number.toString(),
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function SurahDetailPage({ params }: PageProps) {
  const { id } = await params;
  const verses = await getSurahDetails(id);

  return <SurahView verses={verses} />;
}

