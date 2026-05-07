import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => [
  { title: 'About - Escape Detailing' },
  { name: 'description', content: 'Learn about Escape Detailing and our mission.' },
];

export default function About() {
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
            <h1>About Escape Detailing</h1>
            <p style={{ fontSize: '1.1rem' }}>
              Crafting automotive perfection since 2020.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2>Our Story</h2>
              <p style={{ marginBottom: '1rem' }}>
                Escape Detailing was born from a passion for automotive excellence and a belief that
                every vehicle deserves premium care. What started as a small operation has grown into
                a premier detailing destination.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                We're obsessed with the details. From the precise application of ceramic coatings to
                the perfect paint finish, every aspect of our work reflects our commitment to
                perfection.
              </p>
              <p>
                Today, we serve hundreds of satisfied customers who trust us with their most prized
                possessions. Our reputation is built on quality, integrity, and an unwavering
                dedication to excellence.
              </p>
            </div>
            <div className="card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>⚡</div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ textAlign: 'center' }}>
                To provide automotive detailing excellence that exceeds expectations, using premium
                products and meticulous craftsmanship to transform vehicles into works of art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" style={{ backgroundColor: 'var(--dark-bg)' }}>
        <div className="container">
          <h2 className="text-center mb-lg">Our Core Values</h2>
          <div className="grid grid-3">
            <div className="card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💎</div>
              <h3>Quality</h3>
              <p>
                We never compromise on quality. Every product is premium grade, every process is
                precise, every result is perfect.
              </p>
            </div>
            <div className="card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
              <h3>Integrity</h3>
              <p>
                Honest communication, transparent pricing, and reliable service define our
                relationship with every customer.
              </p>
            </div>
            <div className="card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
              <h3>Excellence</h3>
              <p>
                Excellence is not a destination; it's a continuous pursuit. We're always improving,
                always innovating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-lg">Meet Our Team</h2>
          <div className="grid grid-4">
            {[
              {
                name: 'Marcus Chen',
                role: 'Founder & Lead Detailer',
                bio: '15+ years in automotive care',
              },
              {
                name: 'Sarah Rodriguez',
                role: 'Paint Protection Specialist',
                bio: '10+ years PPF expertise',
              },
              {
                name: 'James Thompson',
                role: 'Interior Specialist',
                bio: '8+ years luxury interior detail',
              },
              {
                name: 'David Park',
                role: 'Ceramic Coating Expert',
                bio: '12+ years coating application',
              },
            ].map((member, idx) => (
              <div key={idx} className="card" style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(0, 217, 255, 0.1)',
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    border: '2px solid var(--accent-cyan)',
                  }}
                >
                  👤
                </div>
                <h3>{member.name}</h3>
                <div style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>{member.role}</div>
                <p style={{ fontSize: '0.9rem' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section" style={{ backgroundColor: 'var(--dark-bg)' }}>
        <div className="container">
          <h2 className="text-center mb-lg">Why Customers Choose Escape</h2>
          <div className="grid grid-2" style={{ gap: '3rem' }}>
            <div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem' }}>✓</div>
                <div>
                  <h3>Premium Products Only</h3>
                  <p>We use industry-leading brands and never settle for mediocre supplies.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem' }}>✓</div>
                <div>
                  <h3>Expert Team</h3>
                  <p>Certified professionals with years of specialized training and experience.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem' }}>✓</div>
                <div>
                  <h3>Attention to Detail</h3>
                  <p>We obsess over every aspect of the detailing process for flawless results.</p>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem' }}>✓</div>
                <div>
                  <h3>Warranty Coverage</h3>
                  <p>All services backed by comprehensive warranties for peace of mind.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem' }}>✓</div>
                <div>
                  <h3>Transparent Pricing</h3>
                  <p>No hidden fees. You know exactly what you're paying for upfront.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem' }}>✓</div>
                <div>
                  <h3>Customer Satisfaction</h3>
                  <p>We stand behind our work with a satisfaction guarantee on every service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
                6+
              </div>
              <h3>Years</h3>
              <p>In business serving the community</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
                2000+
              </div>
              <h3>Vehicles</h3>
              <p>Transformed to perfection</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
                98%
              </div>
              <h3>Satisfaction</h3>
              <p>Customer satisfaction rating</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
                50+
              </div>
              <h3>Awards</h3>
              <p>Industry recognition & accolades</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'var(--dark-bg)', textAlign: 'center' }}>
        <div className="container">
          <h2>Experience the Escape Difference</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Join thousands of satisfied customers who have trusted us with their vehicles.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
}
