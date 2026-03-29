"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/themes", label: "Template" },
    { href: "/features", label: "Fitur" },
    { href: "/pricing", label: "Harga" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-pink-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gradient">
            Yourvitation
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-primary transition-colors font-light "
              >
                {link.label}
              </Link>
            ))}
            <a
              href={getWhatsAppLink(
                "Halo, saya ingin membuat undangan digital",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm px-3"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text hover:text-primary transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={getWhatsAppLink(
                  "Halo, saya ingin membuat undangan digital",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
