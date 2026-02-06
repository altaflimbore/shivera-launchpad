import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Shield, Users, Cog, FileCheck, Database, Brain, Phone, CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    icon: Shield,
    title: "Privacy Gap Assessments",
    description: "Comprehensive analysis of your current privacy posture against regulatory requirements.",
  },
  {
    icon: Cog,
    title: "Implementation Services",
    description: "End-to-end implementation of privacy programs and compliance frameworks.",
  },
  {
    icon: FileCheck,
    title: "Data Protection Audits",
    description: "Thorough audits to identify risks and ensure ongoing compliance.",
  },
  {
    icon: Users,
    title: "DPO as a Service",
    description: "Experienced Data Protection Officers available on-demand.",
  },
  {
    icon: Database,
    title: "Privacy Automation",
    description: "Implementation of privacy tools and automation solutions.",
  },
  {
    icon: Brain,
    title: "Training Programs",
    description: "Human-centric privacy awareness and training programs.",
  },
];

const stats = [
  { value: "20+", label: "Legal & Technical Experts" },
  { value: "100+", label: "Assessments Completed" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "15+", label: "Industries Served" },
];

const Capabilities = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Data Privacy Capabilities
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Deep expertise in data privacy with a team of 20+ legal and technical experts delivering enterprise-grade solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-4xl text-teal mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Our Privacy Expertise"
            subtitle="Comprehensive capabilities to address all your data privacy needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="bg-card p-6 rounded-2xl shadow-card border border-border hover:border-teal/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                  <capability.icon className="w-7 h-7 text-teal" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Approach"
                subtitle="A structured methodology that ensures compliance while enabling business growth."
                centered={false}
              />
              <div className="space-y-4">
                {[
                  "Assess current privacy posture and regulatory gaps",
                  "Design tailored compliance roadmap",
                  "Implement privacy controls and processes",
                  "Train teams and build privacy culture",
                  "Monitor, audit, and continuously improve",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
              <h4 className="font-display font-semibold text-xl text-foreground mb-6">
                Why Our Approach Works
              </h4>
              <ul className="space-y-4">
                {[
                  "Human-centric privacy programs that employees embrace",
                  "Technology-enabled automation for efficiency",
                  "Regulatory expertise across DPDPA, GDPR, and more",
                  "Implementation-first methodology with audit-ready outputs",
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Privacy Program?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Let our experts help you design and implement a comprehensive data privacy program.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
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

export default Capabilities;
