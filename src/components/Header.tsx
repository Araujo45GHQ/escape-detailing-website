import { Link } from '@remix-run/react';

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            ✨ ESCAPE
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
