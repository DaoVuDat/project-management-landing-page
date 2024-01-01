import localFont from "next/font/local";
import { Varela } from "next/font/google";
import { Lato } from "next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false,
});

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
