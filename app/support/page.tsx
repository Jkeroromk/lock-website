export default function Support() {
  const s = {
    page: { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '60px 24px' } as const,
    inner: { maxWidth: 640, margin: '0 auto' } as const,
    h1: { fontSize: 36, fontWeight: 900, letterSpacing: '-1px', marginBottom: 8, marginTop: 32 } as const,
    sub: { fontSize: 16, color: '#555', marginBottom: 56 } as const,
    h2: { fontSize: 18, fontWeight: 800, marginTop: 48, marginBottom: 12 } as const,
    p: { fontSize: 15, color: '#888', lineHeight: 1.8, marginBottom: 16 } as const,
    card: { backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: 16, padding: '28px 32px', marginBottom: 16 } as const,
    a: { color: '#fff', fontWeight: 700 } as const,
  };

  const faqs = [
    {
      q: 'How does the AI food recognition work?',
      a: 'Take a photo of your meal and Lock\'s AI analyses the image to estimate calories and macros. The more centred and well-lit the photo, the more accurate the result.',
    },
    {
      q: 'How do I add friends?',
      a: 'Go to the Social tab and tap "Add Friend". You can search by username or share your invite code from your Profile card in Settings → Contacts.',
    },
    {
      q: 'How do I cancel my subscription?',
      a: 'Subscriptions are managed by Apple. Go to Settings app → Apple ID → Subscriptions → Lock, and tap Cancel Subscription.',
    },
    {
      q: 'How do I delete my account?',
      a: 'Go to Settings → Account Security → scroll to Danger Zone → Delete Account. This permanently deletes all your data.',
    },
    {
      q: 'Why isn\'t Apple Health syncing?',
      a: 'Go to Settings → Health Connections and make sure the toggle is enabled. Also check iPhone Settings → Health → Data Access & Devices → Lock and grant the required permissions.',
    },
    {
      q: 'I lost my progress after reinstalling. Can I recover it?',
      a: 'Your data is tied to your account, not your device. Sign back in with the same account (Apple, Google, or email) and your history will be restored automatically.',
    },
  ];

  return (
    <main style={s.page}>
      <div style={s.inner}>
        <a href="/" style={{ color: '#555', textDecoration: 'none', fontSize: 13 }}>← Lock</a>
        <h1 style={s.h1}>Support</h1>
        <p style={s.sub}>We&apos;re here to help. Reach out any time.</p>

        {/* Contact */}
        <div style={{ ...s.card, borderColor: '#2a2a2a' }}>
          <div style={{ fontSize: 28, marginBottom: 12 }}>✉️</div>
          <h2 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 8px' }}>Email Support</h2>
          <p style={{ ...s.p, margin: 0 }}>
            Send us an email at{' '}
            <a href="mailto:support@jkeroro.com" style={s.a}>support@jkeroro.com</a>
            {' '}and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* FAQ */}
        <h2 style={s.h2}>Frequently Asked Questions</h2>
        {faqs.map((faq) => (
          <div key={faq.q} style={s.card}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: '#fff', margin: '0 0 8px' }}>{faq.q}</h3>
            <p style={{ ...s.p, margin: 0 }}>{faq.a}</p>
          </div>
        ))}

        <div style={{ borderTop: '1px solid #1a1a1a', marginTop: 60, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ color: '#555', textDecoration: 'none', fontSize: 13 }}>← Back to Lock</a>
          <a href="/privacy" style={{ color: '#555', textDecoration: 'none', fontSize: 13 }}>Privacy Policy</a>
        </div>
      </div>
    </main>
  );
}
