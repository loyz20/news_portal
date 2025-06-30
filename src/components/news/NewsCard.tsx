import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  summary: string;
  imageUrl: string;
  slug: string;
  category: string;
}

export default function NewsCard({ title, summary, imageUrl, slug, category }: Props) {
  return (
    <div className="flex space-x-4 group shadow-md hover:shadow-xl transition-shadow duration-300 p-3 rounded-xl cursor-pointer bg-white border border-gray-200">
      
      <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="128px"
          priority
        />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded">
          {category}
        </span>
      </div>

      <div className="flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{summary}</p>

        {slug && (
          <Link
            href={`/berita/${slug}`}
            className="text-orange-500 hover:text-orange-600 text-sm mt-1 transition-colors"
          >
            Baca Selengkapnya
          </Link>
        )}
      </div>
    </div>
  );
}
