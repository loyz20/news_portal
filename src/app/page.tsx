"use client";

import Headline from "@/components/news/Headline";
import NewsList from "@/components/news/NewsList";
import Sidebar from "@/components/news/Sidebar";
import { fetchHeadlines, fetchNewsList } from "@/lib/data/newsService";
import { useEffect, useState } from "react";
import type { HeadlineMain, HeadlineSecondary, NewsItem } from "@/types/news.types";
import NewsListSkeleton from "@/components/news/NewsListSkeleton";

export default function Home() {
  const [headline, setHeadline] = useState<{ main: HeadlineMain; secondary: HeadlineSecondary[] } | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchHeadlines(), fetchNewsList()])
      .then(([headlines, newsList]) => {
        setHeadline(headlines);
        setNews(newsList);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <NewsListSkeleton />;  
  if (!headline) return <p>Loading...</p>;

  return (
    <>
    <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <Headline main={headline.main} secondary={headline.secondary} />

      {/* Grid: Konten & Sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Konten utama */}
        <div className="md:col-span-2 space-y-4">
          <NewsList
            title="Berita Terbaru"
            layout="list"
            items={news} />
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>

    </main></>
  );
}
