export default function PolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-24 pb-16 space-y-10">
      <h1 className="text-5xl font-bold mb-8">Policies & Disclaimer</h1>
      
      {/* Privacy Policy */}
      <section>
        <h2 className="text-3xl font-bold mb-2">Privacy Policy</h2>
        <p className="text-gray-700 mb-6">
          Kami menghormati privasi Anda. Informasi pribadi yang dikumpulkan tidak akan dijual, didistribusikan, atau dipinjamkan kepada pihak ketiga, kecuali dengan persetujuan Anda atau sesuai ketentuan hukum yang berlaku.
        </p>
      </section>
      
      {/* Copyright */}
      <section>
        <h2 className="text-3xl font-bold mb-2">Copyright</h2>
        <p className="text-gray-700 mb-6">
          Seluruh isi berita, gambar, dan video di portal ini dilindungi hak cipta. Penggunaan tanpa izin tertulis dari redaksi dilarang kecuali untuk kepentingan pendidikan dan non-komersial dengan mencantumkan sumber.
        </p>
      </section>

      {/* Disclaimer */}
      <section>
        <h2 className="text-3xl font-bold mb-2">Disclaimer</h2>
        <p className="text-gray-700 mb-6">
          Konten yang tersedia di situs ini bersifat informatif. Kami tidak bertanggung jawab atas kerugian atau dampak yang timbul dari penggunaan informasi di portal ini. 
        </p>
      </section>
    </main>
  );
}
