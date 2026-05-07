import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => [
  { title: 'Services - Escape Detailing' },
  { name: 'description', content: 'Explore our premium automotive detailing services.' },
];

export default function Services() {
  const services = [
    {
      id: 1,
      name: 'Premium Wash & Wax',
      icon: '🚗',
      description: 'Complete two-stage wash with ceramic wax application for lasting shine.',
      features: ['Two-stage wash', 'Ceramic wax coating', 'Tire shine', 'Interior vacuum', 'Window cleaning'],
      duration: '1.5 - 2 hours',
      price: '$149',
    },
    {
      id: 2,
      name: 'Paint Protection Film',
      icon: '🛡️',
      description: 'Professional PPF installation with 10-year warranty against yellowing.',
      features: ['Self-healing film', 'Front bumper & hood', 'Professional installation', '10-year warranty', 'Gloss finish'],
      duration: '4 - 6 hours',
      price: '$599',
    },
    {
      id: 3,
      name: 'Ceramic Coating',
      icon: '✨',
      description: 'Nano-ceramic coating for superior protection, gloss, and water repellency.',
      features: ['5-year durability', 'Hydrophobic properties', 'Enhanced gloss', 'UV protection', 'Chemical resistant'],
      duration: '6 - 8 hours',
      price: '$799',
    },
    {
      id: 4,
      name: 'Interior Detailing',
      icon: '🧹',
      description: 'Deep clean and protection for a pristine interior environment.',
      features: ['Steam cleaning', 'Leather conditioning', 'Dashboard protection', 'Carpet/upholstery', 'Air freshening'],
      duration: '2 - 3 hours',
      price: '$299',
    },
    {
      id: 5,
      name: 'Window Tinting',
      icon: '🌑',
      description: 'Professional window tinting for privacy, UV protection, and aesthetics.',
      features: ['Premium film', 'UV blocking', 'Heat reduction', 'Privacy', 'Professional installation'],
      duration: '2 - 3 hours',
      price: '$399',
    },
    {
      id: 6,
      name: 'Full Package Detail',
      icon: '👑',
      description: 'Complete premium package combining all our signature services.',
      features: ['Premium wash & wax', 'Paint protection', 'Ceramic coating', 'Interior detail', 'Window tint'],
      duration: '10 - 12 hours',
      price: '$2,499',
    },
  ];

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
            <h1>Our Services</h1>
            <p style={{ fontSize: '1.1rem' }}>
              Premium automotive care tailored to your vehicle's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {services.map((service) => (
              <div key={service.id} className="card">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ color: 'var(--accent-cyan)' }}>{service.name}</h3>
                <p style={{ marginBottom: '1rem', minHeight: '60px' }}>{service.description}</p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    Key Features:
                  </h4>
                  <ul style={{ listStyle: 'none' }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(0, 217, 255, 0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{service.duration}</div>
                    <div style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem', fontWeight: '700' }}>
                      {service.price}
                    </div>
                  </div>
                  <a href="/contact" className="btn btn-secondary" style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}>
                    Book
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" style={{ backgroundColor: 'var(--dark-bg)' }}>
        <div className="container">
          <h2 className="text-center mb-lg">Our Process</h2>
          <div className="grid grid-4">
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📋</div>
              <h3>Consultation</h3>
              <p>We assess your vehicle's condition and discuss your goals.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
              <h3>Inspection</h3>
              <p>Detailed inspection to identify paint imperfections and needs.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛠️</div>
              <h3>Service</h3>
              <p>Expert application of premium products and treatments.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
              <h3>Quality Check</h3>
              <p>Final inspection ensuring perfection in every detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to Book?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Contact us today to schedule your appointment and experience the Escape difference.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Schedule Service
          </a>
        </div>
      </section>
    </>
  );
}
