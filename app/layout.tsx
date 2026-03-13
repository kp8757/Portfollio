import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kapleshwar | AI Developer Portfolio",
  description: "Premium futuristic portfolio for Kapleshwar, Computer Science student and AI Developer"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
