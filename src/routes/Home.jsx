import Header from "../routes/Header/Header";
import Footer from "../routes/Footer/Footer";
import ImageGallery from "../components/ImageGallery";

function Home() {
  return (
    <>
      <Header />
      <main className="page">
        <ImageGallery />
      </main>
      <Footer />
    </>
  );
}

export default Home;
