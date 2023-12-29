import localFont from "next/font/local";
import { Varela } from "next/font/google";

export const archia = localFont({
  src: "./assets/fonts/archia-regular.woff2",
  variable: "--font-archia",
  preload: false,
});

export const varela = Varela({
  subsets: ["latin"],
  weight: "400",
  preload: false,
});
