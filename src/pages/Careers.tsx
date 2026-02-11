import Layout from "@/components/Layout";
import { Briefcase, Clock } from "lucide-react";

const CareersPage = () => (
  <Layout>
    <section className="gradient-hero pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Careers</h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Join our growing team of cybersecurity, privacy, and compliance professionals.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-8">
            <Clock className="w-12 h-12 text-teal" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We're building something exciting. Our careers page is under construction. Check back soon for opportunities to join the Shivera Infotech team.
          </p>
          <div className="bg-card p-6 rounded-2xl shadow-card border border-border inline-block">
            <div className="flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-teal" />
              <span className="text-foreground font-medium">
                Send your resume to{" "}
                <a href="mailto:aruna.deshmukh@shiverainfotech.com" className="text-teal hover:underline">
                  aruna.deshmukh@shiverainfotech.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default CareersPage;
