import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="src/assets/littlethingshewear-logo-center.png" alt="Littlethingshewear Logo" className="h-10" />
            <p>Merek Perhiasan yang berfokus menyediakan Perhiasan yang Aman untuk Bayi, Anak hingga Remaja dengan produk dimulai dari Anting, Gelang, Liontin dan Kalung. Produk kami terbuat dari 17K Emas Murni Asli dengan Lapisan Khusus Hypoallergenic yang Aman untuk Kulit Sensitif.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Products</a></li>
              <li><a href="#" className="hover:underline">Become a Reseller</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Email: info@littlethingshewear.com</p>
            <p>Phone: +62 123 456 7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Littlethingshewear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;