import { ThemeToggle } from '../components/ThemeToggle';

const sections = [
  {
    title: 'Information We Collect',
    content: (
      <>
        <p><strong className="text-foreground font-bold">Account information:</strong> When you create an account, we collect your name, email address, and profile details (height, weight, age, goal) to personalise your experience.</p>
        <p><strong className="text-foreground font-bold">Meal data:</strong> Photos you submit for calorie analysis and meal logs you create. Photos are processed by our AI system and are not stored permanently on our servers.</p>
        <p><strong className="text-foreground font-bold">Health data:</strong> With your permission, we access step count and active energy from Apple Health. This data is used solely to display your activity in-app and is never sold or shared with third parties.</p>
        <p><strong className="text-foreground font-bold">Usage data:</strong> Basic analytics such as feature usage and crash reports to improve the app.</p>
      </>
    ),
  },
  {
    title: 'How We Use Your Information',
    content: <p>We use your information to provide and improve the Lock service, personalise your calorie goals and recommendations, enable social features (leaderboards, friend activity, Moments), send optional push notifications (meal reminders), and process in-app purchases via RevenueCat.</p>,
  },
  {
    title: 'Data Sharing',
    content: <p>We do not sell your personal data. We share data only with service providers necessary to operate the app: Clerk (authentication), Vercel (hosting), OpenAI (food image analysis), RevenueCat (subscription management), and Prisma/Supabase (database). All providers are bound by data processing agreements.</p>,
  },
  {
    title: 'Social Features',
    content: <p>When you use social features (leaderboard, Moments, friend activity), your display name, avatar, calorie totals, and streak count are visible to your friends within the app. You control your friend list and can remove friends at any time.</p>,
  },
  {
    title: 'Data Retention & Deletion',
    content: <p>You may delete your account at any time from <span className="text-foreground">Settings → Account Security → Delete Account</span>. This permanently removes all your data within 30 days. You may also request deletion at <a href="mailto:support@jkeroro.com" className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">support@jkeroro.com</a>.</p>,
  },
  {
    title: "Children's Privacy",
    content: <p>Lock is not directed at children under 13. We do not knowingly collect personal information from children under 13.</p>,
  },
  {
    title: 'Changes to This Policy',
    content: <p>We may update this policy occasionally. We will notify you of significant changes via the app or email. Continued use of the app after changes constitutes acceptance of the updated policy.</p>,
  },
  {
    title: 'Contact',
    content: <p>Questions? Contact us at <a href="mailto:support@jkeroro.com" className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">support@jkeroro.com</a>.</p>,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">

      <header className="border-b border-border px-10 h-[60px] flex items-center justify-between">
        <a href="/" className="text-[18px] font-black tracking-[-0.04em] text-foreground">Lock</a>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">← Back</a>
        </div>
      </header>

      <main className="max-w-[720px] mx-auto px-8 py-[72px] pb-24">
        <p className="text-[11px] font-bold text-muted-foreground tracking-[0.12em] uppercase mb-4">Legal</p>
        <h1 className="text-[clamp(32px,5vw,48px)] font-black tracking-[-0.03em] text-foreground mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground/60 mb-16">Last updated: January 2025</p>

        <p className="text-[15px] text-muted-foreground leading-[1.8] mb-12">
          Lock (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
          This policy explains how we collect, use, and safeguard your information when you use the Lock mobile application.
        </p>

        {sections.map((s) => (
          <div key={s.title} className="border-t border-border py-9">
            <h2 className="text-[15px] font-extrabold tracking-[-0.01em] text-foreground mb-4">{s.title}</h2>
            <div className="text-[15px] text-muted-foreground leading-[1.8] space-y-3">{s.content}</div>
          </div>
        ))}
      </main>

      <footer className="border-t border-border px-10 py-6">
        <div className="flex justify-between items-center max-w-[720px] mx-auto flex-wrap gap-3">
          <a href="/" className="text-sm text-muted-foreground/60 hover:text-muted-foreground transition-colors">← Lock</a>
          <div className="flex gap-6">
            <a href="/support" className="text-sm text-muted-foreground/60 hover:text-muted-foreground transition-colors">Support</a>
            <a href="https://jkeroro.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground/60 hover:text-muted-foreground transition-colors">Jkeroro.com</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
