import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const nunito_sans = Nunito_Sans({
  variable: "--font-nunito_Sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Learning",
  description: "E-Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito_sans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-poppins">{children}</body>
    </html>
  );
}
