"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import NewsCard from "@/components/news/NewsCard";
import NewsListSkeleton from "@/components/news/NewsListSkeleton";
import { fetchNewsByKeyword } from "@/lib/data/newsService";
import type { NewsItem } from "@/types/news.types";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<NewsItem[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setKeyword(query);
  };

  useEffect(() => {
    if (!keyword) return;
    setLoading(true);
    fetchNewsByKeyword(keyword).then((data) => {
      setResults(data);
      setLoading(false);
    });
  }, [keyword]);

  return (
    <main className="max-w-7xl mx-auto px-4 pt-[88px] space-y-6">
      <form
        onSubmit={handleSearch}
        className="sticky top-[88px] z-20 bg-white dark:bg-slate-900 py-4 flex items-center gap-2 shadow dark:shadow-md"
      >
        <Input
          type="search"
          placeholder="Cari berita..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-2/3 bg-slate-100 dark:bg-slate-800 dark:text-white"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-700"
        >
          Cari
        </button>
      </form>

      {keyword && (
        <div className="mb-4">
          <span className="text-gray-700 dark:text-gray-200">
            Hasil pencarian untuk: <b>{keyword}</b>
            {loading ? null : ` — ${results.length} hasil ditemukan`}
          </span>
        </div>
      )}

      {loading ? (
        <NewsListSkeleton />
      ) : (
        <div className="space-y-4">
          {results.length === 0 && keyword && (
            <div className="text-gray-400 dark:text-gray-500 italic">Tidak ada berita ditemukan.</div>
          )}
          {results.map((item) => (
            <NewsCard key={item.slug} {...item} />
          ))}
        </div>
      )}
    </main>
  );
}
