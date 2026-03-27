import { PRICING, FAQs, getWhatsAppLink } from "@/lib/constants";

export default function PricingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pilihan Paket{" "}
            <span className="text-gradient">Sesuai Kebutuhan</span>
          </h1>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Pilih paket yang paling sesuai dengan kebutuhan dan budget acara
            Anda
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING.map((plan) => (
              <div
                key={plan.id}
                className={`card relative ${
                  plan.popular ? "border-2 border-primary scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Paling Populer
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 capitalize">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-gradient">
                      Rp {plan.price.toLocaleString()}
                    </span>
                    <span className="text-text-light">/{plan.duration}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="text-success mt-0.5 flex-shrink-0"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 0116 0zm-3.293-5.707a1 1 0 00-1.414-1.414l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
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
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Perbandingan <span className="text-gradient">Fitur</span>
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Lihat perbandingan lengkap antar semua paket
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm min-w-[700px]">
              <thead>
                <tr className="bg-gradient-primary text-white">
                  <th className="text-left p-4 font-semibold">Fitur</th>
                  <th className="text-center p-4 font-semibold">Basic</th>
                  <th className="text-center p-4 font-semibold">Premium</th>
                  <th className="text-center p-4 font-semibold">Custom</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">Harga</td>
                  <td className="p-4 text-center">Rp 149.000</td>
                  <td className="p-4 text-center font-bold text-primary">
                    Rp 299.000
                  </td>
                  <td className="p-4 text-center">Mulai Rp 499.000</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">Durasi</td>
                  <td className="p-4 text-center">1 bulan</td>
                  <td className="p-4 text-center font-bold text-primary">
                    3 bulan
                  </td>
                  <td className="p-4 text-center">6 bulan</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">Template</td>
                  <td className="p-4 text-center">1 pilihan</td>
                  <td className="p-4 text-center font-bold text-primary">
                    Unlimited
                  </td>
                  <td className="p-4 text-center">Desain eksklusif</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">Maksimal Tamu</td>
                  <td className="p-4 text-center">100 tamu</td>
                  <td className="p-4 text-center font-bold text-primary">
                    500 tamu
                  </td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">Galeri Foto</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center font-bold text-primary">
                    50 gambar
                  </td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">Background Music</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center font-bold text-primary">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">Video Intro</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center font-bold text-primary">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">Kustomisasi Penuh</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center font-bold text-primary">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Support Prioritas</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center font-bold text-primary">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Pertanyaan <span className="text-gradient">Seputar Harga</span>
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Jawaban untuk pertanyaan yang sering diajukan tentang harga dan
              paket
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-text-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Masih Bingung Pilih Paket Mana?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami dan kami akan bantu Anda memilih paket yang paling
            cocok dengan kebutuhan dan budget Anda
          </p>
          <a
            href={getWhatsAppLink(
              "Halo, saya butuh rekomendasi paket undangan",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-primary rounded-xl px-8 py-4 font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            <svg
              className="mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 017.7 0 8.38 8.38 0 01-.9-3.8 3.8 3.8 0 01-7.6 0C4.5 16.3 2 12.8 2 9s2.5-7.3 6.4-10.7A3.99 3.99 0 004 4h4c1.6 0 3.1.4 4.2 1.1l.8.8 2.8L4 9c-.6 1.6-.9 3.2-.9 4.8 0 4.6 3.7 8.3 8.3 8.3zM12 7c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1 1-.6 0-1-.4-1-1z"
              />
            </svg>
            Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
