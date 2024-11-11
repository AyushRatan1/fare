import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import GoogleGeminiEffect from "./components/GoogleGeminiEffectDemo";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import MacbookScroll from "./components/MacbookScrollDemo";
import HeroParallax from "./components/HeroParallaxDemo";

const App = () => {
  return (
    <>
      <div className="pt-[4.75em] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />

        <Roadmap />
        <MacbookScroll />
        <HeroParallax />
        <GoogleGeminiEffect />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
