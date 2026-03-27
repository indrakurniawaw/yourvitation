import { Template, Feature, PricingTier, FAQ, Testimonial } from "@/types";

export const TEMPLATES: Template[] = [
    {
        id: "t1",
        name: "Elegant Wedding",
        category: "wedding",
        style: "elegant",
        thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
        preview: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
        price: 149000,
        features: ["Elegant design", "Custom colors", "Photo gallery", "Music player"],
        popular: true,
    },
    {
        id: "t2",
        name: "Floral Romance",
        category: "wedding",
        style: "floral",
        thumbnail: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=300&fit=crop",
        preview: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop",
        price: 149000,
        features: ["Floral patterns", "Animated elements", "Custom fonts", "RSVP form"],
    },
    {
        id: "t3",
        name: "Minimalist Birthday",
        category: "birthday",
        style: "minimalist",
        thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
        preview: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
        price: 99000,
        features: ["Clean design", "Simple layout", "Photo carousel", "Share buttons"],
    },
    {
        id: "t4",
        name: "Corporate Event",
        category: "corporate",
        style: "modern",
        thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
        preview: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
        price: 199000,
        features: ["Professional design", "Schedule display", "Speaker profiles", "Registration form"],
    },
    {
        id: "t5",
        name: "Classic Anniversary",
        category: "anniversary",
        style: "classic",
        thumbnail: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=400&h=300&fit=crop",
        preview: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=800&h=600&fit=crop",
        price: 149000,
        features: ["Timeless design", "Memory timeline", "Photo slideshow", "Wishes section"],
    },
    {
        id: "t6",
        name: "Modern Celebration",
        category: "other",
        style: "modern",
        thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
        preview: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
        price: 129000,
        features: ["Bold colors", "Dynamic animations", "Video support", "Social sharing"],
    },
];

export const FEATURES: Feature[] = [
    // Design & Customization
    {
        id: "f1",
        icon: "Palette",
        title: "Kustomisasi Penuh",
        description: "Sesuaikan warna, font, dan layout sesuai tema acara Anda",
        category: "design",
        benefit: "Buat undangan yang benar-benar unik dan personal",
    },
    {
        id: "f2",
        icon: "Layout",
        title: "Template Premium",
        description: "Pilih dari berbagai template desain profesional dan elegan",
        category: "design",
        benefit: "Hemat waktu dengan desain yang sudah siap pakai",
    },
    {
        id: "f3",
        icon: "Image",
        title: "Galeri Foto",
        description: "Upload hingga 50 foto dengan slideshow yang menarik",
        category: "design",
        benefit: "Bagikan momen spesial dengan para tamu",
    },

    // Guest Management
    {
        id: "f4",
        icon: "Users",
        title: "Manajemen Tamu",
        description: "Kelola daftar tamu dan status kehadiran dengan mudah",
        category: "guest",
        benefit: "Pantau konfirmasi kehadiran secara real-time",
    },
    {
        id: "f5",
        icon: "ClipboardCheck",
        title: "Form RSVP Online",
        description: "Tamu bisa konfirmasi kehadiran langsung dari undangan",
        category: "guest",
        benefit: "Hindari konfirmasi manual satu per satu",
    },
    {
        id: "f6",
        icon: "BadgeCheck",
        title: "Validasi Tamu",
        description: "Sistem validasi tamu yang aman dan terorganisir",
        category: "guest",
        benefit: "Pastikan hanya tamu yang diundang yang hadir",
    },

    // Interactive Features
    {
        id: "f7",
        icon: "Music",
        title: "Background Music",
        description: "Tambahkan musik latar untuk suasana yang lebih romantis",
        category: "interactive",
        benefit: "Ciptakan pengalaman yang lebih emosional",
    },
    {
        id: "f8",
        icon: "Clock",
        title: "Countdown Timer",
        description: "Hitung mundur menuju hari acara spesial Anda",
        category: "interactive",
        benefit: "Bangun antisipasi dan kegembiraan",
    },
    {
        id: "f9",
        icon: "MapPin",
        title: "Google Maps",
        description: "Integrasi peta lokasi acara dengan navigasi yang mudah",
        category: "interactive",
        benefit: "Bantu tamu menemukan lokasi tanpa bingung",
    },

    // Integration & Share
    {
        id: "f10",
        icon: "Share2",
        title: "Social Share",
        description: "Share undangan ke WhatsApp, Facebook, dan Twitter",
        category: "integration",
        benefit: "Sebar undangan ke ratusan kontak dalam hitungan detik",
    },
    {
        id: "f11",
        icon: "Smartphone",
        title: "Mobile Friendly",
        description: "Tampilan optimal di semua perangkat: mobile, tablet, desktop",
        category: "integration",
        benefit: "Tamu bisa akses undangan dari mana saja",
    },
    {
        id: "f12",
        icon: "BarChart",
        title: "Analytics",
        description: "Lihat statistik siapa yang sudah membuka dan konfirmasi",
        category: "integration",
        benefit: "Pantau performa undangan Anda secara detail",
    },
];

export const PRICING: PricingTier[] = [
    {
        id: "p1",
        name: "basic",
        price: 149000,
        duration: "1 bulan",
        features: [
            "1 Template pilihan",
            "Hingga 100 tamu",
            "Validasi tamu",
            "Form RSVP",
            "Share link",
            "Support via WhatsApp",
        ],
        ctaText: "Pilih Basic",
    },
    {
        id: "p2",
        name: "premium",
        price: 299000,
        duration: "3 bulan",
        popular: true,
        features: [
            "Semua fitur Basic",
            "Hingga 500 tamu",
            "Kustomisasi penuh",
            "Background music",
            "Galeri foto (50 gambar)",
            "Video intro",
            "Countdown timer",
            "Support prioritas",
        ],
        ctaText: "Pilih Premium",
    },
    {
        id: "p3",
        name: "custom",
        price: 499000,
        duration: "6 bulan",
        features: [
            "Semua fitur Premium",
            "Desain eksklusif",
            "Unlimited tamu",
            "Fitur khusus request",
            "Dedicated support",
            "Revisi tanpa batas",
            "Prioritas deployment",
        ],
        ctaText: "Hubungi Kami",
    },
];

export const FAQs: FAQ[] = [
    {
        question: "Berapa lama waktu pembuatan undangan?",
        answer: "Untuk paket Basic dan Premium, undangan siap dalam 1-2 hari kerja setelah data lengkap diterima. Untuk paket Custom, waktu pengerjaan tergantung kompleksitas permintaan, biasanya 3-5 hari kerja.",
    },
    {
        question: "Apakah saya bisa mengedit undangan setelah jadi?",
        answer: "Ya, untuk paket Premium dan Custom Anda bisa melakukan revisi konten (teks, foto, musik) sampai dengan 3 kali revisi. Untuk paket Basic, revisi terbatas pada koreksi tipografi.",
    },
    {
        question: "Bagaimana cara membagikan undangan ke tamu?",
        answer: "Anda akan mendapatkan link undangan unik yang bisa dibagikan melalui WhatsApp, email, atau media sosial. Kami juga menyediakan tombol share langsung dari undangan.",
    },
    {
        question: "Apakah undangan ini ramah lingkungan?",
        answer: "Tentu saja! Undangan digital kami membantu mengurangi penggunaan kertas dan bahan cetak, sehingga lebih ramah lingkungan dibandingkan undangan konvensional.",
    },
    {
        question: "Bagaimana jika tamu tidak bisa mengakses internet?",
        answer: "Sayangnya, undangan digital membutuhkan koneksi internet. Namun, kami mendesain undangan agar bisa diakses dengan koneksi yang lambat sekalipun.",
    },
    {
        question: "Apakah ada biaya tambahan?",
        answer: "Tidak ada biaya tambahan tersembunyi. Harga yang tertera sudah all-in termasuk hosting, fitur-fitur yang disebutkan, dan support selama masa aktif.",
    },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        name: "Sarah & Rizky",
        role: "Wedding Client",
        content: "Undangannya sangat cantik dan elegan! Tamu-tamu kami semua terkesan. Prosesnya cepat dan admin sangat membantu.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
        name: "Budi Santoso",
        role: "Birthday Party",
        content: "Menggunakan Yourvitation untuk ulang tahun anak saya adalah keputusan terbaik. Simple, praktis, dan hasilnya memuaskan!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
        name: "PT. Maju Sejahtera",
        role: "Corporate Event",
        content: "Profesional dan efisien. Undangan digital untuk acara perusahaan kami berjalan lancar dengan Yourvitation.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
];

export const ADMIN_WHATSAPP = "6281234567890";

export function getWhatsAppLink(message: string): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${ADMIN_WHATSAPP}?text=${encodedMessage}`;
}