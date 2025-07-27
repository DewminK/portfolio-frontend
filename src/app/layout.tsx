import './globals.css'; 

export const metadata = {
  title: 'Dewmin Portfolio',
  description: 'My personal portfolio site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
        {children}
      </body>
    </html>
  );
}
