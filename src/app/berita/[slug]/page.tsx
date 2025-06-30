"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter } from "lucide-react";
import { fetchNewsDetail, fetchRelatedArticles } from "@/lib/data/newsService";
import NewsCard from "@/components/news/NewsCard";
import NewsListSkeleton from "@/components/news/NewsListSkeleton";
import type { ArticleDetail, NewsItem } from "@/types/news.types";
import React from "react";
import Sidebar from "@/components/news/Sidebar";
import Breadcrumb from "@/components/news/Breadcrumb";

export default function BeritaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const [detail, setDetail] = useState<ArticleDetail | null>(null);
  const [related, setRelated] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    Promise.all([fetchNewsDetail(slug), fetchRelatedArticles(slug)]).then(
      ([det, rel]) => {
        if (isMounted) {
          // Ensure det matches NewsItem type
          setDetail(
            det
              ? {
                title: det.title,
                content: det.content,
                imageUrl: det.imageUrl,
                category: det.category,
                slug: det.slug,
                }
              : null
          );
          setRelated(rel);
          setLoading(false);
        }
      }
    );

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) return <NewsListSkeleton/>;
  if (!detail) return <div className="text-center text-gray-500 py-16">Not found</div>;

  return (
    <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb category={detail.category ?? "uncategorized"} />

      {/* Judul Artikel */}
      <h1 className="text-3xl font-bold">{detail.title}</h1>
      {/* Penulis Artikel */}
      <p className="text-sm text-gray-600 mb-2">Tim Redaksi, News Portal</p>
      {/* Tanggal Artikel */}
      <p className="text-sm text-gray-600 mb-4">
        {new Date("2018-07-11").toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      {/* Grid Konten + Sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Konten Utama */}
        <article className="md:col-span-2 space-y-4">
          {/* Gambar Utama */}
          <div className="relative w-full h-64 rounded-xl overflow-hidden">
            <Image
              src={detail.imageUrl}
              alt={detail.title}
              fill
              className="object-cover"
            />
          </div>
          {/* Social Share */}
          <div className="flex items-center space-x-4 text-gray-600">
            <Link href="#">
              <Facebook className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
            </Link>
            <Link href="#">
              <Twitter className="w-5 h-5 hover:text-sky-500 cursor-pointer" />
            </Link>
          </div>
          {/* Konten Artikel */}
          <div dangerouslySetInnerHTML={{ __html: detail.content }} />
        </article>
        {/* Sidebar Related Articles */}
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
    </main>
  );
}
