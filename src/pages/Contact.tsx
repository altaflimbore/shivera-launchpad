import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: (
      <div className="space-y-1">
        <a href="tel:+918208986057" className="block hover:text-teal transition-colors">
          +91 8208986057
        </a>
        <a href="tel:+918087250238" className="block hover:text-teal transition-colors">
          +91 8087250238
        </a>
      </div>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a
        href="mailto:aruna.deshmukh@shiverainfotech.com"
        className="hover:text-teal transition-colors break-all"
      >
        aruna.deshmukh@shiverainfotech.com
      </a>
    ),
  },
  {
    icon: MapPin,
    title: "Location",
    content: <span>India</span>,
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: <span>Monday - Friday: 9:00 AM - 6:00 PM IST</span>,
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Ready to strengthen your IT and compliance foundation? Schedule a consultation with our experts today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="Have questions or ready to start your compliance journey? We're here to help."
                centered={false}
              />

              <div className="mb-8">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  Contact Person
                </h3>
                <p className="text-muted-foreground">Aruna Uttamrao Deshmukh</p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                      <div className="text-muted-foreground">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-muted rounded-2xl flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                  <span className="text-muted-foreground">Map Location</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-6 md:p-8 rounded-2xl shadow-card border border-border">
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Schedule a Consultation
              </h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
