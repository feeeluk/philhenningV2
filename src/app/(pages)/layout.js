import { Inter } from "next/font/google";
import "@/app/styles/global.css";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Philhenning.co.uk",
  description: "Portfolio",
  openGraph:{
    title: "Philhenning.co.uk",
    description: "Portfolio",
    type: "website",
    image: ["/Projects/philhenning_screenshot.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="PageLayout">
          <NavBar />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
