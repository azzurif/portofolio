import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Fairuzizuan Azzuri | Portofolio",
  description: "Portofolio of Fairuzizuan Azzuri",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-gray-200 max-w-full`}
      >
        <Sidebar />
        {children}

        <footer className="text-center bg-linear-to-r from-sky-950  to-sky-800 text-gray-100 py-10 font-medium">
            @2025 - Fairuzizuan Azzuri
        </footer>
      </body>
    </html>
  );
}
