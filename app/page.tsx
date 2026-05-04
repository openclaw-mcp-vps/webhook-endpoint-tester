export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Test &amp; Debug Webhook Endpoints{' '}
          <span className="text-[#58a6ff]">Before Deployment</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Get a temporary webhook URL in seconds. Capture payloads in real-time, validate signatures, and simulate webhook scenarios — no infrastructure needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Testing — $7/mo
          </a>
          <a
            href="#features"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            See Features
          </a>
        </div>
        <div id="features" className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 text-left">
          {[
            { icon: '⚡', label: 'Real-time capture', desc: 'WebSocket-powered live payload streaming' },
            { icon: '🔗', label: 'Temp URLs', desc: 'Instant disposable webhook endpoints' },
            { icon: '🔐', label: 'Sig validation', desc: 'HMAC signature verification built-in' },
            { icon: '🎭', label: 'Simulations', desc: 'Replay and simulate webhook scenarios' },
          ].map((f) => (
            <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="text-white font-semibold text-sm mb-1">{f.label}</div>
              <div className="text-[#8b949e] text-xs">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <div className="text-[#8b949e] text-sm mb-8">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited webhook endpoints',
              'Real-time payload inspector',
              'HMAC signature validation',
              'Webhook scenario simulator',
              'PostgreSQL-backed history',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do temporary webhook URLs work?',
              a: 'After subscribing, you generate a unique endpoint URL from your dashboard. Any HTTP request sent to that URL is captured and displayed in real-time via WebSockets — no server setup required.',
            },
            {
              q: 'Can I validate webhook signatures?',
              a: 'Yes. Paste your webhook secret and we automatically verify HMAC-SHA256 signatures for popular providers like Stripe, GitHub, and Shopify, flagging invalid requests instantly.',
            },
            {
              q: 'Is my payload data secure?',
              a: 'All payloads are encrypted at rest in PostgreSQL and automatically deleted after 30 days. Temporary URLs expire after 24 hours by default, keeping your testing environment clean.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} WebhookTest. Built for developers.
      </footer>
    </main>
  )
}
