import type { Metadata } from "next";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import { apiClient } from "@/api/api-server";
import "@/styles/globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Profile",
  description: "A profile website",
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
            <CustomNavbar data={ layoutData } />
            <main className="pt-8 sm:pt-12">{children}</main>
            <Footer data={layoutData} />
          </div>
        </Providers>
      </body>
    </html>
  );
}