import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-900 shadow rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
          {/* Navigasi footer */}
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
            <span className="font-bold text-lg text-gray-700 dark:text-gray-100">News Portal</span>
            <nav className="flex flex-wrap space-x-4 text-sm">
              <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
              <Link href="/policy" className="hover:text-blue-600 transition-colors">Policy</Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                <Mail className="w-4 h-4 inline" /> Contact
              </Link>
            </nav>
          </div>
          {/* Social media */}
          <div className="flex space-x-3">
            <Link href="https://facebook.com/" target="_blank" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com/" target="_blank" aria-label="Twitter" className="hover:text-sky-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com/" target="_blank" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-xs text-gray-400 mt-4 text-center">
          &copy; {new Date().getFullYear()} News Portal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
