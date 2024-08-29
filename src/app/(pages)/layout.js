import { Inter } from "next/font/google";
import "@/app/styles/global.css";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://philhenning.co.uk'),
  title: "philhenning.co.uk",
  description: "portfolio",
  openGraph:{
    title: "philhenning.co.uk",
    description: "portfolio",
    type: "website",
    images: [
              {
                url: "/Projects/philhenning_screenshot.png",
                width: 600,
                height: 302,
              },
            ],      
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
