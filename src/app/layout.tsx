import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "./components/pageTransition";
import StairTransition from "./components/stairTransition";
import Layout from "./components/layout";
import ContentFooter from "./footer/contentFooter";

export const metadata: Metadata = {
  title: "Franck Chapelon",
  description: "Franck Chapelon Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <StairTransition />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <footer>
            
          </footer>
        </Layout>
      </body>
    </html>
  );
}
