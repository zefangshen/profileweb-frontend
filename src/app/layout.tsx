import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { apiClient } from "@/api/api-server";
import "@/styles/globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Zefang",
  description: "Zefang's personal website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layoutData = await apiClient.getLayoutData();

  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="layout">
            <Navbar data={layoutData} />
            <main className="pt-20 sm:pt-12">{children}</main>
            <Footer data={layoutData} />
          </div>
        </Providers>
      </body>
    </html>
  );
}