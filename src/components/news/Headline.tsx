import Image from "next/image";
import Link from "next/link";

interface Props {
  main: {
    title: string;
    badge?: string;
    imageUrl: string;
    slug: string;
  };
  secondary: {
    title: string;
    imageUrl: string;
    slug: string;
  }[];
}

export default function Headline({ main, secondary }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
      
      {/* Gambar besar kiri */}
      <div className="md:col-span-2 relative h-[400px] rounded-xl overflow-hidden group">
        
        <Link href={`/berita/${main.slug}`} className="block w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src={main.imageUrl}
              alt={main.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-3xl font-bold text-white">{main.title}</h1>
              {main.badge && <p className="text-gray-300">{main.badge}</p>}
            </div>
          </div>
        </Link>
      </div>

      {/* Dua gambar kecil kanan */}
      <div className="flex flex-col justify-between space-y-4 h-full">
        
        {secondary.map((item, idx) => (
          <div key={idx} className="relative h-[200px] rounded-xl overflow-hidden group">
            <Link href={`/berita/${item.slug}`} className="block w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h2 className="font-bold text-white">{item.title}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}

      </div>
    </section>
  );
}
