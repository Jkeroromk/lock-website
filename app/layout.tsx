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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){
            var stored = localStorage.getItem('lock-dark');
            var dark = stored === null ? true : stored === 'true';
            if (dark) {
              document.documentElement.classList.add('dark');
              document.body && document.body.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
              document.body && document.body.classList.remove('dark');
            }
          })();`
        }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
