import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-24 pb-8 space-y-10">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      
      {/* Main Image */}
      <div className="w-full h-64 md:h-96 mb-10 rounded-xl overflow-hidden bg-gray-100">
        <Image
          src="https://placehold.co/1200x400/png"
          alt="About us banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-8">
          {/* Media Profile */}
          <section>
            <h2 className="text-2xl font-bold mb-2">Our Media Profile</h2>
            <p className="text-gray-600">
              Portal Berita Modern adalah platform media digital yang menyajikan berita aktual, terpercaya, dan berimbang. Fokus kami adalah memberikan informasi terkini dari berbagai kategori seperti nasional, ekonomi, teknologi, hingga internasional.
            </p>
          </section>

          {/* Vision and Mission */}
          <section>
            <h2 className="text-2xl font-bold mb-2">Our Vision and Mission</h2>
            <p className="text-gray-600 mb-2">
              <b>Visi:</b> Menjadi rujukan utama informasi aktual, inovatif, dan terpercaya di Indonesia.
            </p>
            <p className="text-gray-600">
              <b>Misi:</b>
              <ul className="list-disc ml-5 mt-1 space-y-1 text-gray-600">
                <li>Menyajikan berita yang akurat dan faktual.</li>
                <li>Mengembangkan jurnalisme yang edukatif dan inspiratif.</li>
                <li>Memprioritaskan integritas, etika, dan keberimbangan informasi.</li>
              </ul>
            </p>
          </section>
        </div>

        {/* Right Column */}
        <aside className="space-y-8">
          {/* Editorial Contacts */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-xl mb-2">Editorial Contacts</h3>
            <div className="text-gray-700 text-sm">
              <div>
                <b>Email:</b> redaksi@newsportal.com
              </div>
              <div>
                <b>Telepon:</b> (021) 123-4567
              </div>
              <div>
                <b>Alamat:</b>
                <div>
                  Jl. Kebangsaan No. 1, Jakarta 12345
                </div>
              </div>
            </div>
          </section>
          {/* Logo or Team Photo */}
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src="https://placehold.co/400x300/png"
              alt="Editorial Team"
              fill
              className="object-cover"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
