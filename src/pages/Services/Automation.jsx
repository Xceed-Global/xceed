import React from 'react';
import servicesData from '../../data/servicesData';

export default function Automation() {
  const s = servicesData.automation;
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">{s.title}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{s.intro}</p>

        <div className="mt-6 space-y-6">
          {s.sections.map((sec) => (
            <div key={sec.title} className="p-4 border rounded-lg bg-white dark:bg-slate-800">
              <h3 className="font-semibold">{sec.title}</h3>
              <ul className="list-disc pl-5 mt-2 text-sm">
                {sec.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
