import React, { useState } from 'react';

const ResellerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    experience: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Replace this URL with your Google Form submission URL
    const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';

    // Create form data
    const formDataToSend = new FormData();
    // Map your form fields to Google Form fields. Replace 'entry.XXXXXX' with your actual field IDs
    formDataToSend.append('entry.XXXXXX', formData.fullName);
    formDataToSend.append('entry.XXXXXX', formData.email);
    formDataToSend.append('entry.XXXXXX', formData.phone);
    formDataToSend.append('entry.XXXXXX', formData.address);
    formDataToSend.append('entry.XXXXXX', formData.city);
    formDataToSend.append('entry.XXXXXX', formData.province);
    formDataToSend.append('entry.XXXXXX', formData.postalCode);
    formDataToSend.append('entry.XXXXXX', formData.experience);

    try {
      const response = await fetch(googleFormUrl, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });

      setSubmitMessage('Formulir berhasil dikirim! Terima kasih atas minat Anda.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
        experience: ''
      });
    } catch (error) {
      setSubmitMessage('Terjadi kesalahan saat mengirim formulir. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reseller-form-container">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Alamat</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Kota</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="province" className="block text-sm font-medium text-gray-700">Provinsi</label>
            <input
              type="text"
              id="province"
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Kode Pos</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Pengalaman Berjualan</label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:opacity-50"
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Pendaftaran'}
          </button>
        </div>
      </form>
      {submitMessage && (
        <div className={`mt-4 p-4 rounded-md ${submitMessage.includes('berhasil') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {submitMessage}
        </div>
      )}
    </div>
  );
};

export default ResellerForm;