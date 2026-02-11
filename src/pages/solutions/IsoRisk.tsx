import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle2, Phone, ArrowRight } from "lucide-react";

const offerings = [
  "ISO 9001 – Quality Management",
  "ISO 14001 – Environmental Management",
  "ISO 27001 – Information Security",
  "ISO 27701 – Privacy Information Management",
  "Risk Assessment & Mitigation",
  "Gap Analysis & Readiness Assessments",
];

const IsoRiskPage = () => (
  <Layout>
    <section className="gradient-hero pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-3xl">
          <span className="text-teal text-sm font-medium uppercase tracking-wider">Solutions</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 mt-2">ISO & Risk Consulting</h1>
          <p className="text-lg text-white/90 leading-relaxed">
            End-to-end support for achieving ISO certifications and building comprehensive risk management frameworks.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading title="What We Offer" centered={false} />
            <p className="text-muted-foreground leading-relaxed mb-6">
              We provide complete support for ISO certification journeys and risk management, from gap analysis through audit preparation and beyond.
            </p>
            <Link to="/contact"><Button variant="cta"><Phone className="w-4 h-4" />Request Consultation</Button></Link>
          </div>
          <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
            <h4 className="font-display font-semibold text-lg text-foreground mb-4">Key Offerings</h4>
            <ul className="space-y-3">
              {offerings.map((o, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-teal-pale">
      <div className="container-custom text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-foreground mb-4">Explore More Solutions</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/solutions/cybersecurity"><Button variant="outline">Cybersecurity<ArrowRight className="w-4 h-4" /></Button></Link>
          <Link to="/solutions/data-privacy"><Button variant="outline">Data Privacy<ArrowRight className="w-4 h-4" /></Button></Link>
          <Link to="/solutions/audit-compliance"><Button variant="outline">Audit & Compliance<ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default IsoRiskPage;
