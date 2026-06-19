import ReelCard from "./components/ReelCard";
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
      <div className="h-screen flex items-center justify-center">
        <ReelCard
          videoUrl="https://www.tiktok.com/@zeed_eg/video/7484369508887563528?lang=en"
          seenCount={100}
        />
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
