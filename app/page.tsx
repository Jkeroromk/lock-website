import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from './components/ThemeToggle';

const APPSTORE_URL = 'https://apps.apple.com/app/id6762630080';

const features = [
  { icon: '📸', title: 'Snap to Track', desc: 'Point your camera at any meal and get instant AI calorie analysis. No manual logging.' },
  { icon: '🤝', title: 'Social Accountability', desc: 'Leaderboards, challenges, and a friends feed keep you motivated to stay consistent.' },
  { icon: '🧠', title: 'Smart Insights', desc: 'Weekly AI summaries analyse your patterns and give personalised nutrition guidance.' },
  { icon: '🔥', title: 'Streak System', desc: 'Build daily logging habits with streaks. Compete with friends on the leaderboard.' },
  { icon: '🍽️', title: 'Moments', desc: 'Share meals and progress with your friends in a social feed. Like and comment.' },
  { icon: '🍎', title: 'Apple Health Sync', desc: 'Steps, calories, and workouts sync automatically with Apple Health.' },
];

const stats = [
  { value: '1,000+', label: 'Active users' },
  { value: 'AI', label: 'Photo recognition' },
  { value: 'Free', label: 'To get started' },
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
    <div className="min-h-screen bg-background">

      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-[60px] bg-background/80 backdrop-blur-xl border-b border-border/50 transition-colors">
        <a href="/" className="text-[18px] font-black tracking-[-0.04em] text-foreground">
          Lock
        </a>
        <div className="hidden md:flex items-center gap-7">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support</a>
          <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="https://jkeroro.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Jkeroro.com</a>
        </div>
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Button asChild size="sm">
            <a href={APPSTORE_URL}>Download</a>
          </Button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center text-center px-6 pt-44 pb-24 overflow-hidden">
        {/* Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px]"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(120,80,255,0.1) 0%, transparent 70%)' }}
        />

        <Badge className="mb-9 animate-pulse-slow">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-[pulse_2.5s_ease-in-out_infinite]" />
          AI-Powered Nutrition Tracking
        </Badge>

        <h1 className="text-[clamp(56px,9vw,108px)] font-black leading-[0.95] tracking-[-0.04em] mb-7 text-foreground">
          Lock in.<br />
          <span className="text-muted-foreground/30">Every meal.</span>
        </h1>

        <p className="text-[clamp(16px,2vw,19px)] text-muted-foreground max-w-[500px] leading-relaxed mb-12">
          Snap a photo. Get instant calorie and macro breakdowns powered by AI.
          Track with friends. Stay consistent.
        </p>

        <Button asChild size="lg">
          <a href={APPSTORE_URL}>
            <AppleIcon />
            Download on the App Store
          </a>
        </Button>
      </section>

      {/* ── Stats ── */}
      <div className="border-y border-border py-10 px-6">
        <div className="flex justify-center items-center max-w-[560px] mx-auto">
          {stats.map((s, i) => (
            <React.Fragment key={s.label}>
              {i > 0 && <div className="w-px h-10 bg-border mx-12 shrink-0 hidden sm:block" />}
              <div className="text-center px-2">
                <div className="text-2xl font-extrabold tracking-[-0.03em] text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Features ── */}
      <section id="features" className="py-24 px-6 max-w-[1080px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold text-muted-foreground tracking-[0.12em] uppercase mb-3.5">Features</p>
          <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-[-0.03em] text-foreground">
            Everything you need to stay on track
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <Card key={f.title} className="hover:bg-accent hover:-translate-y-0.5 hover:border-border/80 cursor-default">
              <CardContent className="p-8">
                <div className="text-[28px] mb-4">{f.icon}</div>
                <h3 className="text-[15px] font-extrabold tracking-[-0.02em] text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative text-center px-6 py-24 border-t border-border overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(120,80,255,0.07) 0%, transparent 70%)' }}
        />
        <p className="text-[11px] font-bold text-muted-foreground tracking-[0.12em] uppercase mb-5">Get started</p>
        <h2 className="text-[clamp(36px,6vw,72px)] font-black tracking-[-0.04em] text-foreground mb-5">
          Ready to lock in?
        </h2>
        <p className="text-[17px] text-muted-foreground mb-12 leading-relaxed">
          Free to download. Start tracking in seconds.
        </p>
        <Button asChild size="lg">
          <a href={APPSTORE_URL}>
            <AppleIcon />
            Download on the App Store
          </a>
        </Button>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border px-10 py-7">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1080px] mx-auto gap-4">
          <a href="/" className="text-base font-black tracking-[-0.04em] text-foreground">Lock</a>
          <div className="flex gap-6">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support</a>
            <a href="https://jkeroro.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Jkeroro.com</a>
          </div>
          <span className="text-sm text-muted-foreground/50">© 2026 Lock</span>
        </div>
      </footer>

    </div>
  );
}
