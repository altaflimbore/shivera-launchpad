import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Award,
  Server,
  Briefcase,
  Scale,
  Leaf,
  Phone,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "privacy",
    icon: Shield,
    title: "Data Privacy & Compliance",
    subtitle: "DPDPA & GDPR Solutions",
    description:
      "Comprehensive data privacy services to help organizations comply with DPDPA, GDPR, and other privacy regulations.",
    offerings: [
      "DPDPA & GDPR gap assessments",
      "Privacy program implementation",
      "Data protection impact assessments",
      "DPO as a Service",
      "Privacy tools implementation",
      "Awareness training programs",
    ],
  },
  {
    id: "cybersecurity",
    icon: Lock,
    title: "Cybersecurity & ISMS",
    subtitle: "Information Security Management",
    description:
      "End-to-end cybersecurity and ISMS implementation to protect your organization's critical assets.",
    offerings: [
      "ISMS framework implementation",
      "ISO 27001 & ISO 27701 certification support",
      "Cybersecurity risk assessments",
      "Incident readiness planning",
      "Security awareness training",
      "Vulnerability assessments",
    ],
  },
  {
    id: "iso",
    icon: Award,
    title: "ISO Certifications",
    subtitle: "End-to-End Certification Support",
    description:
      "Complete support for achieving and maintaining ISO certifications across quality, environment, and security domains.",
    offerings: [
      "ISO 9001 – Quality Management",
      "ISO 14001 – Environmental Management",
      "ISO 27001 – Information Security",
      "ISO 27701 – Privacy Information Management",
      "Gap analysis and readiness assessments",
      "Audit preparation and support",
    ],
  },
  {
    id: "csv",
    icon: Server,
    title: "IT CSV & GxP Compliance",
    subtitle: "Computerized System Validation",
    description:
      "Expert CSV and GxP compliance services for pharmaceutical, life sciences, and regulated industries.",
    offerings: [
      "Computerized System Validation (CSV)",
      "Infrastructure qualification (IQ/OQ/PQ)",
      "GxP migration and validation",
      "21 CFR Part 11 compliance",
      "Data integrity assessments",
      "Validation documentation",
    ],
  },
  {
    id: "erp",
    icon: Briefcase,
    title: "ERP & Digital Solutions",
    subtitle: "ERPNext Implementation",
    description:
      "Comprehensive ERPNext implementation and support services for business process optimization.",
    offerings: [
      "ERPNext configuration and implementation",
      "Business process optimization",
      "Custom module development",
      "Integration services",
      "Training and change management",
      "Ongoing support and maintenance",
    ],
  },
  {
    id: "posh",
    icon: Scale,
    title: "POSH & Legal Compliance",
    subtitle: "Workplace Compliance Solutions",
    description:
      "Complete POSH compliance and legal training services to create a safe and compliant workplace.",
    offerings: [
      "POSH awareness sessions",
      "IC (Internal Committee) training",
      "POSH policy drafting",
      "Annual compliance reporting",
      "External IC member support",
      "Legal advisory services",
    ],
  },
  {
    id: "audits",
    icon: Leaf,
    title: "Environmental & Energy Audits",
    subtitle: "Sustainability Solutions",
    description:
      "Comprehensive environmental and energy audit services to support your sustainability goals.",
    offerings: [
      "Green audits",
      "Environmental impact assessments",
      "Energy efficiency audits",
      "Carbon footprint analysis",
      "Sustainability roadmap development",
      "Regulatory compliance support",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Comprehensive IT, data privacy, and compliance solutions designed to help organizations navigate complex regulatory landscapes and achieve operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-teal" />
                  </div>
                  <span className="text-teal font-medium text-sm uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                  <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link to="/contact">
                    <Button variant="cta">
                      <Phone className="w-4 h-4" />
                      Request Consultation
                    </Button>
                  </Link>
                </div>
                <div className={`bg-card p-8 rounded-2xl shadow-card border border-border ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h4 className="font-display font-semibold text-lg text-foreground mb-4">
                    Key Offerings
                  </h4>
                  <ul className="space-y-3">
                    {service.offerings.map((offering, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-teal-pale">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Need a Customized Solution?"
              subtitle="Our team can design tailored solutions to meet your specific compliance and IT requirements."
            />
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

export default Services;
