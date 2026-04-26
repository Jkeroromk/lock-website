import type { Metadata } from 'next';

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
    <html lang="en">
      <head>
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          html { scroll-behavior: smooth; }
          body {
            background: #0a0a0a;
            color: #ededed;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          a { color: inherit; text-decoration: none; }
          ::selection { background: rgba(255,255,255,0.15); }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
