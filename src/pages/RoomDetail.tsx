import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Spacious room with modern amenities and city view",
    price: 1000000,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["King Size Bed", "Free WiFi", "Air Conditioning", "Mini Bar"],
    longDescription: "Manjakan diri Anda dengan pengalaman kemewahan terbaik di Executive Suite kami. Dilengkapi dengan ruang tamu terpisah dan pemandangan laut yang menakjubkan, suite ini menawarkan perpaduan sempurna antara kenyamanan dan kecanggihan. Nikmati jacuzzi pribadi, tempat tidur king-size yang luas, dan fasilitas eksklusif."
  },
  {
    id: 2,
    name: "Executive Suite",
    description: "Luxurious suite with separate living area and ocean view",
    price: 2000000,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["King Size Bed", "Living Room", "Jacuzzi", "Ocean View"],
    longDescription: "Manjakan diri Anda dengan pengalaman kemewahan terbaik di Executive Suite kami. Dilengkapi dengan ruang tamu terpisah dan pemandangan laut yang menakjubkan, suite ini menawarkan perpaduan sempurna antara kenyamanan dan kecanggihan. Nikmati jacuzzi pribadi, tempat tidur king-size yang luas, dan fasilitas eksklusif."
  },
  {
    id: 3,
    name: "Family Room",
    description: "Perfect for families with connecting rooms",
    price: 3000000,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["2 Queen Beds", "Kids Area", "Family Entertainment", "Dining Area"],
    longDescription: "Kamar Keluarga kami dirancang khusus untuk mengakomodasi keluarga dengan nyaman dan bergaya. Dengan kamar-kamar yang terhubung dan ruang khusus untuk anak-anak, kamar ini merupakan pilihan yang sempurna untuk liburan keluarga. Nikmati tata letak yang luas, pilihan hiburan, dan ruang makan yang nyaman."
  }
];

const formatRupiah = (number) => {
    return number.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  };
const RoomDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const { id } = useParams();
  const room = rooms.find((r) => r.id === Number(id));

  if (!room) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Room Not Found</h1>
            <Button asChild>
              <Link to="/rooms">Back to Rooms</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Fasilitas</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {room.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="font-playfair text-4xl font-semibold">{room.name}</h1>
              <p className="text-gray-600">{room.longDescription}</p>
              <div className="text-2xl font-semibold">{formatRupiah(room.price)}/Malam</div>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link to={`/reservation?roomId=${room.id}`}>Pesan Sekarang</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link to="/rooms">Kembali</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoomDetail;
