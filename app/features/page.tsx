import { FEATURES } from "@/lib/constants";

export default function FeaturesPage() {
  const featureCategories = [
    {
      id: "design",
      title: "Desain & Kustomisasi",
      description: "Buat undangan yang unik dan sesuai dengan tema acara Anda",
    },
    {
      id: "guest",
      title: "Manajemen Tamu",
      description: "Kelola daftar tamu dan konfirmasi kehadiran dengan mudah",
    },
    {
      id: "interactive",
      title: "Fitur Interaktif",
      description:
        "Tambahkan elemen interaktif untuk pengalaman yang lebih menarik",
    },
    {
      id: "integration",
      title: "Integrasi & Share",
      description: "Bagikan undangan dengan mudah dan pantau performanya",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fitur <span className="text-gradient">Lengkap</span> Yourvitation
          </h1>
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Dilengkapi dengan berbagai fitur modern untuk membuat undangan
            digital yang profesional dan mudah digunakan
          </p>
        </div>
      </section>

      {/* Features by Category */}
      {featureCategories.map((category) => {
        const categoryFeatures = FEATURES.filter(
          (f) => f.category === category.id,
        );

        return (
          <section key={category.id} className="section bg-white">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                <p className="text-lg text-text-light max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryFeatures.map((feature) => (
                  <div key={feature.id} className="card">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-2xl">
                        {feature.icon.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-text-light mb-4">
                      {feature.description}
                    </p>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-primary mb-1">
                        Manfaat:
                      </p>
                      <p className="text-sm text-text-light">
                        {feature.benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Membuat Undangan Anda?
          </h2>
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang dan mulai buat undangan digital untuk momen
            spesial Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/themes" className="btn btn-primary text-lg">
              Pilih Template
            </a>
            <a href="/pricing" className="btn btn-secondary text-lg">
              Lihat Harga
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
