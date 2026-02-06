import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Award, Target, Eye, Users, CheckCircle2, Shield, Lock, Briefcase, FileCheck } from "lucide-react";

const achievements = [
  "Supported DPDPA and GDPR readiness programs",
  "Delivered enterprise privacy audits",
  "Enabled successful ISO certification journeys",
  "Conducted compliance awareness and training programs",
  "Built execution strength in regulated environments",
];

const certifications = [
  { icon: Shield, name: "IAPP Certified Privacy Professionals" },
  { icon: Lock, name: "Certified Privacy Assessors" },
  { icon: FileCheck, name: "ISMS & ISO Lead Implementers / Auditors" },
  { icon: Award, name: "Quality and Compliance Management Certifications" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              About SHIVERA INFOTECH
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Founded in 2022, SHIVERA INFOTECH LLP was established to address the growing need for reliable IT, data privacy, and compliance solutions in an increasingly regulated digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Our Story" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-6">
                SHIVERA INFOTECH LLP was founded to address the growing need for reliable IT, data privacy, and compliance solutions in an increasingly regulated digital landscape.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are led by professionals with deep expertise across IT services, data privacy, cybersecurity, regulatory compliance, and quality systems. Our focus is on building long-term partnerships built on trust, transparency, and delivery excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-2xl shadow-card border border-border">
                <Award className="w-10 h-10 text-teal mb-4" />
                <div className="font-display font-bold text-3xl text-foreground mb-1">2022</div>
                <div className="text-sm text-muted-foreground">Year Founded</div>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-card border border-border">
                <Users className="w-10 h-10 text-teal mb-4" />
                <div className="font-display font-bold text-3xl text-foreground mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Years Combined Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-teal" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a trusted partner in IT, data privacy, and compliance by setting new benchmarks of reliability, integrity, and excellence.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-teal" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower enterprises through authentic, strategically tailored IT and compliance services that ensure regulatory alignment, operational resilience, and measurable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Leadership"
            subtitle="SHIVERA INFOTECH LLP is led by professionals with deep expertise across IT services, data privacy, cybersecurity, regulatory compliance, and quality systems."
          />
          <div className="max-w-3xl mx-auto bg-card p-8 rounded-2xl shadow-card border border-border">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-10 h-10 text-teal" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  Industry-Led Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our leadership team brings decades of combined experience in IT consulting, regulatory compliance, and quality management. We believe in building long-term partnerships founded on trust, transparency, and delivery excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <SectionHeading
            title="Our Achievements"
            subtitle="Milestones that define our journey of excellence."
            light
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <CheckCircle2 className="w-6 h-6 text-teal-light flex-shrink-0" />
                  <span className="text-primary-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Certifications & Credentials"
            subtitle="Our team holds industry-recognized certifications and credentials."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-card p-6 rounded-2xl shadow-card border border-border text-center hover:border-teal/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-teal" />
                </div>
                <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
