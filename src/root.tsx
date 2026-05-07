import { Outlet } from '@remix-run/react';
import type { MetaFunction } from '@remix-run/node';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css';

export const meta: MetaFunction = () => {
  return [
    { title: 'Escape Detailing - Premium Automotive Care' },
    {
      name: 'description',
      content: 'Premium automotive detailing services with dark aesthetic and precision craftsmanship.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ];
};

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </body>
    </html>
  );
}
