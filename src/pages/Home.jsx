import { Header } from "../components/Header";
import { Hero } from "../components/sub-components/Hero";
import { Details } from "../components/sub-components/Details";
import { About } from "../components/sub-components/About";
import { Photos } from "../components/sub-components/Photos";
// import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Details />
      <Photos />
      <About />
    </>
  );
};
