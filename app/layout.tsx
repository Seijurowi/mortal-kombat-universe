import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mortal Kombat Universe",
  description: "A source-aware Mortal Kombat knowledge graph and interactive encyclopedia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
