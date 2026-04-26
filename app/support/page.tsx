const faqs = [
  {
    q: 'How does the AI food recognition work?',
    a: "Take a photo of your meal and Lock's AI analyses the image to estimate calories and macros. The more centred and well-lit the photo, the more accurate the result.",
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
    q: "Why isn't Apple Health syncing?",
    a: 'Go to Settings → Health Connections and make sure the toggle is enabled. Also check iPhone Settings → Health → Data Access & Devices → Lock and grant the required permissions.',
  },
  {
    q: 'I lost my progress after reinstalling. Can I recover it?',
    a: 'Your data is tied to your account, not your device. Sign back in with the same account (Apple, Google, or email) and your history will be restored automatically.',
  },
];

export default function Support() {
  return (
    <>
      <style>{`
        .doc-back { color: #444; font-size: 13px; transition: color 0.15s; }
        .doc-back:hover { color: #888; }
        .doc-email { color: #ededed; font-weight: 700; transition: color 0.15s; }
        .doc-email:hover { color: #fff; text-decoration: underline; text-underline-offset: 3px; }
        .faq-card {
          background: #111; border: 1px solid #1f1f1f;
          border-radius: 14px; padding: 24px 28px;
          transition: background 0.2s, border-color 0.2s;
        }
        .faq-card:hover { background: #161616; border-color: #2a2a2a; }
        .contact-card {
          background: #111; border: 1px solid #252525;
          border-radius: 16px; padding: 32px;
          margin-bottom: 64px;
        }
      `}</style>

      <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

        {/* Header */}
        <header
          style={{
            borderBottom: '1px solid #1a1a1a',
            padding: '0 40px',
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a href="/" style={{ fontSize: 18, fontWeight: 900, letterSpacing: '-0.04em', color: '#ededed' }}>
            Lock
          </a>
          <a href="/" className="doc-back">← Back</a>
        </header>

        {/* Content */}
        <main style={{ maxWidth: 680, margin: '0 auto', padding: '72px 32px 100px' }}>
          <p
            style={{
              fontSize: 11, fontWeight: 700, color: '#444',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16,
            }}
          >
            Help
          </p>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#ededed',
              marginBottom: 12,
            }}
          >
            Support
          </h1>
          <p style={{ fontSize: 16, color: '#555', marginBottom: 56, lineHeight: 1.6 }}>
            We&apos;re here to help. Reach out any time.
          </p>

          {/* Contact card */}
          <div className="contact-card">
            <div style={{ fontSize: 26, marginBottom: 14 }}>✉️</div>
            <h2
              style={{
                fontSize: 16, fontWeight: 800, color: '#ededed',
                letterSpacing: '-0.02em', marginBottom: 10,
              }}
            >
              Email Support
            </h2>
            <p style={{ fontSize: 15, color: '#666', lineHeight: 1.7 }}>
              Send us an email at{' '}
              <a href="mailto:support@jkeroro.com" className="doc-email">
                support@jkeroro.com
              </a>{' '}
              and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {/* FAQ */}
          <p
            style={{
              fontSize: 11, fontWeight: 700, color: '#444',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24,
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#ededed',
              marginBottom: 32,
            }}
          >
            Frequently asked questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-card">
                <h3
                  style={{
                    fontSize: 14, fontWeight: 800,
                    color: '#ededed', letterSpacing: '-0.01em',
                    marginBottom: 8,
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #1a1a1a', padding: '24px 40px' }}>
          <div
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              maxWidth: 680, margin: '0 auto', flexWrap: 'wrap', gap: 12,
            }}
          >
            <a href="/" className="doc-back">← Lock</a>
            <div style={{ display: 'flex', gap: 24 }}>
              <a href="/privacy" className="doc-back">Privacy Policy</a>
              <a href="https://jkeroro.com" target="_blank" rel="noopener noreferrer" className="doc-back">
                Jkeroro.com
              </a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
