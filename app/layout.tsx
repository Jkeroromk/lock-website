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
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
