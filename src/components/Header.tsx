import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

interface DropdownItem {
  name: string;
  path: string;
}

interface NavItem {
  name: string;
  path: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    name: "Home",
    path: "/",
    dropdown: [
      { name: "Overview", path: "/" },
      { name: "Services Snapshot", path: "/#services" },
      { name: "Training Highlights", path: "/#training" },
      { name: "Testimonials Preview", path: "/#testimonials" },
      { name: "Contact CTA", path: "/#contact" },
    ],
  },
  {
    name: "About Us",
    path: "/about",
    dropdown: [
      { name: "Company Story", path: "/about#story" },
      { name: "Vision & Mission", path: "/about#vision" },
      { name: "Leadership", path: "/about#leadership" },
      { name: "Certifications", path: "/about#certifications" },
      { name: "Read More", path: "/about" },
    ],
  },
  {
    name: "Solutions",
    path: "/solutions/cybersecurity",
    dropdown: [
      { name: "Cybersecurity Services", path: "/solutions/cybersecurity" },
      { name: "Data Privacy & Governance", path: "/solutions/data-privacy" },
      { name: "ISO & Risk Consulting", path: "/solutions/iso-risk" },
      { name: "Audit & Compliance Readiness", path: "/solutions/audit-compliance" },
      { name: "Collaboration Services", path: "/solutions/collaboration" },
    ],
  },
  {
    name: "Training & Certifications",
    path: "/training",
    dropdown: [
      { name: "Cybersecurity Training", path: "/training#cybersecurity" },
      { name: "Data Privacy Training", path: "/training#privacy" },
      { name: "Certified DPO Training", path: "/training#dpo" },
      { name: "POSH Training", path: "/training#posh" },
      { name: "ISO 27001 Training", path: "/training#iso" },
      { name: "Data Engineering Training", path: "/training#data-engineering" },
    ],
  },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Careers", path: "/careers" },
  { name: "Why Us", path: "/why-us" },
  { name: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
  }, [location]);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className={`font-display font-bold text-xl md:text-2xl tracking-tight ${
            isScrolled ? "text-primary" : "text-white"
          }`}>
            SHIVERA<span className="text-teal">INFOTECH</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  location.pathname === item.path || location.pathname.startsWith(item.path.split('#')[0] + '/')
                    ? isScrolled
                      ? "text-teal bg-teal/10"
                      : "text-white bg-white/20"
                    : isScrolled
                    ? "text-foreground hover:text-teal hover:bg-teal/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
                {item.dropdown && <ChevronDown className="w-3 h-3" />}
              </Link>

              {/* Dropdown */}
              {item.dropdown && openDropdown === item.name && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-xl shadow-xl border border-border py-2 animate-fade-in z-50">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className="block px-4 py-2.5 text-sm text-foreground hover:text-teal hover:bg-teal/5 transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden xl:flex items-center">
          <Link to="/contact">
            <Button variant={isScrolled ? "cta" : "hero"} size="default">
              <Phone className="w-4 h-4" />
              Schedule a Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`xl:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-card shadow-xl border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="container-custom py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.name ? null : item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:text-teal hover:bg-teal/5 transition-colors"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenDropdown === item.name ? "rotate-180" : ""}`} />
                    </button>
                    {mobileOpenDropdown === item.name && (
                      <div className="pl-4 pb-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-teal transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-teal bg-teal/10"
                        : "text-foreground hover:text-teal hover:bg-teal/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="mt-2">
              <Button variant="cta" size="lg" className="w-full">
                <Phone className="w-4 h-4" />
                Schedule a Consultation
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
