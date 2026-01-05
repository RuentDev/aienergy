import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { WarehouseProvider } from "@/lib/warehouse-context";
import { CartProvider } from "@/lib/cart-context";
import { ScrollToTopWrapper } from "@/components/scroll-to-top-wrapper";
import "./globals.css";
import { ApolloClientWrapper } from "@/components/apollo-wrapper";
import { Toaster } from "@/components/ui/sonner";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Energy Shop - Australian Wholesale Energy Solutions",
  description:
    "Leading national wholesaler of PV inverters, energy storage, solar racking, and renewable energy products across Australia",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Toaster position="top-center" duration={5000} />
        <ApolloClientWrapper>
          <WarehouseProvider>
            <CartProvider>
              <ScrollToTopWrapper>{children}</ScrollToTopWrapper>
            </CartProvider>
          </WarehouseProvider>
          <Analytics />
        </ApolloClientWrapper>
      </body>
    </html>
  );
}
