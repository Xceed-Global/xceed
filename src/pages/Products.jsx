// src/pages/Products.jsx
import React from 'react';

export default function Products() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">

        <h1 className="text-3xl font-bold">Products</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Explore XCEED's live systems, BI solutions and upcoming innovation projects.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Data & Dashboard Management System */}
          <div className="p-6 rounded-lg border bg-white dark:bg-slate-800 shadow-sm">
            <h2 className="text-xl font-semibold">Data & Dashboard Management System</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              A full-stack, role-based dashboard and data management ecosystem.  
              This includes departmental analytics, integrated data models,
              and real-time BI views deployed .
            </p>

            <div className="mt-5">
              <a
                href="https://xceed-global.github.io/xceed-analytics/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 rounded-md bg-teal-600 text-white font-medium shadow hover:opacity-95"
              >
                Open System
              </a>
            </div>
          </div>

          {/* Power BI Dashboards */}
          <div className="p-6 rounded-lg border bg-white dark:bg-slate-800 shadow-sm">
            <h2 className="text-xl font-semibold">Power BI Dashboards</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Interactive Power BI dashboards built for decision-makers.
              Includes departmental KPIs, financial insights, operational analytics
              and real-time visibility for organizational leadership.
            </p>

            <div className="mt-5">
              <a
                href="https://xceed-global.github.io/xceed-analytics/#/departments"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 rounded-md bg-teal-600 text-white font-medium shadow hover:opacity-95"
              >
                View Dashboards
              </a>
            </div>
          </div>

          {/* Areté System - Coming Soon */}
          <div className="p-6 rounded-lg border bg-white dark:bg-slate-800 shadow-sm md:col-span-2">
            <h2 className="text-xl font-semibold">Areté System (Coming Soon)</h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              <br2 /><br2/>
              <strong>What is Areté?</strong>
              <br2 /><br/>
              Areté embodies the pursuit of perfection in every aspect of life — strength, wisdom, and harmony —
              the state where power and purpose unite.  
              <br1 /><br />
              In the modern age, Areté reawakens this timeless ideal.  
              By uniting martial art, philosophy, and artificial intelligence,  
              Areté transforms human development into a dynamic path of mastery.
              <br1 /><br />
              Through the balance of discipline, thought, and technology, it guides individuals to master both 
              technique and life itself — evolving human potential to the next level.
              <br1 /><br />
              Rooted in the Four Pillars of Areté, it strengthens the body, the mind, the spirit and the unity that binds them all.
              <br1 /><br />
              Areté is not a destination but a state of becoming — where body, mind, and spirit move as one, 
              guided by wisdom and enhanced by intelligence.
            </p>

            <div className="mt-5">
              <button
                disabled
                className="inline-flex items-center px-5 py-2 rounded-md bg-slate-300 text-slate-600 dark:bg-slate-700 dark:text-slate-400 cursor-not-allowed"
              >
                In Development — Coming Soon
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
