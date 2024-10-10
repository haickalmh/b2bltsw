import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <img src="src/assets/littlethingshewear-logo-center.png" alt="Littlethingshewear Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Beranda</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Artikel</a></li>
{            /* <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Products</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;