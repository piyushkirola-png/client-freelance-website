import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FestiveBackdrop } from "@/components/FestiveBackdrop";
import { ScrollToTop } from "@/components/ScrollToTop";

/**
 * Shared page shell — sticky navbar, festive backdrop, routed content,
 * footer and the always-on floating WhatsApp button.
 */
export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <FestiveBackdrop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
