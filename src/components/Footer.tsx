import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Solutions", path: "/solutions/cybersecurity" },
    { name: "Training", path: "/training" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Why Us", path: "/why-us" },
    { name: "Contact", path: "/contact" },
  ];

  const solutions = [
    { name: "Cybersecurity Services", path: "/solutions/cybersecurity" },
    { name: "Data Privacy & Governance", path: "/solutions/data-privacy" },
    { name: "ISO & Risk Consulting", path: "/solutions/iso-risk" },
    { name: "Audit & Compliance", path: "/solutions/audit-compliance" },
    { name: "Collaboration Services", path: "/solutions/collaboration" },
    { name: "Training Programs", path: "/training" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="font-display font-bold text-2xl">
              SHIVERA<span className="text-teal">INFOTECH</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Trusted IT, Data Privacy & Compliance Consulting Partner. Empowering enterprises with secure, compliant, and sustainable growth solutions.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/80 hover:text-teal transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Solutions</h4>
            <ul className="space-y-2">
              {solutions.map((s, i) => (
                <li key={i}>
                  <Link to={s.path} className="text-primary-foreground/80 hover:text-teal transition-colors text-sm">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a href="tel:+918208986057" className="hover:text-teal transition-colors block">+91 8208986057</a>
                  <a href="tel:+918087250238" className="hover:text-teal transition-colors block">+91 8087250238</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <a href="mailto:aruna.deshmukh@shiverainfotech.com" className="text-sm hover:text-teal transition-colors break-all">
                  aruna.deshmukh@shiverainfotech.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} SHIVERA INFOTECH LLP. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <Link to="/privacy" className="hover:text-teal transition-colors">Privacy Policy</Link>
              <Link to="/careers" className="hover:text-teal transition-colors">Careers</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
