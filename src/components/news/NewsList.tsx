import NewsCard from "./NewsCard";
import type { NewsItem } from "@/types/news.types";

interface NewsListProps {
  items: NewsItem[];
  title?: string;
  layout?: "list" | "grid";
}

export default function NewsList({ items, title, layout = "list" }: NewsListProps) {
  return (
    <section className="my-6">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

      {items.length === 0 ? (
        <p className="text-gray-500">Belum ada berita.</p>
      ) : layout === "list" ? (
        <div className="space-y-4">
          {items.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              summary={news.summary}
              imageUrl={news.imageUrl}
              category={news.category}
              slug={news.slug}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              summary={news.summary}
              imageUrl={news.imageUrl}
              category={news.category}
              slug={news.slug}
            />
          ))}
        </div>
      )}
    </section>
  );
}
