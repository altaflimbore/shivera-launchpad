import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const PrivacyPolicy = () => (
  <Layout>
    <section className="gradient-hero pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-lg text-white/90 leading-relaxed">
            How we collect, use, and protect your information.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-custom max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We collect information you voluntarily provide through our contact forms, including your name, email address, phone number, and message content. We also collect standard web analytics data such as page views and browser information through cookies.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Your information is used solely to respond to your inquiries, provide requested services, and improve our website experience. We do not sell or share your personal information with third parties for marketing purposes.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Data Protection</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. As a data privacy consulting firm, we hold ourselves to the highest standards of data protection.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our website uses essential cookies to ensure proper functionality and optional analytics cookies to understand website usage. You can manage your cookie preferences through the consent popup displayed on your first visit.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            You have the right to access, correct, or delete your personal information. You may also withdraw consent for data processing at any time. To exercise these rights, please contact us at aruna.deshmukh@shiverainfotech.com.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Contact</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            For any privacy-related queries, please contact:<br />
            <strong>Aruna Uttamrao Deshmukh</strong><br />
            Email: <a href="mailto:aruna.deshmukh@shiverainfotech.com" className="text-teal hover:underline">aruna.deshmukh@shiverainfotech.com</a><br />
            Phone: <a href="tel:+918208986057" className="text-teal hover:underline">+91 8208986057</a>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
