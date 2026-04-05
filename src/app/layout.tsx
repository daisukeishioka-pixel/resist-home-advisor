import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RESIST HOME ADVISOR | トレーナーが選ぶホームケア",
  description: "あなたの悩みに合わせて、RESISTトレーナーが厳選したストレッチ・トレーニング・レシピ動画をお届けします。",
  openGraph: {
    title: "RESIST HOME ADVISOR",
    description: "トレーナーが選ぶホームケア動画",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
