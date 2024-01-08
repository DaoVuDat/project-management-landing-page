import type { Metadata, Viewport } from "next";
import "./globals.css";
import { archia } from "@/app/font";

export const viewport: Viewport = {
  minimumScale: 1,
};

export const metadata: Metadata = {
  title: "TrackPro | Project Management Tracking",
  description:
    "Elevate your project management with TrackPro, your go-to solution for comprehensive project tracking. Register, monitor progress, and analyze project performance seamlessly. Stay informed, in control, and drive successful project outcomes. Explore intuitive tools designed for efficient project tracking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${archia.className} antialiased scroll-smooth bg-background-color relative w-full `}
      >
        {children}
      </body>
    </html>
  );
}
