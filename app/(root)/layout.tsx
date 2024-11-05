import type { Metadata } from "next";
import { Encode_Sans_Expanded as Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/root/Header";

import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/root/Footer";
import Subscribe from "@/components/root/Subscribe";
import MobileMenu from "@/components/root/MobileMenu";
import { getLoggedInUser } from "@/lib/actions/auth.actions";
import TopLoader from "@/components/Toploader";


const inter = Inter({ 
  subsets: ["latin"],
  weight: ["100", "200","300","400","500","600","700","800","900"] 
});

export const metadata: Metadata = {
  title: "Excelcart",
  description: "New Excelcart Website in Progress",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedInUser = await getLoggedInUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`relative ${inter.className}`}>
        <TopLoader/>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          <main>
            {children}
            <Subscribe/>
          </main>
          <Footer/>
          <MobileMenu/>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
