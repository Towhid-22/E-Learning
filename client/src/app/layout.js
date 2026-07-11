import { Poppins, Nunito_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const nunito_sans = Nunito_Sans({
  variable: "--font-nunito_sans",
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Learning",
  description: "E-Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${nunito_sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
