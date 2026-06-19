import About from "./layouts/About";
import BASCRFrameWork from "./layouts/BSCAR-FrameWork";
import Career from "./layouts/Career";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Numbers from "./layouts/Numbers";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <About />
      <BASCRFrameWork />
      <Numbers />
      <Career />
      <Footer />
    </>
  );
};

export default HomeScreen;
