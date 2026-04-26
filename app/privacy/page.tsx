export default function PrivacyPolicy() {
  return (
    <>
      <style>{`
        .doc-back { color: #444; font-size: 13px; transition: color 0.15s; }
        .doc-back:hover { color: #888; }
        .doc-email { color: #ededed; transition: color 0.15s; }
        .doc-email:hover { color: #fff; text-decoration: underline; text-underline-offset: 3px; }
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
        <main style={{ maxWidth: 720, margin: '0 auto', padding: '72px 32px 100px' }}>
          <p
            style={{
              fontSize: 11, fontWeight: 700, color: '#444',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16,
            }}
          >
            Legal
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
            Privacy Policy
          </h1>
          <p style={{ fontSize: 13, color: '#444', marginBottom: 64 }}>Last updated: January 2025</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8, marginBottom: 48 }}>
              Lock (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
              This policy explains how we collect, use, and safeguard your information when you use the Lock mobile application.
            </p>

            {[
              {
                title: 'Information We Collect',
                content: (
                  <>
                    <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8, marginBottom: 12 }}>
                      <strong style={{ color: '#bbb', fontWeight: 700 }}>Account information:</strong>{' '}
                      When you create an account, we collect your name, email address, and profile details
                      (height, weight, age, goal) to personalise your experience.
                    </p>
                    <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8, marginBottom: 12 }}>
                      <strong style={{ color: '#bbb', fontWeight: 700 }}>Meal data:</strong>{' '}
                      Photos you submit for calorie analysis and meal logs you create. Photos are processed
                      by our AI system and are not stored permanently on our servers.
                    </p>
                    <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8, marginBottom: 12 }}>
                      <strong style={{ color: '#bbb', fontWeight: 700 }}>Health data:</strong>{' '}
                      With your permission, we access step count and active energy from Apple Health.
                      This data is used solely to display your activity in-app and is never sold or shared
                      with third parties.
                    </p>
                    <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8 }}>
                      <strong style={{ color: '#bbb', fontWeight: 700 }}>Usage data:</strong>{' '}
                      Basic analytics such as feature usage and crash reports to improve the app.
                    </p>
                  </>
                ),
              },
              {
                title: 'How We Use Your Information',
                content: (
                  <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8 }}>
                    We use your information to provide and improve the Lock service, personalise your calorie
                    goals and recommendations, enable social features (leaderboards, friend activity, Moments),
                    send optional push notifications (meal reminders), and process in-app purchases via RevenueCat.
                  </p>
                ),
              },
              {
                title: 'Data Sharing',
                content: (
                  <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8 }}>
                    We do not sell your personal data. We share data only with service providers necessary to
                    operate the app: Clerk (authentication), Vercel (hosting), OpenAI (food image analysis),
                    RevenueCat (subscription management), and Prisma/Supabase (database). All providers are
                    bound by data processing agreements.
                  </p>
                ),
              },
              {
                title: 'Social Features',
                content: (
                  <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8 }}>
                    When you use social features (leaderboard, Moments, friend activity), your display name,
                    avatar, calorie totals, and streak count are visible to your friends within the app.
                    You control your friend list and can remove friends at any time.
                  </p>
                ),
              },
              {
                title: 'Data Retention & Deletion',
                content: (
                  <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8 }}>
                    You may delete your account at any time from{' '}
                    <span style={{ color: '#888' }}>Settings → Account Security → Delete Account</span>.
                    This permanently removes all your data from our servers within 30 days. You may also
                    request data deletion by contacting us at{' '}
                    <a href="mailto:support@jkeroro.com" className="doc-email">support@jkeroro.com</a>.
                  </p>
                ),
              },
              {
                title: "Children's Privacy",
                content: (
                  <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8 }}>
                    Lock is not directed at children under 13. We do not knowingly collect personal
                    information from children under 13.
                  </p>
                ),
              },
              {
                title: 'Changes to This Policy',
                content: (
                  <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8 }}>
                    We may update this policy occasionally. We will notify you of significant changes
                    via the app or email. Continued use of the app after changes constitutes acceptance
                    of the updated policy.
                  </p>
                ),
              },
              {
                title: 'Contact',
                content: (
                  <p style={{ fontSize: 15, color: '#777', lineHeight: 1.8 }}>
                    Questions about this privacy policy? Contact us at{' '}
                    <a href="mailto:support@jkeroro.com" className="doc-email">support@jkeroro.com</a>.
                  </p>
                ),
              },
            ].map((section) => (
              <div
                key={section.title}
                style={{ borderTop: '1px solid #1a1a1a', padding: '36px 0' }}
              >
                <h2
                  style={{
                    fontSize: 15, fontWeight: 800,
                    color: '#ededed', letterSpacing: '-0.01em',
                    marginBottom: 16,
                  }}
                >
                  {section.title}
                </h2>
                {section.content}
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #1a1a1a', padding: '24px 40px' }}>
          <div
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              maxWidth: 720, margin: '0 auto', flexWrap: 'wrap', gap: 12,
            }}
          >
            <a href="/" className="doc-back">← Lock</a>
            <div style={{ display: 'flex', gap: 24 }}>
              <a href="/support" className="doc-back">Support</a>
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
