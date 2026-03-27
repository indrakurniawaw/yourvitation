# Yourvitation - Undangan Digital Platform

Platform undangan digital modern untuk momen spesial Anda. Dibangun dengan Next.js 15, TypeScript, dan Tailwind CSS.

## 🚀 Fitur

- **Landing Page Modern**: Hero section, features, templates showcase, testimonials, pricing, dan FAQ
- **Template Gallery**: Filter berdasarkan kategori dan style dengan fitur pencarian
- **Fitur Lengkap**: Menampilkan semua fitur yang tersedia dengan kategorisasi yang jelas
- **Pricing Page**: Kartu harga dengan tabel perbandingan dan FAQ
- **Demo Undangan**: Contoh undangan pernikahan interaktif dengan countdown timer, galeri foto, dan form RSVP
- **WhatsApp Integration**: Semua CTA mengarah ke WhatsApp untuk konsultasi
- **Responsive Design**: Tampilan optimal di semua perangkat (mobile, tablet, desktop)

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Poppins, Playfair Display)

## 🛠️ Installation

1. Clone repository ini
2. Install dependencies:

```bash
npm install
```

3. Jalankan development server:

```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## 📁 Project Structure

```
yourvitation/
├── app/
│   ├── demo-invitation/     # Demo client invitation template
│   ├── features/             # Features page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   ├── page.tsx             # Homepage
│   ├── pricing/              # Pricing page
│   └── themes/              # Templates gallery page
├── components/
│   └── ui/
│       ├── Footer.tsx         # Footer component
│       └── Navigation.tsx    # Navigation component
├── lib/
│   └── constants.ts         # Application constants
├── types/
│   └── index.ts            # TypeScript types
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Customization

### Ubah Warna Brand

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#8B5CF6',    // Warna utama (ungu)
      secondary: '#EC4899',   // Warna sekunder (pink)
      accent: '#F59E0B',      // Warna aksen (amber)
      // ... colors lainnya
    }
  }
}
```

### Ubah Nomor WhatsApp

Edit `lib/constants.ts`:

```typescript
export const ADMIN_WHATSAPP = "6281234567890"; // Ganti dengan nomor Anda
```

### Tambah Client Baru

Untuk membuat undangan untuk client baru:

1. Buat folder baru di `app/[nama-client]`
2. Copy content dari `app/demo-invitation/page.tsx`
3. Customisasi nama, tanggal, lokasi, dan foto
4. Undangan akan accessible di `http://localhost:3000/nama-client`

## 📄 Halaman Utama

- **/**: Homepage dengan semua section penting
- **/themes**: Gallery template dengan filter
- **/features**: Detail fitur yang tersedia
- **/pricing**: Paket harga dan perbandingan
- **/demo-invitation**: Contoh undangan demo

## 💼 Proses Bisnis

1. Client mengunjungi website dan memilih template/paket
2. Client klik tombol "Hubungi Kami" atau "Pesan Sekarang"
3. Redirect ke WhatsApp dengan pesan otomatis
4. Client berdiskusi dengan admin via WhatsApp
5. Client melakukan pembayaran via WhatsApp
6. Admin membuat folder baru di `app/[nama-client]`
7. Admin mengirim link undangan ke client
8. Client bisa share undangan ke tamu

## 🔧 Build untuk Production

```bash
npm run build
npm start
```

## 📝 Catatan Penting

- Untuk production, pastikan untuk mengonfigurasi environment variables jika diperlukan
- Gambar menggunakan Unsplash sebagai placeholder, ganti dengan gambar asli untuk production
- Form RSVP saat ini hanya demo, untuk production perlu integrasi dengan backend atau third-party service
- Background music di demo undangan belum implementasi audio sebenarnya, hanya UI toggle

## 🤝 Contributing

Ini adalah project untuk keperluan komersial, tapi jika Anda ingin membuat perubahan:

1. Fork project
2. Create branch untuk fitur baru
3. Commit changes
4. Push ke branch
5. Open Pull Request

## 📄 License

Proprietary - All rights reserved

## 👨‍💻 Support

Untuk pertanyaan atau dukungan, hubungi via WhatsApp yang tertera di website.

---

Dibuat dengan ❤️ menggunakan Next.js dan Tailwind CSS
