
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Kamar yang luas dengan fasilitas modern dan pemandangan kota",
    price: 1000000,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Executive Suite",
    description: "Suite mewah dengan ruang tamu terpisah dan pemandangan laut",
    price: 2000000,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Family Room",
    description: "Sempurna untuk keluarga dengan kamar yang saling terhubung",
    price: 3000000,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const formatRupiah = (number) => {
    return number.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  };
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 lg:pt-24">
        <div className="relative h-[70vh] bg-[url('https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-playfair text-4xl md:text-6xl font-semibold mb-6 animate-slideUp">
                Welcome to Hotel Metro
              </h1>
              <p className="text-lg md:text-xl mb-8 animate-slideUp" style={{ animationDelay: "0.2s" }}>
              Rasakan kemewahan dan kenyamanan di kamar dan suite kami yang dirancang dengan cermat
              </p>
              <Button
                size="lg"
                className="animate-slideUp"
                style={{ animationDelay: "0.4s" }}
                asChild
              >
                <Link to="/rooms">Lihat Kamar Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-semibold mb-4">Kamar Unggulan</h2>
            <p className="text-gray-600">Temukan akomodasi kami yang paling populer</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Room Cards */}
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{formatRupiah(room.price)}/Malam</span>
                    <Button variant="ghost" asChild>
                      <Link to={`/rooms/${room.id}`}>Lihat Detail</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
