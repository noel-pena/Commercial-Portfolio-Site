import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Details } from "../components/Details";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Review } from "../components/Review";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Details />
      <Services />
      <Review />
      <About />
      <Footer />
    </>
  );
};
