"use client";
import styles from './contact.module.css';
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    if (res.ok) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }
    setLoading(false);
  }

  const faqs = [
    { q: "Do you offer refunds?", a: "Yes, within 14 days of purchase — no questions asked." },
    { q: "How long does onboarding take?", a: "Typically 1–2 weeks, depending on your team size." },
    { q: "Do you support integrations?", a: "Yes, we support all major integrations out of the box." },
  ];

  return (
    <div className={styles.page}>

      {/* HERO + FORM */}
      <section className={styles.hero}>
        <div className={`${styles.heroLeft} ${visible ? styles.visible : ""}`}>
          <div className={styles.heroEyebrow}>Contact Us</div>
          <h1 className={styles.heroTitle}>
            Let's start a <em>conversation.</em>
          </h1>
          <p className={styles.heroDesc}>
            Questions about pricing, enterprise plans, or a custom integration?
            Our team is ready to help you move forward.
          </p>
          <div className={styles.responseBadge}>
            <span className={styles.badgeDot} />
            We reply within 24 hours
          </div>
          <div className={styles.heroDeco} />
        </div>

        <div className={`${styles.heroRight} ${visible ? styles.visible : ""}`}>
          <div className={styles.formTitle}>Send us a message</div>
          <div className={styles.formSub}>All fields marked * are required</div>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <input name="name" required placeholder="Full Name *" />
              </div>
              <div className={styles.field}>
                <input name="email" required type="email" placeholder="Work Email *" />
              </div>
              <div className={styles.field}>
                <input name="company" placeholder="Company Name" />
              </div>
              <div className={styles.field}>
                <select name="type" required defaultValue="">
                  <option value="" disabled>Inquiry Type *</option>
                  <option>Sales</option>
                  <option>Support</option>
                  <option>Demo Request</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={styles.fieldFull}>
                <textarea name="message" required placeholder="Your message *" />
              </div>
            </div>

            <button type="submit" disabled={loading} className={styles.submitBtn}>
              {loading ? "Sending…" : "Send Message →"}
            </button>

            {success && (
              <div className={styles.successMsg}>
                <span>✓</span> Message received — we'll be in touch shortly.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <div className={styles.contacts}>
        <div className={styles.contactItem}>
          <div className={styles.contactLabel}>General</div>
          <div className={styles.contactValue}>support@capcocs.com</div>
          <div className={styles.contactDesc}>For general inquiries and support</div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactLabel}>Sales</div>
          <div className={styles.contactValue}>sales@capcocs.com</div>
          <div className={styles.contactDesc}>For pricing and enterprise plans</div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactLabel}>Support</div>
          <div className={styles.contactValue}>24/7 Help Center</div>
          <div className={styles.contactDesc}>Around-the-clock assistance</div>
        </div>
      </div>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.faqSidebar}>
          <div className={styles.sectionLabel}>FAQ</div>
          <h2 className={styles.faqHeading}>
            Common <em>questions,</em> answered.
          </h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <div className={styles.faqItem} key={i}>
              <div className={styles.faqQ}>{faq.q}</div>
              <div className={styles.faqA}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div>
          <h2 className={styles.ctaHeading}>
            Still have <em>questions?</em>
          </h2>
          <p className={styles.ctaSub}>See the product in action — book a 30-minute demo.</p>
        </div>
        <button className={styles.ctaBtn}>Book a Demo</button>
      </section>

    </div>
  );
}