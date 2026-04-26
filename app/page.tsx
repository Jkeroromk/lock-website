import React from 'react';

const APPSTORE_URL = 'https://apps.apple.com/app/id6762630080';

const features = [
  {
    icon: '📸',
    title: 'Snap to Track',
    desc: 'Point your camera at any meal and get instant AI calorie analysis. No manual logging.',
  },
  {
    icon: '🤝',
    title: 'Social Accountability',
    desc: 'Leaderboards, challenges, and a friends feed keep you motivated to stay consistent.',
  },
  {
    icon: '🧠',
    title: 'Smart Insights',
    desc: 'Weekly AI summaries analyse your patterns and give personalised nutrition guidance.',
  },
  {
    icon: '🔥',
    title: 'Streak System',
    desc: 'Build daily logging habits with streaks. Compete with friends on the leaderboard.',
  },
  {
    icon: '🍽️',
    title: 'Moments',
    desc: 'Share meals and progress with your friends in a social feed. Like and comment.',
  },
  {
    icon: '🍎',
    title: 'Apple Health Sync',
    desc: 'Steps, calories, and workouts sync automatically with Apple Health.',
  },
];

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.25; }
        }

        .l-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px; height: 60px;
          background: rgba(10,10,10,0.75);
          backdrop-filter: saturate(180%) blur(24px);
          -webkit-backdrop-filter: saturate(180%) blur(24px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .l-navlink { color: #666; font-size: 14px; transition: color 0.15s; }
        .l-navlink:hover { color: #ededed; }

        .l-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: #ededed; color: #0a0a0a;
          border-radius: 100px; font-weight: 700; cursor: pointer;
          transition: background 0.15s, transform 0.15s, box-shadow 0.15s;
          white-space: nowrap;
        }
        .l-btn:hover {
          background: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 8px 32px rgba(255,255,255,0.1);
        }

        .l-card {
          background: #111111; border: 1px solid #1f1f1f;
          border-radius: 16px; padding: 32px 28px;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .l-card:hover {
          background: #161616;
          border-color: #2d2d2d;
          transform: translateY(-2px);
        }

        .l-pulse { animation: pulse 2.5s ease-in-out infinite; }

        .l-eyebrow {
          font-size: 11px; font-weight: 700; color: #444;
          letter-spacing: 0.12em; text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .l-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .l-nav { padding: 0 20px; }
          .l-nav-desktop { display: none !important; }
          .l-hero { padding: 140px 20px 80px !important; }
          .l-grid { grid-template-columns: 1fr !important; }
          .l-stats-sep { display: none; }
          .l-footer-inner { flex-direction: column !important; align-items: center !important; gap: 16px !important; }
        }
      `}</style>

      <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

        {/* Nav */}
        <nav className="l-nav">
          <a href="/" style={{ fontSize: 18, fontWeight: 900, letterSpacing: '-0.04em', color: '#ededed' }}>
            Lock
          </a>
          <div className="l-nav-desktop" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <a href="#features" className="l-navlink">Features</a>
            <a href="/support" className="l-navlink">Support</a>
            <a href="/privacy" className="l-navlink">Privacy</a>
            <a href="https://jkeroro.com" target="_blank" rel="noopener noreferrer" className="l-navlink">
              Jkeroro.com
            </a>
          </div>
          <a href={APPSTORE_URL} className="l-btn" style={{ fontSize: 13, padding: '8px 18px' }}>
            Download
          </a>
        </nav>

        {/* Hero */}
        <section
          className="l-hero"
          style={{
            position: 'relative',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            textAlign: 'center',
            padding: '180px 24px 100px',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', top: 0, left: '50%',
              transform: 'translateX(-50%)',
              width: 900, height: 600,
              background: 'radial-gradient(ellipse at 50% 0%, rgba(120,80,255,0.1) 0%, transparent 70%)',
              pointerEvents: 'none', userSelect: 'none',
            }}
          />

          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#111', border: '1px solid #252525',
              borderRadius: 100, padding: '6px 16px',
              fontSize: 12, fontWeight: 600, color: '#888',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              marginBottom: 36, position: 'relative',
            }}
          >
            <span
              className="l-pulse"
              style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#4ade80', display: 'block', flexShrink: 0,
              }}
            />
            AI-Powered Nutrition Tracking
          </div>

          <h1
            style={{
              fontSize: 'clamp(56px, 9vw, 108px)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              marginBottom: 28,
              color: '#ededed',
            }}
          >
            Lock in.<br />
            <span style={{ color: '#2e2e2e' }}>Every meal.</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: '#666',
              maxWidth: 500, lineHeight: 1.65,
              marginBottom: 52,
            }}
          >
            Snap a photo. Get instant calorie and macro breakdowns powered by AI.
            Track with friends. Stay consistent.
          </p>

          <a href={APPSTORE_URL} className="l-btn" style={{ fontSize: 16, padding: '15px 32px' }}>
            <AppleIcon />
            Download on the App Store
          </a>
        </section>

        {/* Stats */}
        <div style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', padding: '40px 24px' }}>
          <div
            style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              maxWidth: 560, margin: '0 auto',
            }}
          >
            {([
              { value: '1,000+', label: 'Active users' },
              { value: 'AI', label: 'Photo recognition' },
              { value: 'Free', label: 'To get started' },
            ] as const).map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && (
                  <div
                    className="l-stats-sep"
                    style={{ width: 1, height: 40, background: '#1f1f1f', margin: '0 48px', flexShrink: 0 }}
                  />
                )}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: '#ededed', letterSpacing: '-0.03em' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 13, color: '#555', marginTop: 4 }}>{s.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Features */}
        <section id="features" style={{ padding: '100px 24px', maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="l-eyebrow" style={{ marginBottom: 14 }}>Features</p>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: '#ededed',
              }}
            >
              Everything you need to stay on track
            </h2>
          </div>

          <div
            className="l-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
          >
            {features.map((f) => (
              <div key={f.title} className="l-card">
                <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
                <h3
                  style={{
                    fontSize: 15, fontWeight: 800,
                    color: '#ededed', letterSpacing: '-0.02em',
                    marginBottom: 8,
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            position: 'relative',
            textAlign: 'center',
            padding: '100px 24px 120px',
            borderTop: '1px solid #1a1a1a',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', bottom: 0, left: '50%',
              transform: 'translateX(-50%)',
              width: 700, height: 400,
              background: 'radial-gradient(ellipse at 50% 100%, rgba(120,80,255,0.07) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <p className="l-eyebrow" style={{ marginBottom: 20 }}>Get started</p>
          <h2
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#ededed',
              marginBottom: 20,
            }}
          >
            Ready to lock in?
          </h2>
          <p style={{ color: '#555', fontSize: 17, marginBottom: 52, lineHeight: 1.6 }}>
            Free to download. Start tracking in seconds.
          </p>
          <a href={APPSTORE_URL} className="l-btn" style={{ fontSize: 16, padding: '15px 32px' }}>
            <AppleIcon />
            Download on the App Store
          </a>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #1a1a1a', padding: '28px 40px' }}>
          <div
            className="l-footer-inner"
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              maxWidth: 1080, margin: '0 auto',
            }}
          >
            <a href="/" style={{ fontSize: 16, fontWeight: 900, color: '#ededed', letterSpacing: '-0.04em' }}>
              Lock
            </a>
            <div style={{ display: 'flex', gap: 24 }}>
              <a href="/privacy" className="l-navlink" style={{ fontSize: 13, color: '#444' }}>Privacy Policy</a>
              <a href="/support" className="l-navlink" style={{ fontSize: 13, color: '#444' }}>Support</a>
              <a
                href="https://jkeroro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="l-navlink"
                style={{ fontSize: 13, color: '#444' }}
              >
                Jkeroro.com
              </a>
            </div>
            <span style={{ fontSize: 13, color: '#333' }}>© 2026 Lock</span>
          </div>
        </footer>

      </div>
    </>
  );
}
