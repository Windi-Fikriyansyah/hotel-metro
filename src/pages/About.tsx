import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl font-semibold mb-4">Tentang Hotel Metro</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Rasakan kemewahan dan kenyamanan di jantung Kota Bali
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hotel Exterior"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl font-semibold">Cerita Kami</h2>
              <p className="text-gray-600">
              Didirikan pada tahun 2010, Hotel Metro telah menyediakan layanan perhotelan yang luar biasa bagi tamu dari seluruh dunia. Komitmen kami terhadap keunggulan dan perhatian terhadap detail telah menjadikan kami salah satu hotel mewah yang paling disukai di Kota Bali.
              </p>
              <p className="text-gray-600">
              Kami bangga dengan staf kami yang profesional, fasilitas kelas dunia, dan suasana tenang yang membuat setiap masa menginap menjadi berkesan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <h3 className="font-playfair text-xl font-semibold mb-4">Akomodasi Mewah</h3>
              <p className="text-gray-600">
              Kamar dan suite yang dirancang elegan dengan fasilitas modern untuk kenyamanan Anda.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-playfair text-xl font-semibold mb-4">Makan Malam Mewah</h3>
              <p className="text-gray-600">
              Nikmati keunggulan kuliner dengan restoran dan bar kelas dunia kami.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-playfair text-xl font-semibold mb-4">Layanan Premium</h3>
              <p className="text-gray-600">
              Dari perawatan spa hingga layanan pramutamu, kami memastikan masa menginap yang berkesan.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
