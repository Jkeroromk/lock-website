export default function PrivacyPolicy() {
  const s = {
    page: { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '60px 24px' } as const,
    inner: { maxWidth: 720, margin: '0 auto' } as const,
    h1: { fontSize: 36, fontWeight: 900, letterSpacing: '-1px', marginBottom: 8 } as const,
    updated: { fontSize: 13, color: '#555', marginBottom: 48 } as const,
    h2: { fontSize: 18, fontWeight: 800, marginTop: 40, marginBottom: 12 } as const,
    p: { fontSize: 15, color: '#888', lineHeight: 1.8, marginBottom: 16 } as const,
    a: { color: '#fff' } as const,
  };

  return (
    <main style={s.page}>
      <div style={s.inner}>
        <a href="/" style={{ color: '#555', textDecoration: 'none', fontSize: 13 }}>← Lock</a>
        <h1 style={{ ...s.h1, marginTop: 32 }}>Privacy Policy</h1>
        <p style={s.updated}>Last updated: January 2025</p>

        <p style={s.p}>Lock (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use the Lock mobile application.</p>

        <h2 style={s.h2}>Information We Collect</h2>
        <p style={s.p}><strong style={{ color: '#fff' }}>Account information:</strong> When you create an account, we collect your name, email address, and profile details (height, weight, age, goal) to personalise your experience.</p>
        <p style={s.p}><strong style={{ color: '#fff' }}>Meal data:</strong> Photos you submit for calorie analysis and meal logs you create. Photos are processed by our AI system and are not stored permanently on our servers.</p>
        <p style={s.p}><strong style={{ color: '#fff' }}>Health data:</strong> With your permission, we access step count and active energy from Apple Health. This data is used solely to display your activity in-app and is never sold or shared with third parties.</p>
        <p style={s.p}><strong style={{ color: '#fff' }}>Usage data:</strong> Basic analytics such as feature usage and crash reports to improve the app.</p>

        <h2 style={s.h2}>How We Use Your Information</h2>
        <p style={s.p}>We use your information to provide and improve the Lock service, personalise your calorie goals and recommendations, enable social features (leaderboards, friend activity, Moments), send optional push notifications (meal reminders), and process in-app purchases via RevenueCat.</p>

        <h2 style={s.h2}>Data Sharing</h2>
        <p style={s.p}>We do not sell your personal data. We share data only with service providers necessary to operate the app: Clerk (authentication), Vercel (hosting), OpenAI (food image analysis), RevenueCat (subscription management), and Prisma/Supabase (database). All providers are bound by data processing agreements.</p>

        <h2 style={s.h2}>Social Features</h2>
        <p style={s.p}>When you use social features (leaderboard, Moments, friend activity), your display name, avatar, calorie totals, and streak count are visible to your friends within the app. You control your friend list and can remove friends at any time.</p>

        <h2 style={s.h2}>Data Retention & Deletion</h2>
        <p style={s.p}>You may delete your account at any time from Settings → Account Security → Delete Account. This permanently removes all your data from our servers within 30 days. You may also request data deletion by contacting us at <a href="mailto:support@jkeroro.com" style={s.a}>support@jkeroro.com</a>.</p>

        <h2 style={s.h2}>Children&apos;s Privacy</h2>
        <p style={s.p}>Lock is not directed at children under 13. We do not knowingly collect personal information from children under 13.</p>

        <h2 style={s.h2}>Changes to This Policy</h2>
        <p style={s.p}>We may update this policy occasionally. We will notify you of significant changes via the app or email. Continued use of the app after changes constitutes acceptance of the updated policy.</p>

        <h2 style={s.h2}>Contact</h2>
        <p style={s.p}>Questions about this privacy policy? Contact us at <a href="mailto:support@jkeroro.com" style={s.a}>support@jkeroro.com</a>.</p>

        <div style={{ borderTop: '1px solid #1a1a1a', marginTop: 60, paddingTop: 24 }}>
          <a href="/" style={{ color: '#555', textDecoration: 'none', fontSize: 13 }}>← Back to Lock</a>
        </div>
      </div>
    </main>
  );
}
