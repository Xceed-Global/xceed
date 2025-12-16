import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Hero from '../sections/Hero';
import FeaturesGrid from '../sections/FeaturesGrid';
import ServicesList from '../sections/ServicesList';
import servicesData from '../data/servicesData';

/* ---------------- Intro Splash ---------------- */
function IntroSplash() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold tracking-wide"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-teal-400">XCEED</span>
      </motion.h1>
    </motion.div>
  );
}

/* ---------------- Home Page ---------------- */
export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem('xceed_intro_seen');
    if (seen) {
      setShowIntro(false);
    } else {
      setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem('xceed_intro_seen', 'true');
      }, 2800);
    }
  }, []);

  const features = [
    {
      title: 'Business outcomes, not models',
      desc: 'We prioritise measurable KPIs: revenue lift, cost reduction, and faster decision cycles.'
    },
    {
      title: 'Human-centered automation',
      desc: 'Automation that augments teams — reducing busywork while keeping humans in the loop.'
    },
    {
      title: 'Production-ready engineering',
      desc: 'Robust data pipelines and MLOps so solutions run reliably at scale.'
    },
    {
      title: 'Ethics & safety-first research',
      desc: 'Responsible design, privacy-aware data practices and safety reviews for sensitive use cases.'
    }
  ];

  const caseStudies = [
    {
      title: 'Retail Forecasting',
      outcome: '35% fewer stockouts • 12% lower inventory costs',
      desc: 'Demand forecasting and replenishment optimization for a national retail chain.'
    },
    {
      title: 'Invoice Automation',
      outcome: 'Saved 1,200 hours/year',
      desc: 'Intelligent document processing that reduced manual invoice handling and errors.'
    },
    {
      title: 'CFO Dashboards',
      outcome: 'Real-time finance KPIs across 10 countries',
      desc: 'Unified BI platform that replaced fragmented spreadsheets and manual reporting.'
    }
  ];

  const process = [
    { step: 'Discover', desc: 'Identify high-impact use cases with measurable success criteria.' },
    { step: 'Build', desc: 'Rapid prototyping, iterate with users, validate with real data.' },
    { step: 'Scale', desc: 'Productionize, monitor and continuously optimize.' }
  ];

  return (
    <>
      {/* Intro Animation */}
      <AnimatePresence>
        {showIntro && <IntroSplash />}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`transition-opacity duration-700 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Hero
          title="Empowering Humans & Businesses to Exceed"
          subtitle="Helping people and companies go beyond their limits using smart, innovative solutions."
          cta={{ text: 'Talk to an Expert', href: '/contact' }}
        />

        <FeaturesGrid features={features} />
        <ServicesList data={servicesData} />

        {/* Case Studies */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Selected Outcomes</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Real projects, measurable impact.
                </p>
              </div>
              <Link
                to="/portfolio"
                className="text-sm text-teal-600 dark:text-teal-300 font-medium"
              >
                View all case studies →
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((c) => (
                <div
                  key={c.title}
                  className="p-6 rounded-lg border bg-white dark:bg-slate-800"
                >
                  <div className="text-sm text-slate-500">{c.title}</div>
                  <div className="font-semibold mt-2">{c.outcome}</div>
                  <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    {c.desc}
                  </div>
                  <Link
                    to="/portfolio"
                    className="inline-block mt-4 text-sm text-teal-600"
                  >
                    Read more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold">How we work</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              A short, pragmatic process to go from idea to impact.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {process.map((p) => (
                <div
                  key={p.step}
                  className="p-6 rounded-lg border bg-white dark:bg-slate-800"
                >
                  <div className="text-teal-600 font-bold">{p.step}</div>
                  <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-white dark:from-slate-900 dark:to-slate-900">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold">Ready to exceed?</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Book a call and discover the highest-value opportunities.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-teal-600 text-white font-medium"
              >
                Talk to an Expert
              </Link>
              <Link
                to="/portfolio"
                className="px-6 py-3 rounded-lg border"
              >
                See case studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
