import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { company: "NQ", quote: "Shivera Infotech delivered exceptional cybersecurity assessment results. Their team's expertise and professionalism exceeded our expectations.", rating: 5 },
  { company: "HTPL", quote: "Their DPDP compliance consulting helped us achieve full regulatory readiness in record time. Highly recommended for privacy services.", rating: 5 },
  { company: "IIK", quote: "The ISO certification journey was seamless with Shivera's guidance. Their audit-ready approach saved us significant time and effort.", rating: 5 },
  { company: "IQS", quote: "Outstanding collaboration on quality management systems. Their deep understanding of compliance requirements is unmatched.", rating: 5 },
  { company: "Herbayu", quote: "Shivera's training programs elevated our team's cybersecurity awareness significantly. The content was practical and actionable.", rating: 4 },
  { company: "Wellness", quote: "Professional, thorough, and results-oriented. Their POSH compliance services were exactly what our organization needed.", rating: 5 },
  { company: "MIT", quote: "Their data privacy consulting helped our institution build a robust privacy framework aligned with regulatory requirements.", rating: 5 },
];

const TestimonialsPage = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <Layout>
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Testimonials</h1>
            <p className="text-lg text-white/90 leading-relaxed">
              What our clients say about working with Shivera Infotech.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading title="Client Stories" subtitle="Real feedback from the organizations we serve." />
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border text-center relative">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-teal fill-teal" />
                ))}
                {Array.from({ length: 5 - testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-border" />
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonials[current].quote}"
              </p>
              <div className="font-display font-bold text-xl text-foreground">{testimonials[current].company}</div>
              <div className="flex justify-center gap-4 mt-8">
                <button onClick={prev} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-teal/10 transition-colors">
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-teal" : "bg-border"}`} />
                  ))}
                </div>
                <button onClick={next} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-teal/10 transition-colors">
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All testimonials grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading title="All Testimonials" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-teal/30 transition-colors">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-teal fill-teal" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div className="font-display font-semibold text-foreground">{t.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;
