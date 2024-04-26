'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StyledComponentsRegistry from '@/lib/registry';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  );
}
