export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Escape</h4>
            <p>
              Premium automotive detailing with dark aesthetic precision. Transforming vehicles since
              2020.
            </p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="/services">Premium Wash</a>
              </li>
              <li>
                <a href="/services">Paint Protection</a>
              </li>
              <li>
                <a href="/services">Ceramic Coating</a>
              </li>
              <li>
                <a href="/services">Interior Detailing</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:info@escapedetailing.com">info@escapedetailing.com</a>
              </li>
              <li>
                <a href="tel:+15551234567">(555) 123-4567</a>
              </li>
              <li>123 Shine Street, Auto City, AC 12345</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Escape Detailing. All rights reserved. | Premium Automotive Care</p>
        </div>
      </div>
    </footer>
  );
}
