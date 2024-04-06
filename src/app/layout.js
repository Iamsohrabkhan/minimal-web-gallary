import "./globals.css";
import { Navbar } from "../components/navbar";
import ResponsiveIndicators from "@/components/TailwindIndicator";
import Footer from "./home/footer";
// import { ThemeProvider } from "@/components/ui/theme";
export const metadata = {
  title: "Minimal Web Gallary",
  description: "Enhance your online presence with innovative website design and engaging animations. Boost your brand's visibility and interaction with our SEO-friendly options. Expand your reach and improve search engine rankings with our skillfully designed websites. Start now!",

    twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://meganlacefield.vercel.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ResponsiveIndicators />
        {children}
      </body>
    </html>
  );
}
