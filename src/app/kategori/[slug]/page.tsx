"use client";

import Breadcrumb from "@/components/news/Breadcrumb";
import NewsCard from "@/components/news/NewsCard";
import NewsListSkeleton from "@/components/news/NewsListSkeleton";
import Sidebar from "@/components/news/Sidebar";
import { fetchCategories, fetchRelatedArticles } from "@/lib/data/newsService";
import { Category, NewsItem } from "@/types/news.types";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

export default function KategoriPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const [category, setCategory] = useState<Category[]>([]);
  const [related, setRelated] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cat = await fetchCategories();
      const rel = await fetchRelatedArticles(slug);
      setCategory(cat);
      setRelated(rel);
      setLoading(false);
    }
    fetchData();
  }, [slug]);

  if (loading) return <NewsListSkeleton />;
  if (!category.length) return <div>Not found</div>;

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
       {/* Breadcrumb */}
         <Breadcrumb category={category[0]?.name ?? "uncategorized"} />

        {/* Grid Artikel Utama + Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Konten Utama */}
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold capitalize">{category[0]?.name} News</h1>

            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image
                src="https://placehold.co/800x400/png"
                alt="Artikel Utama"
                className="object-cover w-full h-full"
                layout="fill"
              />
            </div>

            <h2 className="text-2xl font-bold">Judul Artikel Utama</h2>
            <p className="text-gray-600">
              Ringkasan singkat artikel utama kategori {category[0]?.name}, menarik perhatian pembaca.
            </p>
          </div>

          {/* Sidebar Artikel Terkait */}
          <aside className="space-y-4">
            <h3 className="font-bold text-lg">Related Articles</h3>
            {related.map((article) => (
              <NewsCard
                key={article.slug}
                title={article.title}
                summary={article.summary}
                imageUrl={article.imageUrl}
                slug={article.slug}
                category={article.category}
              />
            ))}

            <Sidebar />
          </aside>
        </div>

        {/* Related Articles Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6"></section>
      </main>
    </>
  );
}