import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesList({ data }) {
  // mapping of keys to slugs (keeps slugs explicit & stable)
  const slugMap = {
    ai: 'ai',
    dataEngineering: 'data-engineering',
    bi: 'bi',
    automation: 'automation',
    research: 'research',
    robotics: 'robotics'
  };

  return (
    <section id="services" className="py-12 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Services</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">We offer end-to-end services across AI, Data Engineering, BI, Automation and Strategy.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(data).map((k) => (
            <div key={k} className="p-5 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-800">
              <h3 className="font-semibold">{data[k].title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{data[k].intro}</p>
              <div className="mt-4 space-y-1 text-sm text-slate-700 dark:text-slate-200">
                {data[k].sections.slice(0,2).map((s, idx) => (
                  <div key={idx}><strong>{s.title}:</strong> {s.items.slice(0,3).join(', ')}{s.items.length>3?'...':''}</div>
                ))}
              </div>
              <div className="mt-4">
                <Link className="text-sm inline-flex items-center gap-2 font-medium text-teal-600 dark:text-teal-300" to={`/services/${slugMap[k] || k}`}>
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
