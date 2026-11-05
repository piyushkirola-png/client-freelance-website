import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './lib/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import ChatBot from './components/ui/ChatBot'; // ✅ Import is correct
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import PaymentGateway from './pages/PaymentGateway';
import MerchantSolutions from './pages/MerchantSolutions';
import Routing from './pages/Routing';
import Payouts from './pages/Payouts';
import Settlement from './pages/Settlement';
import RiskEngine from './pages/RiskEngine';
import ApiDocs from './pages/ApiDocs';
import Pricing from './pages/Pricing';
import Industries from './pages/Industries';
import WhyChooseUs from './pages/WhyChooseUs';
import CaseStudies from './pages/CaseStudies';
import Partners from './pages/Partners';
import Security from './pages/Security';
import Developers from './pages/Developers';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/payment-gateway" element={<PaymentGateway />} />
              <Route path="/merchant-solutions" element={<MerchantSolutions />} />
              <Route path="/routing" element={<Routing />} />
              <Route path="/payouts" element={<Payouts />} />
              <Route path="/settlement" element={<Settlement />} />
              <Route path="/risk-engine" element={<RiskEngine />} />
              <Route path="/api-docs" element={<ApiDocs />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/security" element={<Security />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <ChatBot /> {/* ✅ ADD THIS LINE - RIGHT HERE */}
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;