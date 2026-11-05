import { Route, Routes } from "react-router-dom";

import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Book from "@/pages/Book";
import About from "@/pages/About";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Refund from "@/pages/Refund";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

/**
 * Application routes.
 * Every page renders inside the shared <Layout /> (navbar + footer + WhatsApp float).
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
