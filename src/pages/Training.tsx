import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Lock, Shield, GraduationCap, Scale, Award, Database, Clock, Monitor, BadgeCheck, Phone } from "lucide-react";

const programs = [
  {
    id: "cybersecurity",
    icon: Lock,
    title: "Cybersecurity Training",
    duration: "3-5 Days",
    mode: "Corporate / Online",
    description: "Comprehensive cybersecurity awareness and hands-on training for enterprise teams.",
  },
  {
    id: "privacy",
    icon: Shield,
    title: "Data Privacy Training",
    duration: "2-3 Days",
    mode: "Online / Corporate",
    description: "DPDP and GDPR-focused privacy training for organizations and professionals.",
  },
  {
    id: "dpo",
    icon: GraduationCap,
    title: "Certified DPO Training",
    duration: "5 Days",
    mode: "Hybrid",
    description: "Certified Data Protection Officer enablement program with hands-on case studies.",
  },
  {
    id: "posh",
    icon: Scale,
    title: "POSH Training",
    duration: "1-2 Days",
    mode: "Corporate",
    description: "Prevention of Sexual Harassment awareness and Internal Committee training.",
  },
  {
    id: "iso",
    icon: Award,
    title: "ISO 27001 Training",
    duration: "3 Days",
    mode: "Online / Corporate",
    description: "ISO 27001 lead implementer and auditor training for information security professionals.",
  },
  {
    id: "data-engineering",
    icon: Database,
    title: "Data Engineering Training",
    duration: "5-10 Days",
    mode: "Online",
    description: "Modern data engineering practices, pipelines, and analytics training.",
  },
];

const TrainingPage = () => (
  <Layout>
    <section className="gradient-hero pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Training & Certifications</h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Professional training programs to upskill your team in cybersecurity, data privacy, compliance, and beyond.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeading title="Our Training Programs" subtitle="Industry-recognized programs designed for professionals and enterprises." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.id} id={p.id} className="scroll-mt-24 bg-card rounded-2xl p-6 shadow-card border border-border hover:border-teal/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                <p.icon className="w-7 h-7 text-teal" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3" />{p.duration}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  <Monitor className="w-3 h-3" />{p.mode}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-teal bg-teal/10 px-3 py-1 rounded-full">
                  <BadgeCheck className="w-3 h-3" />Certificate
                </span>
              </div>
              <Link to="/contact">
                <Button variant="cta" size="sm" className="w-full">Enroll Now</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl font-bold mb-4">Need a Custom Training Program?</h2>
        <p className="text-primary-foreground/80 text-lg mb-8">We design tailored training for your organization's specific needs.</p>
        <Link to="/contact"><Button variant="hero" size="xl"><Phone className="w-5 h-5" />Schedule a Consultation</Button></Link>
      </div>
    </section>
  </Layout>
);

export default TrainingPage;
