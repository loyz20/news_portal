export default function CategoryPageSkeleton() {
  return (
    <div className="my-6">
      {/* Headline Category & Gambar */}
      <div className="mb-6">
        <div className="h-10 w-56 bg-amber-100 rounded mb-4 animate-pulse" />
        <div className="w-full h-64 bg-amber-100 rounded-xl mb-4 animate-pulse" />
      </div>
      {/* Headline Article */}
      <div className="mb-6">
        <div className="h-8 w-2/3 bg-amber-100 rounded mb-4 animate-pulse" />
        <div className="h-3 w-5/6 bg-amber-100 rounded mb-2 animate-pulse" />
        <div className="h-3 w-3/4 bg-amber-100 rounded mb-2 animate-pulse" />
        <div className="h-3 w-4/6 bg-amber-100 rounded mb-2 animate-pulse" />
        <div className="h-3 w-2/3 bg-amber-100 rounded mb-2 animate-pulse" />
      </div>
      {/* Related Article Sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Grid List 3 kolom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="rounded-xl border border-amber-100 bg-amber-50 p-3 animate-pulse">
                <div className="w-full h-24 bg-amber-100 rounded mb-2"></div>
                <div className="h-4 w-2/3 bg-amber-100 rounded mb-2"></div>
                <div className="h-3 w-4/5 bg-amber-100 rounded mb-1"></div>
                <div className="h-3 w-2/3 bg-amber-100 rounded"></div>
              </div>
            ))}
          </div>
        </div>
        {/* Sidebar Related */}
        <div className="flex flex-col gap-4">
          <div className="h-6 w-1/2 bg-amber-100 rounded mb-2 animate-pulse" />
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="rounded-lg border border-amber-100 bg-amber-50 p-3 flex gap-2 items-center animate-pulse">
              <div className="w-16 h-12 bg-amber-100 rounded" />
              <div>
                <div className="h-3 w-20 bg-amber-100 rounded mb-1"></div>
                <div className="h-3 w-16 bg-amber-100 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function NewsGridSkeleton({ count = 3 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="rounded-xl border border-amber-100 bg-amber-50 p-3 animate-pulse">
          <div className="w-full h-24 bg-amber-100 rounded mb-2"></div>
          <div className="h-4 w-2/3 bg-amber-100 rounded mb-2"></div>
          <div className="h-3 w-4/5 bg-amber-100 rounded mb-1"></div>
          <div className="h-3 w-2/3 bg-amber-100 rounded"></div>
        </div>
      ))}
    </div>
  );
}
