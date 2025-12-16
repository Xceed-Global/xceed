// src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 ">
        <h1 className="text-3xl font-bold">About </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          We helps organizations transform with data, AI and automation. We work with teams across industries to find high-value opportunities,
          build reliable systems and deliver measurable impact — faster.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-6">
          <div className="p-4 border rounded-lg bg-white dark:bg-slate-800">
            <h3 className="font-semibold">Mission</h3>
            <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">Deliver practical AI and data solutions that accelerate decision-making and efficiency.</p>
          </div>
          <div className="p-4 border rounded-lg bg-white dark:bg-slate-800">
            <h3 className="font-semibold">Approach</h3>
            <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">Product-led engineering, human-centered design and robust MLOps & data engineering practices.</p>
          </div>

          <div className="p-4 border rounded-lg bg-white dark:bg-slate-800">
            <h3 className="font-semibold">Team & Founder</h3>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              <div><strong>Sachith Bandara</strong></div>
              <div className="text-xs">Specialist in BI, Data & AI</div>
              <div className="text-xs">Owner • Co-founder — XCEED</div>
              <div className="mt-2">
                <a href="https://www.linkedin.com/in/sachithbandarathennakoon/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-300 underline">
                  View LinkedIn profile → 
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">What we believe</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Technology should amplify human potential, not replace it. Our solutions prioritize both measurable business value and better experiences for the people who use them.</p>
        </div>
      </div>
    </div>
  );
}
