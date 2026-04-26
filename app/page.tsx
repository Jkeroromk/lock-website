export default function Home() {
  return (
    <main style={{ margin: 0, padding: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid #1a1a1a' }}>
        <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.5px' }}>Lock</span>
        <div style={{ display: 'flex', gap: 32, fontSize: 14, color: '#888' }}>
          <a href="#features" style={{ color: '#888', textDecoration: 'none' }}>Features</a>
          <a href="/support" style={{ color: '#888', textDecoration: 'none' }}>Support</a>
          <a href="/privacy" style={{ color: '#888', textDecoration: 'none' }}>Privacy</a>
          <a href="https://jkeroro.com" target="_blank" rel="noopener noreferrer" style={{ color: '#888', textDecoration: 'none' }}>Made by Jkeroro</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '100px 24px 80px' }}>
        <div style={{ display: 'inline-block', backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 40, padding: '6px 18px', fontSize: 12, fontWeight: 700, color: '#888', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 32 }}>
          AI-Powered Nutrition Tracking
        </div>
        <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-3px', margin: '0 0 24px' }}>
          Lock in.<br />
          <span style={{ color: '#555' }}>Every meal.</span>
        </h1>
        <p style={{ fontSize: 18, color: '#666', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}>
          Snap a photo. Get instant calorie and macro breakdowns powered by AI. Track with friends. Stay consistent.
        </p>
        <a
          href="https://apps.apple.com/app/id6762630080"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, backgroundColor: '#fff', color: '#000', borderRadius: 16, padding: '14px 28px', fontWeight: 800, fontSize: 15, textDecoration: 'none' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          Download on App Store
        </a>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '80px 24px', maxWidth: 1000, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#555', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 64 }}>
          Everything you need
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2 }}>
          {[
            { icon: '📸', title: 'Snap to Track', desc: 'Point your camera at any meal and get instant AI calorie analysis. No manual logging.' },
            { icon: '🤝', title: 'Social Accountability', desc: 'Leaderboards, challenges, and a friends feed keep you motivated to stay consistent.' },
            { icon: '🧠', title: 'Smart Insights', desc: 'Weekly AI summaries analyse your patterns and give personalised nutrition guidance.' },
            { icon: '🔥', title: 'Streak System', desc: 'Build daily logging habits with streaks. Compete with friends on the leaderboard.' },
            { icon: '🍽️', title: 'Moments', desc: 'Share meals and progress with your friends in a social feed. Like and comment.' },
            { icon: '🍎', title: 'Apple Health Sync', desc: 'Steps, calories, and workouts sync automatically with Apple Health.' },
          ].map((f) => (
            <div key={f.title} style={{ backgroundColor: '#111', border: '1px solid #1a1a1a', padding: '36px 32px' }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 10, color: '#fff' }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center', padding: '80px 24px 100px', borderTop: '1px solid #1a1a1a' }}>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, letterSpacing: '-2px', marginBottom: 16 }}>
          Ready to lock in?
        </h2>
        <p style={{ color: '#555', fontSize: 16, marginBottom: 40 }}>Free to download. Start tracking in seconds.</p>
        <a
          href="https://apps.apple.com/app/id6762630080"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, backgroundColor: '#fff', color: '#000', borderRadius: 16, padding: '14px 28px', fontWeight: 800, fontSize: 15, textDecoration: 'none' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          Download on App Store
        </a>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #1a1a1a', padding: '32px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <span style={{ fontSize: 14, fontWeight: 900 }}>Lock</span>
        <div style={{ display: 'flex', gap: 24, fontSize: 13, color: '#555' }}>
          <a href="/privacy" style={{ color: '#555', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/support" style={{ color: '#555', textDecoration: 'none' }}>Support</a>
          <a href="https://jkeroro.com" target="_blank" rel="noopener noreferrer" style={{ color: '#555', textDecoration: 'none' }}>Jkeroro.com</a>
        </div>
        <span style={{ fontSize: 13, color: '#333' }}>© 2025 Lock. All rights reserved.</span>
      </footer>

    </main>
  );
}
