import React from 'react';

export default function FeaturesGrid({ features = [] }) {
  return (
    <section className="py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-5 rounded-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <div className="font-semibold">{f.title}</div>
              <div className="text-sm mt-2 text-slate-600 dark:text-slate-300">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
