import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Yourvitation
            </h3>
            <p className="text-text-light mb-4">
              Platform undangan digital modern untuk momen spesial Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/themes"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  Template
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  Fitur
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  Harga
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Kategori</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/themes?category=wedding"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  Pernikahan
                </Link>
              </li>
              <li>
                <Link
                  href="/themes?category=birthday"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  Ulang Tahun
                </Link>
              </li>
              <li>
                <Link
                  href="/themes?category=corporate"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  Korporat
                </Link>
              </li>
              <li>
                <Link
                  href="/themes?category=anniversary"
                  className="text-text-light hover:text-primary transition-colors"
                >
                  Anniversary
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-text-light">
                <Mail size={16} />
                <span>admin@yourvitation.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-text-light">
          <p>&copy; {currentYear} Yourvitation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
