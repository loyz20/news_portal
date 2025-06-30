import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Dummy Data
const trendingTopics = [
  { title: "Pemilu 2025", slug: "pemilu-2025" },
  { title: "AI & Teknologi", slug: "ai-teknologi" },
  { title: "Ekonomi Global", slug: "ekonomi-global" },
  { title: "Startup Indonesia", slug: "startup-indonesia" },
];
const popularTags = [
  "politik", "fintech", "kesehatan", "edukasi", "olahraga", "ekonomi", "teknologi", "otomotif"
];

export default function Sidebar() {
  return (
    <aside className="space-y-6">

      {/* Trending Topics */}
      <section className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 shadow-sm">
        <h3 className="text-lg font-bold mb-3 dark:text-white">🔥 Trending Topics</h3>
        <ul className="space-y-2">
          {trendingTopics.map((topic, i) => (
            <li key={topic.slug}>
              <Link
                href={`/kategori/${topic.slug}`}
                className="flex items-center gap-2 px-2 py-1 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
              >
                <span className="inline-block w-6 text-xs font-bold text-blue-600 dark:text-blue-400">{i + 1}</span>
                <span className="truncate">{topic.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Popular Tags */}
      <section className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 shadow-sm">
        <h3 className="text-lg font-bold mb-3 dark:text-white">🏷️ Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map(tag => (
            <Link
              href={`/kategori/${tag}`}
              key={tag}
              className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </section>

      {/* Ad/Promotion */}
      <div className="bg-gradient-to-br from-orange-100 to-orange-300 dark:from-orange-900 dark:to-orange-800 flex items-center justify-center h-28 rounded-2xl shadow-sm font-semibold text-orange-900 dark:text-orange-100 text-center">
        <span>Pasang iklan di sini</span>
      </div>

      {/* Newsletter */}
      <section className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 shadow-sm">
        <h4 className="font-bold mb-2 dark:text-white">Newsletter</h4>
        <Input placeholder="Your email address" className="mb-2" />
        <Button className="w-full">Subscribe</Button>
      </section>
    </aside>
  );
}
