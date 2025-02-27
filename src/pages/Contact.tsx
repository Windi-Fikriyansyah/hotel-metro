import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
    useEffect(() => {
                window.scrollTo(0, 0);
              }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl font-semibold mb-4">Kontak Kami</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Kami di sini untuk membantu dan menjawab pertanyaan apa pun yang mungkin Anda miliki
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="font-playfair text-2xl font-semibold mb-6">Kirim Pesan</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Kirim Pesan
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-2xl font-semibold mb-4">Informasi Kontak</h2>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">Alamat:</span>
                    123 Bali, Indonesia
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">No Hp:</span>
                    +62 (555) 123-4567
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">Email:</span>
                    info@hotelmetro.com
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-semibold mb-4">Jam Kerja</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Senin - Jumat: 24 hours</p>
                  <p>Sabtu - Minggu: 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
