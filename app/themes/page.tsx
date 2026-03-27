"use client";

import { useState } from "react";
import { ArrowRight, Search, Filter } from "lucide-react";
import { TEMPLATES, getWhatsAppLink } from "@/lib/constants";
import { Category, Style } from "@/types";

export default function ThemesPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">(
    "all",
  );
  const [selectedStyle, setSelectedStyle] = useState<Style | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: (Category | "all")[] = [
    "all",
    "wedding",
    "birthday",
    "anniversary",
    "corporate",
    "other",
  ];
  const styles: (Style | "all")[] = [
    "all",
    "minimalist",
    "elegant",
    "floral",
    "modern",
    "classic",
  ];

  const filteredTemplates = TEMPLATES.filter((template) => {
    const matchesCategory =
      selectedCategory === "all" || template.category === selectedCategory;
    const matchesStyle =
      selectedStyle === "all" || template.style === selectedStyle;
    const matchesSearch =
      searchQuery === "" ||
      template.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStyle && matchesSearch;
  });

  const getCategoryLabel = (category: Category | "all") => {
    const labels: Record<string, string> = {
      all: "Semua",
      wedding: "Pernikahan",
      birthday: "Ulang Tahun",
      anniversary: "Anniversary",
      corporate: "Korporat",
      other: "Lainnya",
    };
    return labels[category];
  };

  const getStyleLabel = (style: Style | "all") => {
    const labels: Record<string, string> = {
      all: "Semua",
      minimalist: "Minimalis",
      elegant: "Elegant",
      floral: "Floral",
      modern: "Modern",
      classic: "Classic",
    };
    return labels[style];
  };

  return (
    <div>
      {/* Header */}
      <section className="section bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Koleksi <span className="text-gradient">Template</span> Kami
          </h1>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Pilih dari berbagai template desain profesional yang siap pakai
            untuk momen spesial Anda
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 py-6 sticky top-16 z-40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light"
                size={20}
              />
              <input
                type="text"
                placeholder="Cari template..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light"
                size={20}
              />
              <select
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(e.target.value as Category | "all")
                }
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {getCategoryLabel(category)}
                  </option>
                ))}
              </select>
            </div>

            {/* Style Filter */}
            <div className="relative">
              <Filter
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light"
                size={20}
              />
              <select
                value={selectedStyle}
                onChange={(e) =>
                  setSelectedStyle(e.target.value as Style | "all")
                }
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
              >
                {styles.map((style) => (
                  <option key={style} value={style}>
                    {getStyleLabel(style)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Template Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-text-light">
                Tidak ada template yang cocok dengan pencarian Anda
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template) => (
                <div
                  key={template.id}
                  className="card overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={template.thumbnail}
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {template.popular && (
                      <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a
                        href={`/preview/${template.id}`}
                        className="btn btn-primary"
                      >
                        Lihat Preview
                      </a>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{template.name}</h3>
                      <span className="text-primary font-bold text-lg">
                        Rp {template.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                        {getCategoryLabel(template.category)}
                      </span>
                      <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-medium">
                        {getStyleLabel(template.style)}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {template.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs text-text-light bg-gray-100 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    href={getWhatsAppLink(
                      `Halo, saya tertarik dengan template ${template.name}`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full"
                  >
                    Pesan Sekarang
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tidak Menemukan Template yang Cocok?
          </h2>
          <p className="text-text-light text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk mendapatkan desain custom sesuai keinginan Anda
          </p>
          <a
            href={getWhatsAppLink(
              "Halo, saya ingin membuat undangan digital custom",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-lg"
          >
            Request Custom Design
          </a>
        </div>
      </section>
    </div>
  );
}
