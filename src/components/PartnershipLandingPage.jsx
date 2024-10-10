import React from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import Accordion from '/src/components/Accordion';
import Carousel from '/src/components/Carousel';
import ResellerForm from '/src/components/ResellerForm';

const PartnershipLandingPage = () => {
  return (
    <div className="font-sans bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img 
          src="/src/assets/Littlethingshewear-Banner_reseller.webp" 
          alt="Partnership Hero" 
          className="w-full h-full object-cover"
        />
      </section>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Program Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Program Reseller Littlethingshewear</h2>
          <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Discover the benefits and requirements of joining the Littlethingshewear Reseller Program:
          </p>
          <div className="space-y-6">
            <Accordion title="Benefit Umum" className="bg-white shadow-md rounded-lg">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mendapatkan Diskon hingga 12 juta rupiah di setiap restock.</li>
                <li>Mendapatkan support penunjang penjualan dari Pusat.</li>
                <li>Dapat mengikuti program produk eksklusif.</li>
                <li>Dapat mengikuti Promo dan Diskon terpusat untuk penjualan.</li>
              </ul>
            </Accordion>
            <Accordion title="Ketentuan Umum" className="bg-white shadow-md rounded-lg">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Terbuka untuk siapapun yang mempunyai pengalaman berjualan baik itu online atau offline.</li>
                <li>Paket Starter minimal mengambil Paket Gold.</li>
                <li>Mengikuti Standar harga terendah yang sudah di tentukan oleh Pusat.</li>
              </ul>
            </Accordion>
            <Accordion title="Cara Gabung jadi Reseller di Littlethingshewear.com" className="bg-white shadow-md rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    img: "/src/assets/cara_gabung/Littlethingshewear-Support-sistem-penjualan-512x512.webp",
                    title: "Langkah 1",
                    desc: "Daftar dengan mengisi Formulir Pendaftaran Reseller dengan melengkapi Data Diri dan Data Lainnya."
                  },
                  {
                    img: "/src/assets/cara_gabung/Littlethingshewear-Afiliasi-Formulir-Pengajuan-256x256.webp",
                    title: "Langkah 2",
                    desc: "Duduk manis dan tunggu Tim LTSW dalam waktu 3 - 7 Hari Kerja. Setelah dicek dan sesuai kriteria, akan langsung dihubungi."
                  },
                  {
                    img: "/src/assets/cara_gabung/Littlethingshewear-Afiliasi-Verifikasi-Pengajuan-256x256.webp",
                    title: "Langkah 3",
                    desc: "Jika lanjut, lakukan Persetujuan Kerjasama, Pembayaran dan Pengiriman Produk ke Lokasi Tujuan Reseller/Distributor."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <img src={step.img} alt={`Step ${index + 1}`} className="w-32 h-32 mb-4 rounded-full shadow-lg" />
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                ))}
              </div>
            </Accordion>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Benefit Menjadi Reseller Kami</h2>
          <Carousel
            items={[
              { image: "/src/assets/carousel_benefit/Littlethingshewear-Produk-yang-dikenal-luas-512x512.webp", title: "Product yang Dikenal Luas", description: "Lebih dari 1 Juta pelanggan mulai dari anak-anak hingga dewasa, telah mencoba dan menyukai produk Littlethingshewear!" },
              { image: "/src/assets/carousel_benefit/Littlethingshewear-Support-konsultasi-marketing-512x512.webp", title: "Support Konsultasi Marketing", description: "Belum pernah berjualan daring sebelumnya? Littlethingshewear siap membantu dengan memberikan panduan dan konsultasi lengkap." },
              { image: "/src/assets/carousel_benefit/Littlethingshewear-Support-sistem-penjualan-512x512.webp", title: "Support sistem penjualan", description: "Setiap Reseller memiliki kesempatan untuk berjualan melalui Website www.littlethingshewear.com yang sudah dikenal luas dengan rata-rata 1000 pengunjung/harinya." },
              { image: "/src/assets/carousel_benefit/Littlethingshewear-Support-visual-pendukung-marketing-512x512.webp", title: "Support Visual pendukung Marketing", description: "Tidak bisa desain? Jangan khawatir! Littlethingshewear siap membantu menyediakan kebutuhan visual yang diperlukan oleh reseller." },
              { image: "/src/assets/carousel_benefit/Littlethingshewear-Diskon-yang-lebih-besar-512x512.webp", title: "Diskon yang Lebih Besar", description: "Dapatkan diskon lebih besar hingga 12 Juta Rupiah disetiap pembelian dan restock!" },
              { image: "/src/assets/carousel_benefit/Littlethingshewear-desain-yang-inovatif-512x512.webp", title: "Desain yang Inovatif", description: "Littlethingshewear hadir dengan desain Inovatif Loop-End dan Loop-Hoop yang menjadi Pionir & Trendsetter dalam menghadirkan perhiasan yang aman & nyaman." },
              { image: "/src/assets/carousel_benefit/Littlethingshewear-potensi-pasar-dan-target-market-512x512.webp", title: "Potensi Pasar dan Target Market", description: "Angka kelahiran Bayi terus bertambah setiap tahunnya merupakah target market dan peluang pasar bagi Littlethingshewear." },
              { image: "/src/assets/carousel_benefit/Littlethingshewear-dapatkan-laptop-gratis-512x512.webp", title: "Dapatkan Laptop Gratis", description: "Untuk reseller baru akan mendapatkan Laptop Gratis dengan melakukan pembelian 2 Paket B pada saat mendaftar (*Pembelian Pertama)" },
            ]}
          />
        </section>

        {/* Reseller Form Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Daftar Sebagai Reseller</h2>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <ResellerForm />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PartnershipLandingPage;