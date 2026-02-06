import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import TrustBadge from "@/components/TrustBadge";
import ContactForm from "@/components/ContactForm";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Shield,
  Lock,
  Award,
  Server,
  Briefcase,
  Scale,
  Leaf,
  Phone,
  Users,
  Target,
  CheckCircle2,
  ArrowRight,
  Building2,
  GraduationCap,
  Factory,
  Laptop,
} from "lucide-react";

const trustBadges = [
  "Audit Ready",
  "Regulator Aligned",
  "Enterprise Trusted",
  "20+ Years Expertise",
];

const services = [
  {
    icon: Shield,
    title: "Data Privacy & DPDPA/GDPR Compliance",
    description: "Comprehensive privacy program implementation, gap assessments, and DPO services for regulatory compliance.",
    link: "/services#privacy",
  },
  {
    icon: Lock,
    title: "Cybersecurity & ISMS Implementation",
    description: "ISMS framework implementation, ISO 27001/27701 certification support, and security risk assessments.",
    link: "/services#cybersecurity",
  },
  {
    icon: Award,
    title: "ISO Certifications & Audit Support",
    description: "End-to-end support for ISO 9001, 14001, 27001, and 27701 certifications with audit preparation.",
    link: "/services#iso",
  },
  {
    icon: Server,
    title: "IT CSV & GxP Compliance",
    description: "Computerized System Validation, infrastructure qualification, and GxP migration services.",
    link: "/services#csv",
  },
  {
    icon: Briefcase,
    title: "ERPNext Implementation & Support",
    description: "ERPNext configuration, business process optimization, integration, and ongoing support.",
    link: "/services#erp",
  },
  {
    icon: Scale,
    title: "POSH Compliance & Legal Training",
    description: "POSH awareness sessions, IC training, policy drafting, and external IC member support.",
    link: "/services#posh",
  },
  {
    icon: Leaf,
    title: "Environmental & Energy Audits",
    description: "Green audits, environmental assessments, and energy efficiency improvement programs.",
    link: "/services#audits",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "20+ Years Expertise",
    description: "Experienced leadership across IT, pharma, and compliance industries.",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description: "IAPP certified privacy professionals and ISO lead implementers.",
  },
  {
    icon: Target,
    title: "Implementation-First",
    description: "Audit-ready delivery with practical, actionable solutions.",
  },
  {
    icon: CheckCircle2,
    title: "Regulator-Aligned",
    description: "Solutions designed to meet evolving regulatory requirements.",
  },
];

const industries = [
  { icon: Factory, name: "Pharmaceutical & Life Sciences" },
  { icon: Building2, name: "Corporate Enterprises" },
  { icon: Laptop, name: "IT & Technology" },
  { icon: GraduationCap, name: "Educational Institutions" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-teal/70" />
        <div className="container-custom relative z-10 py-20 pt-32">
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up">
              Empowering Organizations with Trusted IT, Data Privacy, and Compliance Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
              We help enterprises and institutions achieve secure, compliant, and sustainable growth through expert-led IT, data privacy, cybersecurity, and regulatory compliance services.
            </p>
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  <Phone className="w-5 h-5" />
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="heroOutline" size="xl">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {trustBadges.map((badge) => (
                <TrustBadge key={badge} text={badge} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Who We Are"
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                SHIVERA INFOTECH LLP is a technology and compliance consulting firm established by seasoned industry professionals. We deliver reliable, outcome-driven IT and compliance solutions designed to address evolving regulatory, cybersecurity, and operational requirements across industries.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our approach emphasizes practical implementation and measurable outcomes — not just advisory.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl text-foreground">2022</div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl text-foreground">20+</div>
                    <div className="text-sm text-muted-foreground">Years Expertise</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="bg-card p-6 rounded-2xl shadow-card border border-border hover:border-teal/30 transition-colors"
                >
                  <industry.icon className="w-8 h-8 text-teal mb-3" />
                  <h4 className="font-medium text-foreground text-sm">{industry.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            title="Our Core Services"
            subtitle="Comprehensive IT, data privacy, and compliance solutions tailored for regulated industries."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Trusted by Organizations Across Industries"
            subtitle="We work with enterprises, institutions, and strategic partners to deliver secure, compliant, and scalable IT and privacy solutions."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-24 bg-muted rounded-xl flex items-center justify-center border border-border"
              >
                <span className="text-muted-foreground text-sm">Client Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose SHIVERA INFOTECH"
            subtitle="What sets us apart in the IT and compliance consulting space."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-teal/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-teal-light" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-teal-pale">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to strengthen your IT and compliance foundation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a consultation with our experts today.
            </p>
            <Link to="/contact">
              <Button variant="cta" size="xl">
                <Phone className="w-5 h-5" />
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="Have questions or ready to start your compliance journey? We're here to help."
                centered={false}
              />
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Call us</div>
                    <a href="tel:+918208986057" className="font-medium text-foreground hover:text-teal transition-colors">
                      +91 8208986057
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
