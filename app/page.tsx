"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Check,
  ChevronDown,
  ChevronUp,
  MessageCircle,
} from "lucide-react";
import {
  TEMPLATES,
  FEATURES,
  PRICING,
  FAQs,
  TESTIMONIALS,
  getWhatsAppLink,
} from "@/lib/constants";

export default function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const popularTemplates = TEMPLATES.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 py-20 md:py-32">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Buat Undangan Digital{" "}
                <span className="text-gradient">Elegan</span> dalam Hitungan
                Menit
              </h1>
              <p className="text-lg text-text-light md:text-xl">
                Undangan digital modern untuk momen spesial Anda. Praktis,
                hemat, dan ramah lingkungan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={getWhatsAppLink(
                    "Halo, saya ingin membuat undangan digital",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg"
                >
                  Mulai Sekarang
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <Link href="/themes" className="btn btn-secondary text-lg">
                  Lihat Contoh
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-text-light">
                <div className="flex items-center gap-2">
                  <Star className="text-accent fill-current" size={16} />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-success" size={16} />
                  <span>500+ Undangan Dibuat</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&fit=crop"
                  alt="Undangan Digital"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-primary" size={32} />
                  <div>
                    <p className="font-semibold">Chat WhatsApp</p>
                    <p className="text-sm text-text-light">Respon Cepat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fitur <span className="text-gradient">Unggulan</span>
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Dilengkapi dengan berbagai fitur modern untuk mempermudah Anda
              dalam membuat undangan digital
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.slice(0, 6).map((feature) => (
              <div
                key={feature.id}
                className="card hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">
                    {feature.icon.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-text-light">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/features" className="btn btn-outline">
              Lihat Semua Fitur
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Template <span className="text-gradient">Populer</span>
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Pilih dari berbagai template desain profesional yang siap pakai
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTemplates.map((template) => (
              <div
                key={template.id}
                className="card overflow-hidden group cursor-pointer"
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
                </div>
                <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">
                    Rp {template.price.toLocaleString()}
                  </span>
                  <Link
                    href="/themes"
                    className="text-sm text-text-light hover:text-primary transition-colors"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/themes" className="btn btn-primary">
              Lihat Semua Template
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apa Kata <span className="text-gradient">Mereka?</span>
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Lihat testimoni dari klien yang sudah menggunakan Yourvitation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-3 mb-4">
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-text-light">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-text-light italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pilihan Paket{" "}
              <span className="text-gradient">Sesuai Kebutuhan</span>
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Pilih paket yang paling sesuai dengan kebutuhan acara Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING.map((plan) => (
              <div
                key={plan.id}
                className={`card relative ${
                  plan.popular ? "border-2 border-primary scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Paling Populer
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 capitalize">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-gradient mb-2">
                    Rp {plan.price.toLocaleString()}
                  </div>
                  <p className="text-text-light">/{plan.duration}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check
                        className="text-success mt-0.5 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-text-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppLink(
                    `Halo, saya tertarik dengan paket ${plan.name}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn w-full ${
                    plan.popular ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/pricing" className="btn btn-outline">
              Lihat Detail Harga
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pertanyaan <span className="text-gradient">Umum</span>
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  onClick={() => toggleFAQ(faq.question)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openFAQ === faq.question ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </button>
                {openFAQ === faq.question && (
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <p className="text-text-light">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Membuat Undangan Anda?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang dan dapatkan undangan digital impian Anda
            dalam hitungan hari
          </p>
          <a
            href={getWhatsAppLink("Halo, saya ingin membuat undangan digital")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-primary rounded-xl px-8 py-4 font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            <MessageCircle className="mr-2" size={24} />
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
