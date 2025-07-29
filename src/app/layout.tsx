import './globals.css'; 
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Dewmin Portfolio',
  description: 'My Personal Portfolio Site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
