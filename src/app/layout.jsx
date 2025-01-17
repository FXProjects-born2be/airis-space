import localFont from "next/font/local";
import "@/styles/base.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const clash = localFont({
  src: [
    {
      path: "./fonts/ClashGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ClashGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap", // Improves font loading behavior
});

export const metadata = {
  title: "AI Call Center Automation | Airis",
  description:
    "Discover how AI-powered call center solutions streamline operations and boost lead engagement. Explore our approach for efficient outreach.",
  openGraph: {
    title: "AI Call Center Automation | Airis",
    description:
      "Discover how AI-powered call center solutions streamline operations and boost lead engagement. Explore our approach for efficient outreach.",
    images: "https://airis.space/images/meta.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: clash.style.fontFamily }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
