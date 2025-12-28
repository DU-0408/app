import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { companyInfo } from '../data/mock';
import { ArrowRight, Building2, CheckCircle2, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium animate-fade-in">
              <Building2 className="w-4 h-4" />
              <span>Trusted Since {companyInfo.founded}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in stagger-1">
              <span className="text-foreground">Elevating</span>
              <br />
              <span className="gradient-text">Excellence</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg animate-fade-in stagger-2">
              {companyInfo.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-3">
              <Link to="/quote">
                <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-secondary">
                  Our Services
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4 animate-fade-in stagger-4">
              {[
                'Licensed & Insured',
                '24/7 Support',
                'Free Consultation'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: `${companyInfo.projectsCompleted}+`, label: 'Projects Completed', delay: '0.1s' },
                { value: `${companyInfo.happyClients}+`, label: 'Happy Clients', delay: '0.2s' },
                { value: `${companyInfo.yearsExperience}+`, label: 'Years Experience', delay: '0.3s' },
                { value: `${companyInfo.teamMembers}+`, label: 'Expert Technicians', delay: '0.4s' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 text-center card-hover animate-fade-in"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating CTA */}
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 flex items-center gap-3 animate-float">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Call us anytime</p>
                <p className="font-semibold">1-800-KEETCH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
