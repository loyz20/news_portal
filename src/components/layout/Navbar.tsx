"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Redirect ke halaman search saat klik tombol
  const handleSearchClick = () => {
    router.push("/search");
    setMenuOpen(false); // close menu jika di mobile
  };

  return (
    <>
      <header className="fixed top-10 left-0 w-full bg-gray-900 text-white shadow-lg z-40 h-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white tracking-wide hover:text-blue-300 transition">
            News Portal
          </Link>

          {/* Center Nav Desktop */}
          <nav className="hidden md:flex space-x-6 absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              <span className="text-white/80 hover:text-white transition-colors relative group">
                Home
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all group-hover:w-full"></span>
              </span>
            </Link>
            {["National", "International", "Economy", "Technology", "Sports"].map((item) => (
              <Link key={item} href={`/kategori/${item.toLowerCase()}`}>
                <span className="text-white/80 hover:text-white transition-colors relative group capitalize">
                  {item}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all group-hover:w-full"></span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="flex items-center space-x-2 relative">
            <Button
              variant="outline"
              size="icon"
              onClick={handleSearchClick}
              className="bg-blue-600 border-transparent hover:bg-blue-700 transition-colors shadow-md"
              aria-label="Cari Berita"
              type="button"
            >
              <Search className="w-5 h-5 text-white" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white/20 border-transparent hover:bg-white/30 transition-colors"
              type="button"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-white" />}
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-white/20 border-transparent hover:bg-white/30 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
            >
              {menuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="flex flex-col md:hidden space-y-2 px-4 pb-4 bg-blue-900 rounded-b-2xl shadow-lg">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-white">Home</Link>
            {["National", "International", "Economy", "Technology", "Sports"].map((item) => (
              <Link key={item} href={`/kategori/${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-white capitalize">
                {item}
              </Link>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={handleSearchClick}
              className="bg-blue-600 border-transparent hover:bg-blue-700 transition-colors mt-2"
              aria-label="Cari Berita"
              type="button"
            >
              <Search className="w-5 h-5 text-white" />
            </Button>
          </nav>
        )}
      </header>
    </>
  );
}
