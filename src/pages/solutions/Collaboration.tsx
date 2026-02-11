import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Handshake, ArrowRight, Phone } from "lucide-react";

const partners = [
  {
    name: "IQS",
    description: "Quality management and compliance consulting partner delivering integrated solutions for regulated industries.",
  },
  {
    name: "Value Creator",
    description: "Strategic business transformation partner focused on operational excellence and value generation.",
  },
  {
    name: "Shekhar & Manish Consulting",
    description: "Specialized legal and compliance consulting partner for enterprise regulatory requirements.",
  },
  {
    name: "CyberSec Expert Network",
    description: "Cybersecurity talent and expertise network providing specialized security assessment capabilities.",
  },
];

const CollaborationPage = () => (
  <Layout>
    <section className="gradient-hero pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-3xl">
          <span className="text-teal text-sm font-medium uppercase tracking-wider">Solutions</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 mt-2">Collaboration Services</h1>
          <p className="text-lg text-white/90 leading-relaxed">
            We partner with industry leaders to deliver comprehensive, scalable solutions across cybersecurity, compliance, and IT.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeading title="Our Partners" subtitle="Strategic collaborations that amplify our capabilities." />
        <div className="grid sm:grid-cols-2 gap-6">
          {partners.map((p) => (
            <div key={p.name} className="bg-card p-8 rounded-2xl shadow-card border border-border hover:border-teal/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mb-6">
                <Handshake className="w-8 h-8 text-teal" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{p.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.description}</p>
              <Link to="/contact">
                <Button variant="outline" size="sm">Connect With Partner<ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl font-bold mb-4">Interested in Partnering With Us?</h2>
        <p className="text-primary-foreground/80 text-lg mb-8">We're always looking for strategic partners to expand our capabilities.</p>
        <Link to="/contact"><Button variant="hero" size="xl"><Phone className="w-5 h-5" />Get in Touch</Button></Link>
      </div>
    </section>
  </Layout>
);

export default CollaborationPage;
