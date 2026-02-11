import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import TrustBadge from "@/components/TrustBadge";
import ContactForm from "@/components/ContactForm";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Shield, Lock, Award, Phone, Users, Target, CheckCircle2, ArrowRight,
  GraduationCap, Laptop, Globe, FileCheck, BookOpen,
} from "lucide-react";

const trustBadges = ["Audit Ready", "Regulator Aligned", "Enterprise Trusted", "20+ Years Expertise"];

const solutionsPreview = [
  { icon: Lock, title: "Cybersecurity Services", description: "VAPT, SOC Readiness, Incident Response, and Threat Assessments.", link: "/solutions/cybersecurity" },
  { icon: Shield, title: "Data Privacy & Governance", description: "DPDP Compliance, Privacy Programs, and Governance Frameworks.", link: "/solutions/data-privacy" },
  { icon: Award, title: "ISO & Risk Consulting", description: "ISO 9001, 14001, 27001, 27701 certification and risk management.", link: "/solutions/iso-risk" },
  { icon: FileCheck, title: "Audit & Compliance Readiness", description: "CSV, GxP, POSH, and Environmental compliance services.", link: "/solutions/audit-compliance" },
];

const trainingPreview = [
  { icon: Lock, title: "Cybersecurity Training", mode: "Corporate" },
  { icon: Shield, title: "Data Privacy Training", mode: "Online" },
  { icon: GraduationCap, title: "Certified DPO Training", mode: "Hybrid" },
];

const whyChooseUs = [
  { icon: Users, title: "20+ Years Expertise", description: "Industry veterans across IT, pharma, and compliance." },
  { icon: Award, title: "Certified Professionals", description: "IAPP certified privacy professionals and ISO lead implementers." },
  { icon: Target, title: "Implementation-First", description: "Audit-ready delivery with practical, actionable solutions." },
  { icon: CheckCircle2, title: "Regulator-Aligned", description: "Solutions designed for evolving regulatory requirements." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-teal-dark/70" />
        <div className="container-custom relative z-10 py-20 pt-32">
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up">
              Empowering Organizations with Trusted IT, Data Privacy, and Compliance Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Expert-led cybersecurity, data privacy, compliance consulting, and professional training programs for enterprises and institutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/contact">
                <Button variant="hero" size="xl"><Phone className="w-5 h-5" />Schedule a Consultation</Button>
              </Link>
              <Link to="/solutions/cybersecurity">
                <Button variant="heroOutline" size="xl">Explore Solutions<ArrowRight className="w-5 h-5" /></Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {trustBadges.map((badge) => <TrustBadge key={badge} text={badge} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are - Short */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Who We Are" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-6">
                SHIVERA INFOTECH LLP is a technology and compliance consulting firm established by seasoned industry professionals. We deliver reliable, outcome-driven IT and compliance solutions.
              </p>
              <Link to="/about">
                <Button variant="outline">Read More About Us<ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, name: "Enterprise Solutions" },
                { icon: Lock, name: "Cybersecurity" },
                { icon: Shield, name: "Data Privacy" },
                { icon: Laptop, name: "IT Compliance" },
              ].map((item) => (
                <div key={item.name} className="bg-card p-6 rounded-2xl shadow-card border border-border hover:border-teal/30 transition-colors">
                  <item.icon className="w-8 h-8 text-teal mb-3" />
                  <h4 className="font-medium text-foreground text-sm">{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section id="services" className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading title="Our Solutions" subtitle="Comprehensive cybersecurity, privacy, and compliance services." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionsPreview.map((s) => (
              <Link key={s.title} to={s.link} className="group block bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-teal/30 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                  <s.icon className="w-7 h-7 text-teal" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-teal transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.description}</p>
                <div className="flex items-center gap-2 text-teal text-sm font-medium">View Details<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Training Preview */}
      <section id="training" className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading title="Training & Certifications" subtitle="Professional programs to upskill your team." />
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {trainingPreview.map((t) => (
              <div key={t.title} className="bg-card p-6 rounded-2xl shadow-card border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <t.icon className="w-7 h-7 text-teal" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{t.title}</h3>
                <span className="text-xs text-teal font-medium bg-teal/10 px-3 py-1 rounded-full">{t.mode}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/training"><Button variant="outline">Explore All Programs<ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section id="testimonials" className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading title="What Our Clients Say" subtitle="Trusted by organizations across industries." />
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {["NQ", "HTPL", "IQS"].map((company) => (
              <div key={company} className="bg-card p-6 rounded-2xl shadow-card border border-border">
                <div className="flex gap-1 mb-4">{[1,2,3,4,5].map(i => <BookOpen key={i} className="w-4 h-4 text-teal" />)}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"Shivera Infotech delivered exceptional results with professionalism and deep expertise."</p>
                <div className="font-medium text-foreground text-sm">{company}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/testimonials"><Button variant="outline">View All Testimonials<ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <SectionHeading title="Why Choose SHIVERA INFOTECH" subtitle="What sets us apart." light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-teal/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-teal-pale">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to strengthen your IT and compliance foundation?</h2>
            <p className="text-lg text-muted-foreground mb-8">Schedule a consultation with our experts today.</p>
            <Link to="/contact"><Button variant="cta" size="xl"><Phone className="w-5 h-5" />Schedule a Consultation</Button></Link>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section id="contact" className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="Get In Touch" subtitle="Ready to start? We're here to help." centered={false} />
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call us</div>
                  <a href="tel:+918208986057" className="font-medium text-foreground hover:text-teal transition-colors">+91 8208986057</a>
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
