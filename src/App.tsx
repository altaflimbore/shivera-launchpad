import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import Training from "./pages/Training";
import Testimonials from "./pages/Testimonials";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Cybersecurity from "./pages/solutions/Cybersecurity";
import DataPrivacy from "./pages/solutions/DataPrivacy";
import IsoRisk from "./pages/solutions/IsoRisk";
import AuditCompliance from "./pages/solutions/AuditCompliance";
import Collaboration from "./pages/solutions/Collaboration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions/cybersecurity" element={<Cybersecurity />} />
          <Route path="/solutions/data-privacy" element={<DataPrivacy />} />
          <Route path="/solutions/iso-risk" element={<IsoRisk />} />
          <Route path="/solutions/audit-compliance" element={<AuditCompliance />} />
          <Route path="/solutions/collaboration" element={<Collaboration />} />
          <Route path="/training" element={<Training />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          {/* Legacy redirects */}
          <Route path="/services" element={<Cybersecurity />} />
          <Route path="/capabilities" element={<Collaboration />} />
          <Route path="/clients" element={<Collaboration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
