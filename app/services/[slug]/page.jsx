import { serviceData } from '@/assets/assets';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const servicesBySlug = serviceData.reduce((acc, service) => {
  if (service.slug) {
    acc[service.slug] = service;
  }
  return acc;
}, {});

export async function generateStaticParams() {
  return serviceData
    .filter((service) => service.slug)
    .map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = servicesBySlug[params.slug];

  if (!service) {
    return {};
  }

  const title = `${service.title} | Services — Virul Meemana`;
  const description = service.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/services/${service.slug}`,
      type: 'article',
    },
  };
}

export default function ServiceDetail({ params }) {
  const service = servicesBySlug[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <section className="relative w-full px-4 md:px-8 lg:px-16 xl:px-24 py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4">Service</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            {service.description}
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-6">
          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">What you get</h2>
            <ul className="space-y-3 text-slate-300 list-disc list-inside">
              <li>Discovery workshop to align on goals and success metrics.</li>
              <li>Dedicated design/development sprints with async updates.</li>
              <li>Performance, accessibility, and QA reviews before launch.</li>
              <li>Post-launch support window and documentation.</li>
            </ul>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Ready to collaborate?</h2>
            <p className="text-slate-300 mb-6">
              Share project details and I&apos;ll respond within one business day with next steps.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-purple-500/30 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
