import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-card rounded-2xl shadow-xl border border-border p-8 max-w-lg mx-4 text-center">
        <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6">
          <Shield className="w-8 h-8 text-teal" />
        </div>
        <h3 className="font-display font-bold text-xl text-foreground mb-3">
          Privacy & Cookie Compliance
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          This website uses cookies and follows privacy compliance standards. Please accept to continue browsing.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="cta" onClick={accept}>Accept All</Button>
          <Button variant="outline" onClick={reject}>Reject Non-Essential</Button>
          <Link to="/privacy">
            <Button variant="ghost" className="w-full">View Privacy Policy</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
