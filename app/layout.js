import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./__components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Filesure assignment",
  description: "A assignment from Filesure India private limited for frontend development role",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar  />
        {children}
      </body>
    </html>
  );
}
