import ReelCard from "./components/ReelCard";
import About from "./layouts/About";
import BASCRFrameWork from "./layouts/BSCAR-FrameWork";
import Career from "./layouts/Career";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import KhaznaApp from "./layouts/Khazna/Khazna-app";
import KhaznaDesigns from "./layouts/Khazna/Khazna-designs";
import KhaznaReels from "./layouts/Khazna/Khazna-reels";
import MonaDesigns from "./layouts/MonaAtwa/Mona-designs";
import MonaReels from "./layouts/MonaAtwa/Mona-reels";
import MonaAtwa from "./layouts/MonaAtwa/MonaAtwa";
import Numbers from "./layouts/Numbers";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <About />
      <BASCRFrameWork />
      <Numbers />
      <Career />
      <KhaznaApp />
      <KhaznaReels />
      <KhaznaDesigns />
      <MonaAtwa />
      <MonaReels />
      <MonaDesigns />
      <Footer />
    </>
  );
};

export default HomeScreen;
