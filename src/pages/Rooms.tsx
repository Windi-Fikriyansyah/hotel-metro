import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Kamar yang luas dengan fasilitas modern dan pemandangan kota",
    price: 1000000,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["King Size Bed", "Free WiFi", "Air Conditioning", "Mini Bar"]
  },
  {
    id: 2,
    name: "Executive Suite",
    description: "Suite mewah dengan ruang tamu terpisah dan pemandangan laut",
    price: 2000000,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["King Size Bed", "Living Room", "Jacuzzi", "Ocean View"]
  },
  {
    id: 3,
    name: "Family Room",
    description: "Sempurna untuk keluarga dengan kamar yang saling terhubung",
    price: 3000000,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["2 Queen Beds", "Kids Area", "Family Entertainment", "Dining Area"]
  }
];

const formatRupiah = (number) => {
    return number.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  };
const Rooms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-playfair text-4xl font-semibold text-center mb-12">Kamar Kami</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <ul className="mb-4">
                    {room.amenities.map((amenity, index) => (
                      <li key={index} className="text-gray-600 text-sm mb-1">• {amenity}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">{formatRupiah(room.price)}/Malam</span>
                    <Button asChild>
                      <Link to={`/reservation?roomId=${room.id}`}>Pesan</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rooms;
