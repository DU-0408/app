import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/mock';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Elevator Installation', path: '/services#installation' },
      { name: 'Maintenance & Repairs', path: '/services#maintenance' },
      { name: 'Modernization', path: '/services#modernization' },
      { name: 'Consultation', path: '/services#consultation' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Projects', path: '/projects' },
      { name: 'Careers', path: '/careers' },
      { name: 'Blog', path: '/blog' },
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Get a Quote', path: '/quote' },
      { name: 'Customer Portal', path: '/portal/login' },
      { name: 'FAQs', path: '/faq' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-foreground text-background relative">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold">{companyInfo.name}</span>
            </Link>
            <p className="text-background/70 mb-6 max-w-md">
              {companyInfo.description}
            </p>
            <div className="space-y-3">
              <a href="tel:1-800-533824" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>1-800-KEETCH</span>
              </a>
              <a href="mailto:info@keetchelevators.com" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@keetchelevators.com</span>
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>123 Elevator Way, Industrial District, Metro City, MC 12345</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-background/50 text-sm text-center">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-background/50 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/50 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
