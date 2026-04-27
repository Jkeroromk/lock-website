import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Lock — AI Nutrition Tracking',
  description: 'Snap a photo. Get instant calorie and macro breakdowns powered by AI. Track with friends. Stay consistent.',
  openGraph: {
    title: 'Lock — AI Nutrition Tracking',
    description: 'Snap a photo. Get instant calorie and macro breakdowns. Track with friends.',
    url: 'https://lock.jkeroro.com',
    siteName: 'Lock',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        {/* Anti-flash: apply saved theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('lock-theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}})();` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
