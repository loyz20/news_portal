import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ category }: { category: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center text-sm mb-4 space-x-1"
    >
      <Link
        href="/"
        className="text-gray-500 hover:text-blue-600 font-medium transition-colors"
      >
        Home
      </Link>
      <ChevronRight className="w-4 h-4 mx-1 text-gray-400" aria-hidden="true" />
      <Link
        href={`/kategori/${category.toLowerCase()}`}
        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium capitalize transition-colors"
      >
        {category}
      </Link>
    </nav>
  );
}
