import { I18nProvider } from "./i18n";
import Navbar from "./components/Navbar";
import CinematicHero from "./components/CinematicHero";
import Collection from "./components/Collection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <CinematicHero />
        <Collection />
        <About />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
