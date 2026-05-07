import { useState } from 'react';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => [
  { title: 'Contact - Escape Detailing' },
  { name: 'description', content: 'Get in touch with Escape Detailing.' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="section--hero"
        style={{
          minHeight: '40vh',
          paddingTop: '2rem',
          background: 'linear-gradient(135deg, var(--primary-black) 0%, var(--dark-bg) 100%)',
        }}
      >
        <div className="container">
          <div className="text-center">
            <h1>Get in Touch</h1>
            <p style={{ fontSize: '1.1rem' }}>
              Ready to transform your vehicle? Let's talk.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '3rem' }}>
            {/* Contact Form */}
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Send us a Message</h2>
              {submitted && (
                <div
                  style={{
                    backgroundColor: 'rgba(0, 217, 255, 0.1)',
                    border: '1px solid var(--accent-cyan)',
                    borderRadius: '8px',
                    padding: '1rem',
                    marginBottom: '1.5rem',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  ✓ Thank you for your message! We'll get back to you shortly.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    <option value="premium-wash">Premium Wash</option>
                    <option value="paint-protection">Paint Protection Film</option>
                    <option value="ceramic-coating">Ceramic Coating</option>
                    <option value="interior-detailing">Interior Detailing</option>
                    <option value="window-tinting">Window Tinting</option>
                    <option value="full-package">Full Detailing Package</option>
                    <option value="other">Other / Consultation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your vehicle and what you're looking for..."
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Contact Information</h2>
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>📍 Location</h3>
                <p>
                  123 Shine Street
                  <br />
                  Auto City, AC 12345
                  <br />
                  United States
                </p>
              </div>

              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>📱 Phone</h3>
                <p>
                  <a href="tel:+15551234567">(555) 123-4567</a>
                </p>
              </div>

              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>📧 Email</h3>
                <p>
                  <a href="mailto:info@escapedetailing.com">info@escapedetailing.com</a>
                </p>
              </div>

              <div className="card">
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>🕐 Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 5:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Follow Us</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem' }}>
                    f
                  </a>
                  <a href="#" style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem' }}>
                    📷
                  </a>
                  <a href="#" style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem' }}>
                    🐦
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: 'var(--dark-bg)' }}>
        <div className="container">
          <h2 className="text-center mb-lg">Frequently Asked Questions</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>How long does a typical service take?</h3>
              <p>
                Service times vary based on your vehicle and the package selected. Premium Wash takes
                1.5-2 hours, while full packages can take 6-8 hours or more. We'll provide an estimate
                during consultation.
              </p>
            </div>
            <div className="card">
              <h3>Do you offer mobile detailing?</h3>
              <p>
                Currently, all services are performed at our facility to ensure optimal conditions and
                quality control. Contact us for special requests or fleet services.
              </p>
            </div>
            <div className="card">
              <h3>What's your warranty coverage?</h3>
              <p>
                All ceramic coatings come with 2-3 year warranties. Paint Protection Film includes a
                10-year warranty. Interior and wash services are guaranteed for customer satisfaction.
              </p>
            </div>
            <div className="card">
              <h3>Can you work on exotic or vintage vehicles?</h3>
              <p>
                Absolutely! We have experience with all vehicle types, including exotic sports cars,
                vintage classics, and luxury vehicles. Special care protocols are applied as needed.
              </p>
            </div>
            <div className="card">
              <h3>How should I prepare my vehicle?</h3>
              <p>
                Simply remove personal items and ensure windows are closed. We handle all the rest! A
                quick vacuum and removal of exterior items is all we need to get started.
              </p>
            </div>
            <div className="card">
              <h3>Do you offer payment plans?</h3>
              <p>
                Yes! We accept major credit cards and offer flexible payment options for larger
                packages. Contact us to discuss what works best for your budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
