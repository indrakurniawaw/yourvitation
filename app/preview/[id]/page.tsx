"use client";

import { useState, useEffect } from "react";
import {
  Play,
  Pause,
  Share2,
  Calendar,
  MapPin,
  Heart,
  Gift,
  Clock,
  User,
  Music,
} from "lucide-react";
import { TEMPLATES } from "@/lib/constants";

export default function PreviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [id, setId] = useState<string>("");
  const [template, setTemplate] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
      const foundTemplate = TEMPLATES.find((t) => t.id === resolvedParams.id);
      setTemplate(foundTemplate);
    };
    unwrapParams();
  }, [params]);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const calculateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const shareInvitation = async () => {
    if (navigator.share) {
      await navigator.share({
        title: `Undangan ${template?.name}`,
        text: "Kami mengundang Anda untuk menghadiri acara spesial kami",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link berhasil disalin!");
    }
  };

  const sections = [
    { id: "home", label: "Beranda" },
    { id: "couple", label: "Mempelai" },
    { id: "countdown", label: "Countdown" },
    { id: "event", label: "Acara" },
    { id: "gallery", label: "Galeri" },
    { id: "story", label: "Kisah" },
    { id: "rsvp", label: "RSVP" },
  ];

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Template tidak ditemukan</h1>
          <a href="/themes" className="text-primary hover:underline">
            Kembali ke halaman Themes
          </a>
        </div>
      </div>
    );
  }

  const isWedding = template.category === "wedding";
  const isBirthday = template.category === "birthday";
  const isAnniversary = template.category === "anniversary";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 right-6 flex justify-between z-50 pointer-events-none">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="pointer-events-auto bg-white text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Toggle music"
        >
          <div
            className={`w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center ${isPlaying ? "animate-pulse" : ""}`}
          >
            {isPlaying ? (
              <Pause className="text-white" size={20} />
            ) : (
              <Play className="text-white ml-1" size={20} />
            )}
          </div>
        </button>
        <button
          onClick={shareInvitation}
          className="pointer-events-auto bg-white text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Share invitation"
        >
          <Share2 size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden">
        <div className="flex justify-around py-2 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                document
                  .getElementById(section.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`flex flex-col items-center px-4 py-2 min-w-max ${
                activeSection === section.id ? "text-primary" : "text-gray-600"
              }`}
            >
              <span className="text-xs font-medium">{section.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Split Screen Layout */}
      <div className="flex h-screen">
        {/* Left Side - Fixed with Animated Stars */}
        <div className="w-1/3 md:w-2/5 lg:w-1/3 fixed left-0 top-0 h-full bg-gradient-to-br from-purple-900 via-pink-900 to-amber-900 z-0">
          {/* Animated Stars */}
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${2 + Math.random() * 4}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Optional decorative elements on left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        {/* Right Side - Scrollable Content */}
        <div className="w-2/3 md:w-3/5 lg:w-2/3 ml-auto h-screen overflow-y-auto z-10">
          {/* Animated Stars Background for right side */}
          <div className="fixed right-0 top-0 w-2/3 md:w-3/5 lg:w-2/3 h-full pointer-events-none z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-amber-900 opacity-30"></div>
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Main Content Container */}
          <div className="relative z-10">
            {/* Hero Section */}
            <section
              id="home"
              className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden"
            >
              <div className="absolute inset-0">
                <img
                  src={template.thumbnail}
                  alt={template.name}
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <div className="mb-6">
                  <Heart
                    className="text-primary mx-auto animate-pulse"
                    size={48}
                    fill="currentColor"
                  />
                </div>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-4">
                  {isWedding
                    ? "The Wedding of"
                    : isBirthday
                      ? "Birthday Party of"
                      : isAnniversary
                        ? "Anniversary of"
                        : "Special Event of"}
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient mb-6 font-heading">
                  {template.name}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
                  {isWedding
                    ? "Andi & Siti"
                    : isBirthday
                      ? "Budi"
                      : isAnniversary
                        ? "Romeo & Juliet"
                        : "Special Person"}
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Clock size={16} />
                    <span>08:00 WIB</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <MapPin size={16} />
                    <span>Jakarta</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <Heart
                  className="text-primary opacity-50"
                  size={32}
                  fill="currentColor"
                />
              </div>
            </section>

            {/* Couple Section */}
            {isWedding && (
              <section id="couple" className="py-16 md:py-24 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12 md:mb-16">
                    <p className="text-gray-600 mb-2">
                      Mempelai yang berbahagia
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient font-heading">
                      Andi & Siti
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                    <div className="text-center">
                      <div className="mb-6 md:mb-8">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                          alt="Groom"
                          className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full object-cover mx-auto border-4 md:border-8 border-primary shadow-xl"
                        />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 font-heading">
                        Andi Pratama, S.Kom
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Putra dari Bpk. Ahmad & Ibu Fatimah
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="mb-6 md:mb-8">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop"
                          alt="Bride"
                          className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full object-cover mx-auto border-4 md:border-8 border-secondary shadow-xl"
                        />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 font-heading">
                        Siti Aminah, S.E
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Putri dari Bpk. Budi & Ibu Dewi
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {isBirthday && (
              <section id="couple" className="py-16 md:py-24 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="mb-8">
                    <img
                      src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop"
                      alt="Birthday Person"
                      className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-auto border-8 border-accent shadow-xl"
                    />
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient font-heading mb-4">
                    Budi Santoso
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Menginjak usia 25 tahun
                  </p>
                </div>
              </section>
            )}

            {/* Countdown Section */}
            <section
              id="countdown"
              className="py-16 md:py-24 px-4 bg-gradient-primary"
            >
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="mb-4">
                    <Gift
                      className="text-white mx-auto"
                      size={48}
                      fill="currentColor"
                    />
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading">
                    Menuju Hari Bahagia
                  </h2>
                  <p className="text-white/90 text-lg mt-4 max-w-2xl mx-auto">
                    Kami menantikan kehadiran Anda di momen spesial kami
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
                      {countdown.days}
                    </div>
                    <div className="text-white/80 uppercase text-sm md:text-base font-medium tracking-wider">
                      Hari
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
                      {countdown.hours}
                    </div>
                    <div className="text-white/80 uppercase text-sm md:text-base font-medium tracking-wider">
                      Jam
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
                      {countdown.minutes}
                    </div>
                    <div className="text-white/80 uppercase text-sm md:text-base font-medium tracking-wider">
                      Menit
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
                      {countdown.seconds}
                    </div>
                    <div className="text-white/80 uppercase text-sm md:text-base font-medium tracking-wider">
                      Detik
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Event Details Section */}
            <section id="event" className="py-16 md:py-24 px-4 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient font-heading">
                    Detail Acara
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                  <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 shadow-lg">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Calendar className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 font-heading">
                        {isWedding
                          ? "Akad Nikah"
                          : isBirthday
                            ? "Birthday Party"
                            : isAnniversary
                              ? "Anniversary Dinner"
                              : "Main Event"}
                      </h3>
                      <p className="text-primary font-medium">
                        Pukul 08:00 WIB
                      </p>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm">
                        <div className="flex items-start gap-3 mb-3">
                          <Calendar
                            className="text-primary shrink-0"
                            size={24}
                          />
                          <div>
                            <p className="font-semibold text-lg">
                              Sabtu, 28 Desember 2024
                            </p>
                            <p className="text-gray-600">
                              Dimulai pukul 08:00 WIB
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="text-primary shrink-0" size={24} />
                          <div>
                            <p className="font-semibold text-lg">
                              Masjid Agung Al-Ikhlas
                            </p>
                            <p className="text-gray-600 text-sm">
                              Jl. Pangeran Diponegoro No. 1, Jakarta Pusat
                            </p>
                            <a
                              href="https://maps.google.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary text-sm font-medium mt-2 inline-block hover:underline"
                            >
                              Buka di Google Maps
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-linear-to-br from-pink-50 to-amber-50 rounded-2xl p-6 md:p-8 shadow-lg">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Gift className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 font-heading">
                        {isWedding
                          ? "Resepsi"
                          : isBirthday
                            ? "After Party"
                            : isAnniversary
                              ? "Celebration"
                              : "Party"}
                      </h3>
                      <p className="text-primary font-medium">
                        11:00 - 14:00 WIB
                      </p>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm">
                        <div className="flex items-start gap-3 mb-3">
                          <Calendar
                            className="text-primary shrink-0"
                            size={24}
                          />
                          <div>
                            <p className="font-semibold text-lg">
                              Sabtu, 28 Desember 2024
                            </p>
                            <p className="text-gray-600">
                              Pukul 11:00 - 14:00 WIB
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="text-primary shrink-0" size={24} />
                          <div>
                            <p className="font-semibold text-lg">
                              Grand Ballroom Hotel Indonesia
                            </p>
                            <p className="text-gray-600 text-sm">
                              Jl. Sudirman No. 10, Jakarta Selatan
                            </p>
                            <a
                              href="https://maps.google.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary text-sm font-medium mt-2 inline-block hover:underline"
                            >
                              Buka di Google Maps
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Gallery Section */}
            <section
              id="gallery"
              className="py-16 md:py-24 px-4 bg-linear-to-br from-purple-50 to-pink-50"
            >
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient font-heading">
                    Galeri Foto
                  </h2>
                  <p className="text-gray-600 text-lg mt-4">
                    Momen kebersamaan yang tak terlupakan
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <div
                      key={item}
                      className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                    >
                      <img
                        src={`https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop&sig=${item}`}
                        alt={`Gallery ${item}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Story Section */}
            <section id="story" className="py-16 md:py-24 px-4 bg-white">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient font-heading">
                    {isWedding
                      ? "Kisah Cinta Kami"
                      : isBirthday
                        ? "Perjalanan Hidup"
                        : "Kenangan Manis"}
                  </h2>
                </div>

                <div className="space-y-8 md:space-y-12">
                  {[
                    {
                      year: "2020",
                      title: isWedding
                        ? "Pertemuan Pertama"
                        : isBirthday
                          ? "Lahir"
                          : "Pertama Bertemu",
                      description: isWedding
                        ? "Kami bertemu pertama kali di acara kampus. Dari pertemuan yang tidak disengaja, kami mulai saling mengenal."
                        : isBirthday
                          ? "Lahir di hari yang cerah, membawa kebahagiaan bagi keluarga kami."
                          : "Kisah kita dimulai di tempat yang tak terduga.",
                    },
                    {
                      year: "2021",
                      title: isWedding
                        ? "Pacaran"
                        : isBirthday
                          ? "Masa Kecil"
                          : "Mengenal Lebih Dekat",
                      description: isWedding
                        ? "Setelah setahun berteman, kami memutuskan untuk berpacaran. Setiap hari bersama adalah hari yang indah."
                        : isBirthday
                          ? "Masa kecil yang penuh tawa dan kebahagiaan bersama teman dan keluarga."
                          : "Setiap hari bersama membawa kita lebih dekat.",
                    },
                    {
                      year: "2023",
                      title: isWedding
                        ? "Lamaran"
                        : isBirthday
                          ? "Masa Dewasa"
                          : isAnniversary
                            ? "Tunangan"
                            : "Moment Spesial",
                      description: isWedding
                        ? "Di hari yang penuh bahagia, Andi melamar Siti. Momen yang tidak akan pernah kami lupakan seumur hidup."
                        : isBirthday
                          ? "Memasuki masa dewasa dengan berbagai impian dan harapan baru."
                          : "Momen yang akan selalu kita kenang seumur hidup.",
                    },
                    {
                      year: "2024",
                      title: isWedding
                        ? "Menuju Pernikahan"
                        : isBirthday
                          ? "Ulang Tahun Ke-25"
                          : isAnniversary
                            ? "Tahun Pertama"
                            : "Hari Bahagia",
                      description: isWedding
                        ? "Dan sekarang, kami bersiap untuk memulai babak baru dalam hidup kami bersama sebagai suami istri."
                        : isBirthday
                          ? "Merayakan 25 tahun kehidupan dengan rasa syukur dan kebahagiaan."
                          : "Kami bersiap merayakan momen spesial ini bersama orang-orang terkasih.",
                    },
                  ].map((story, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-4 md:gap-8">
                        <div className="shrink-0 w-20 md:w-24">
                          <div className="bg-gradient-primary text-white text-2xl md:text-3xl font-bold rounded-2xl p-4 md:p-6 text-center shadow-lg">
                            {story.year}
                          </div>
                        </div>
                        <div className="flex-1 bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 shadow-md">
                          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-heading">
                            {story.title}
                          </h3>
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            {story.description}
                          </p>
                        </div>
                      </div>
                      {index < 3 && (
                        <div className="absolute left-10 md:left-12 top-full h-8 md:h-12 w-0.5 bg-gray-300"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* RSVP Section */}
            <section
              id="rsvp"
              className="py-16 md:py-24 px-4 bg-linear-to-br from-purple-50 to-pink-50"
            >
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <div className="mb-4">
                    <Gift
                      className="text-primary mx-auto"
                      size={48}
                      fill="currentColor"
                    />
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient font-heading mb-4">
                    Konfirmasi Kehadiran
                  </h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Mohon konfirmasi kehadiran Anda sebelum 20 Desember 2024
                  </p>
                </div>

                <form className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 md:mb-3">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 md:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Masukkan nama lengkap"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 md:mb-3">
                        Nomor WhatsApp *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 md:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Contoh: 081234567890"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 md:mb-3">
                        Jumlah Tamu
                      </label>
                      <select className="w-full px-4 py-3 md:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white">
                        <option>1 Orang</option>
                        <option>2 Orang</option>
                        <option>3 Orang</option>
                        <option>4 Orang</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 md:mb-3">
                        Konfirmasi Kehadiran *
                      </label>
                      <select className="w-full px-4 py-3 md:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white">
                        <option>Hadir</option>
                        <option>Tidak Hadir</option>
                        <option>Ragu-ragu</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2 md:mb-3">
                      Pesan / Ucapan
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 md:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Tulis ucapan selamat..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-primary text-white py-4 md:py-5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-lg md:text-xl"
                  >
                    Kirim Konfirmasi
                  </button>
                </form>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-16 md:py-24 px-4 bg-gradient-primary text-white text-center">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <Heart
                    className="text-white mx-auto mb-4"
                    size={48}
                    fill="currentColor"
                  />
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading">
                    Terima Kasih
                  </h2>
                  <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                    Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa
                    restu kepada kami. Atas doa dan kehadiran Anda, kami ucapkan
                    terima kasih.
                  </p>
                </div>
                <div className="border-t border-white/20 pt-8">
                  <div className="flex flex-wrap items-center justify-center gap-2 text-white/80">
                    <p className="text-lg md:text-xl font-semibold">
                      {isWedding
                        ? "Andi & Siti"
                        : isBirthday
                          ? "Budi Santoso"
                          : isAnniversary
                            ? "Romeo & Juliet"
                            : "Special Couple"}
                    </p>
                    <Heart size={20} fill="currentColor" />
                  </div>
                  <p className="text-white/70 text-sm mt-4">28 Desember 2024</p>
                </div>
              </div>
            </footer>

            {/* Spacer for mobile nav */}
            <div className="h-20 md:hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
