
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ReservationForm from "./pages/ReservationForm";
import PaymentDetails from "./pages/PaymentDetails";
import RoomDetail from "./pages/RoomDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route
            path="/rooms/:id"
            element={
              <ProtectedRoute>
                <RoomDetail />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/reservation"
            element={
              <ProtectedRoute>
                <ReservationForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <PaymentDetails />
              </ProtectedRoute>
            }
          />

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={
            <div className="min-h-screen flex items-center justify-center">
              <SignIn />
            </div>
          } />
          <Route path="/sign-up" element={
            <div className="min-h-screen flex items-center justify-center">
              <SignUp />
            </div>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
