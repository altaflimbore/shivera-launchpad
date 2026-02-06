import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Users, Award, Target, CheckCircle2, Shield, Handshake, Phone } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "Deep Domain Expertise",
    description: "Experienced leadership with 20+ years across IT, pharma, and compliance industries.",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description: "IAPP certified privacy professionals and ISO lead implementers with real-world experience.",
  },
  {
    icon: Target,
    title: "Implementation-First Delivery",
    description: "Audit-ready delivery model with practical, actionable solutions — not just advisory.",
  },
  {
    icon: Shield,
    title: "Governance & Risk Focus",
    description: "Comprehensive approach that addresses governance, risk, and compliance holistically.",
  },
  {
    icon: Handshake,
    title: "Long-term Partnership Mindset",
    description: "We build relationships, not transactions. Your success is our success.",
  },
  {
    icon: CheckCircle2,
    title: "Regulator-Aligned Solutions",
    description: "Solutions designed to meet evolving regulatory requirements across jurisdictions.",
  },
];

const WhyUs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose SHIVERA INFOTECH
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              What sets us apart in the IT and compliance consulting landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="What Sets Us Apart"
            subtitle="Our unique approach to IT and compliance consulting delivers measurable outcomes."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-card p-6 rounded-2xl shadow-card border border-border hover:border-teal/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-teal" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Commitment"
                subtitle="We're committed to delivering excellence at every step of your compliance journey."
                centered={false}
              />
              <div className="space-y-4">
                {[
                  "Transparent communication and regular progress updates",
                  "Dedicated team assigned to your project",
                  "Flexible engagement models to suit your needs",
                  "Knowledge transfer to build internal capabilities",
                  "Post-implementation support and continuous improvement",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary p-8 rounded-2xl text-primary-foreground">
              <h3 className="font-display font-bold text-2xl mb-6">
                The SHIVERA Difference
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="font-semibold mb-1">Practical over Theoretical</div>
                  <p className="text-primary-foreground/80 text-sm">
                    We focus on implementation and real-world outcomes, not just documentation.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-1">Partnership over Transaction</div>
                  <p className="text-primary-foreground/80 text-sm">
                    We invest in long-term relationships and your ongoing success.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-1">Excellence over Shortcuts</div>
                  <p className="text-primary-foreground/80 text-sm">
                    We deliver audit-ready solutions that stand up to regulatory scrutiny.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-teal-pale">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how we can help you achieve your IT and compliance goals.
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
    </Layout>
  );
};

export default WhyUs;
