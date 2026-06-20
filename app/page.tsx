import ReelCard from "./components/ReelCard";
import About from "./layouts/About";
import BASCRFrameWork from "./layouts/BSCAR-FrameWork";
import Career from "./layouts/Career";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import KhaznaApp from "./layouts/Khazna/Khazna-app";
import KhaznaReels from "./layouts/Khazna/Khazna-reels";
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

      <Footer />
    </>
  );
};

export default HomeScreen;
