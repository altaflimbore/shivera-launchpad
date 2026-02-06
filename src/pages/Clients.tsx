import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Factory, Building2, Laptop, GraduationCap, Handshake, Phone } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Pharmaceutical & Life Sciences",
    description: "Specialized compliance solutions for highly regulated pharma and life sciences organizations.",
  },
  {
    icon: Building2,
    name: "Corporate Enterprises",
    description: "Enterprise-grade IT and compliance services for large organizations.",
  },
  {
    icon: Laptop,
    name: "IT & Technology",
    description: "Data privacy and security solutions for technology companies.",
  },
  {
    icon: GraduationCap,
    name: "Educational Institutions",
    description: "Compliance and data protection services for academic institutions.",
  },
];

const Clients = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Clients & Partners
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              We work with enterprises, institutions, and strategic partners to deliver secure, compliant, and scalable IT and privacy solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Deep expertise across regulated and technology-driven industries."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-card p-6 rounded-2xl shadow-card border border-border hover:border-teal/30 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-teal" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            title="Trusted by Leading Organizations"
            subtitle="A growing list of enterprises and institutions that trust us with their compliance needs."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="h-24 bg-card rounded-xl flex items-center justify-center border border-border shadow-sm"
              >
                <span className="text-muted-foreground text-sm">Client Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Strategic Partnerships"
                subtitle="We collaborate with technology providers, compliance platforms, and industry partners to deliver scalable and future-ready solutions."
                centered={false}
              />
              <div className="bg-teal/10 p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-2">
                      Partnership Approach
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Our partnerships are built on mutual trust and shared goals of delivering excellence. We work closely with our partners to combine expertise and deliver comprehensive solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-32 bg-card rounded-xl flex items-center justify-center border border-border shadow-sm"
                >
                  <span className="text-muted-foreground text-sm">Partner Logo</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Join Our Growing Client Network
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Partner with us to transform your IT and compliance capabilities.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                <Phone className="w-5 h-5" />
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
