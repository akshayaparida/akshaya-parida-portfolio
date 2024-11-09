// src/app/layout.tsx
import { Inter, Texturina} from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const texturina = Texturina({
  subsets: ["latin"],
  variable: "--font-texturina",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});



export const metadata = {
  title: {
    template: "Akshaya Parida Portfolio Created with Three.js and Tailwind CSS",
    default: " Akshaya Parida Portfolio",
  },
  description:
    "Portfolio designed by Akshaya Parida with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* You can add additional head elements, like meta tags, here */}
      </head>
      <body
        className={clsx(
          "bg-background text-foreground", // These should be applied globally
          inter.variable, // Default font
          texturina.variable, // Custom font for texturina
          "font-inter" // Apply a base font
        )}
      >
        {children}
        <div id="my-modal" />
      </body>
    </html>
  );
}
