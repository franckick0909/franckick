import Hero from "./hero/page";
import Footer1 from "./footer/footer1";
import Footer2 from "./footer/footer2";
import PortfolioPage from "./portfolio/page";
import TarifsPage from "./tarifs/page";
import Service from "./service/page";
import AboutPage from "./about/page";
import Contact from "./contact/page";





export default function Home() {
  return (
 
    <>
      <Hero />
      <PortfolioPage />
      <Service />
      <TarifsPage />
      <AboutPage />
      <Contact />
      <Footer1 />
      <Footer2 />
    </>
  );
}