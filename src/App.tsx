import { I18nProvider } from "./i18n";
import Navbar from "./components/Navbar";
import CinematicHero from "./components/CinematicHero";
import Collection from "./components/Collection";
import About from "./components/About";
import SocialStrip from "./components/SocialStrip";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialDock from "./components/SocialDock";

export default function App() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <CinematicHero />
        <Collection />
        <About />
        <SocialStrip />
        <Contact />
      </main>
      <Footer />
      <SocialDock />
    </I18nProvider>
  );
}
