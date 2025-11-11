export const metadata = {
  title: 'Thank You | Virul Meemana',
  description: 'Thanks for reaching out. I will respond within 24 hours.',
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white px-6 py-24">
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Message received</p>
        <h1 className="text-4xl md:text-5xl font-bold">Thanks for getting in touch!</h1>
        <p className="text-lg text-slate-300">
          I&apos;ll review your message and reply within one business day. If it&apos;s urgent, feel free to
          follow up via LinkedIn or Twitter.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold shadow-lg shadow-cyan-500/30"
        >
          Back to home
        </a>
      </div>
    </section>
  );
}
