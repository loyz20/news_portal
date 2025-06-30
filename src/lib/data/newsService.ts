import { dummyNewsList } from "./dummyNews";
import type { NewsItem, Category, ArticleDetail, HeadlineMain, HeadlineSecondary } from "@/types/news.types";

export async function fetchNewsList(): Promise<NewsItem[]> {
  // Simulasi pengambilan data dari API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyNewsList);
    }, 1000);
  });
}
export async function fetchCategories(): Promise<Category[]> {
  // Simulasi pengambilan data kategori
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { slug: "teknologi", name: "Teknologi" },
        { slug: "olahraga", name: "Olahraga" },
        { slug: "hiburan", name: "Hiburan" },
      ]);
    }, 1000);
  });
}

export async function fetchNewsDetail(slug: string): Promise<ArticleDetail | null> {
  // Simulasi pengambilan detail berita berdasarkan slug
  return new Promise((resolve) => {
    setTimeout(() => {
      const article = dummyNewsList.find((item) => item.slug === slug);
      if (article) {
        resolve({
          title: article.title,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          imageUrl: article.imageUrl,
          category: article.category,
          slug: article.slug,
        });
      } else {
        resolve(null);
      }
    }, 1000);
  });
}

export async function fetchHeadlines(): Promise<{
  main: HeadlineMain;
  secondary: HeadlineSecondary[];
}> {
  // Simulasi pengambilan data headline
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        main: {
          title: "Berita Utama Hari Ini",
          badge: "Breaking News",
          imageUrl: "https://placehold.co/600x400/png?text=Breaking+News",
          slug: "berita-utama-hari-ini",
        },
        secondary: [
          {
            title: "Headline 1",
            imageUrl: "https://placehold.co/300x200/png?text=Breaking+News",
            slug: "headline-1",
          },
          {
            title: "Headline 2",
            imageUrl: "https://placehold.co/300x200/png?text=Breaking+News",
            slug: "headline-2",
          },
        ],
      });
    }, 1000);
  });
}

export async function fetchCategoryArticles(slug: string): Promise<NewsItem[]> {
  // Simulasi pengambilan artikel berdasarkan kategori
  return new Promise((resolve) => {
    setTimeout(() => {
      const articles = dummyNewsList.filter((item) => item.category === slug);
      resolve(articles);
    }, 1000);
  });
}


export async function fetchRelatedArticles(slug: string): Promise<NewsItem[]> {
  // Simulasi pengambilan artikel terkait
  return new Promise((resolve) => {
    setTimeout(() => {
      const related = dummyNewsList.filter((item) => item.slug !== slug).slice(0, 3);
      resolve(related);
    }, 1000);
  });
}

export async function fetchArticleBySlug(slug: string): Promise<ArticleDetail | null> {
  // Simulasi pengambilan artikel berdasarkan slug
  return new Promise((resolve) => {
    setTimeout(() => {
      const article = dummyNewsList.find((item) => item.slug === slug);
      if (article) {
        resolve({
          title: article.title,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          imageUrl: article.imageUrl,
          category: article.category,
          slug: article.slug,
        });
      } else {
        resolve(null);
      }
    }, 1000);
  });
}

// src/lib/data/newsService.ts
export async function fetchNewsByKeyword(keyword: string) {
  await new Promise((r) => setTimeout(r, 600)); // simulasi loading
  // Filter dari dummyNewsList dengan title/summary mengandung keyword
  return dummyNewsList.filter(
    (n) =>
      n.title.toLowerCase().includes(keyword.toLowerCase()) ||
      n.summary.toLowerCase().includes(keyword.toLowerCase())
  );
}
