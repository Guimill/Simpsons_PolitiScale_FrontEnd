import ImageGallery from '../components/imageGallery/index'
import Header from '../routes/Header/Header'
import Footer from '../routes/Footer/Footer'

function Home() {
  return (
    <div>
      <Header />
        <ImageGallery />
      <Footer />
    </div>
  );
}

export default Home;
