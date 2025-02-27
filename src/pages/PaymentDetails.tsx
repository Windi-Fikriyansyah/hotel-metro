import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const PaymentDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentProof, setPaymentProof] = useState<File | null>(null);

  const { reservation, roomId } = location.state || {};

  const bankDetails = {
    bankName: "Bank Central Asia",
    accountNumber: "1234567890",
    accountHolder: "PT Hotel Metro",
    amount: "Rp. 1.000.000" // This should be dynamically calculated based on the room and duration
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPaymentProof(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would upload the payment proof and process the reservation
    toast({
      title: "Reservation Submitted",
      description: "We will verify your payment and send you a confirmation email shortly.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-playfair text-3xl font-semibold text-center mb-8">
            Payment Details
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Bank Transfer Information</h2>
              <div className="space-y-4 bg-gray-50 p-4 rounded-md">
                <p><span className="font-semibold">Bank Name:</span> {bankDetails.bankName}</p>
                <p><span className="font-semibold">Account Number:</span> {bankDetails.accountNumber}</p>
                <p><span className="font-semibold">Account Holder:</span> {bankDetails.accountHolder}</p>
                <p><span className="font-semibold">Amount to Transfer:</span> {bankDetails.amount}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Payment Proof
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <p className="mt-2 text-sm text-gray-500">
                  Please upload a screenshot or photo of your bank transfer receipt
                </p>
              </div>

              <Button type="submit" className="w-full" disabled={!paymentProof}>
                Submit Reservation
              </Button>
            </form>

            <div className="mt-6 text-sm text-gray-500">
              <p>Note: Your reservation will be confirmed after we verify your payment.</p>
              <p>Please allow up to 24 hours for payment verification.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentDetails;
