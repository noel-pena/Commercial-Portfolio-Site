import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Details } from "../components/Details";
import { About } from "../components/About";
import { Photos } from "../components/sub-components/Photos";
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Details />
      <Services />
      <About />
      <Photos />
      <Footer />
    </>
  );
};
