import React from 'react';
import servicesData from '../../data/servicesData';
import { Link } from 'react-router-dom';

export default function ServicesIndex() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="mt-10 text-slate-600 dark:text-slate-300">Explore our solution areas — click a category to see details and offerings.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/services/ai" className="p-6 rounded-lg border bg-white dark:bg-slate-800">
            <div className="font-semibold">{servicesData.ai.title}</div>
            <div className="text-sm mt-2 text-slate-600 dark:text-slate-300">{servicesData.ai.intro}</div>
          </Link>

          <Link to="/services/data-engineering" className="p-6 rounded-lg border bg-white dark:bg-slate-800">
            <div className="font-semibold">{servicesData.dataEngineering.title}</div>
            <div className="text-sm mt-2 text-slate-600 dark:text-slate-300">{servicesData.dataEngineering.intro}</div>
          </Link>

          <Link to="/services/bi" className="p-6 rounded-lg border bg-white dark:bg-slate-800">
            <div className="font-semibold">{servicesData.bi.title}</div>
            <div className="text-sm mt-2 text-slate-600 dark:text-slate-300">{servicesData.bi.intro}</div>
          </Link>

          <Link to="/services/automation" className="p-6 rounded-lg border bg-white dark:bg-slate-800">
            <div className="font-semibold">{servicesData.automation.title}</div>
            <div className="text-sm mt-2 text-slate-600 dark:text-slate-300">{servicesData.automation.intro}</div>
          </Link>

          <Link to="/services/research" className="p-6 rounded-lg border bg-white dark:bg-slate-800">
            <div className="font-semibold">{servicesData.research.title}</div>
            <div className="text-sm mt-2 text-slate-600 dark:text-slate-300">{servicesData.research.intro}</div>
          </Link>

          <Link to="/services/robotics" className="p-6 rounded-lg border bg-white dark:bg-slate-800">
            <div className="font-semibold">{servicesData.robotics.title}</div>
            <div className="text-sm mt-2 text-slate-600 dark:text-slate-300">{servicesData.robotics.intro}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
