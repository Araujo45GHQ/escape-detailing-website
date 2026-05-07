import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => [
  { title: 'Home - Escape Detailing' },
  { name: 'description', content: 'Experience premium automotive detailing excellence.' },
];

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="section--hero">
        <div className="container">
          <div className="text-center">
            <h1>ESCAPE INTO PERFECTION</h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              Premium automotive detailing crafted for those who demand excellence.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="/services" className="btn btn-primary btn-lg">
                Explore Services
              </a>
              <a href="/contact" className="btn btn-secondary btn-lg">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-lg">Why Choose Escape</h2>
          <div className="grid grid-3">
            <div className="card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
              <h3>Precision</h3>
              <p>
                Every detail matters. Our meticulous approach ensures your vehicle receives the care
                it deserves.
              </p>
            </div>
            <div className="card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💎</div>
              <h3>Premium Products</h3>
              <p>
                We use only the finest automotive care products and coatings available on the market.
              </p>
            </div>
            <div className="card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎨</div>
              <h3>Artistry</h3>
              <p>
                Detailing is an art. Our team treats every vehicle as a masterpiece to be perfected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section" style={{ backgroundColor: 'var(--dark-bg)' }}>
        <div className="container">
          <h2 className="text-center mb-lg">Our Core Services</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Premium Wash & Wax</h3>
              <p>
                Two-stage wash process with ceramic wax application. 1.5-2 hours. Includes interior
                vacuum.
              </p>
              <div style={{ marginTop: '1rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>
                Starting at $149
              </div>
            </div>
            <div className="card">
              <h3>Paint Protection Film</h3>
              <p>
                Self-healing protective film for high-impact areas. 10-year warranty. Professional
                installation included.
              </p>
              <div style={{ marginTop: '1rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>
                Starting at $599
              </div>
            </div>
            <div className="card">
              <h3>Ceramic Coating</h3>
              <p>
                5-year nano-ceramic protection. Superior gloss and hydrophobic properties. 6-8 hours
                application.
              </p>
              <div style={{ marginTop: '1rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>
                Starting at $799
              </div>
            </div>
            <div className="card">
              <h3>Interior Detailing</h3>
              <p>
                Deep clean and protection for your interior. Steam cleaning, leather conditioning,
                and UV protection.
              </p>
              <div style={{ marginTop: '1rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>
                Starting at $299
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/services" className="btn btn-primary btn-lg">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, var(--dark-bg) 0%, var(--card-bg) 100%)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2>Ready to Transform Your Vehicle?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            Book your appointment today and experience the Escape difference. Premium care, perfect
            results.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Schedule Now
          </a>
        </div>
      </section>
    </>
  );
}
