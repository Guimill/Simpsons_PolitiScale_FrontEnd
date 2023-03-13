import Header from '../routes/Header/Header'
import Footer from '../routes/Footer/Footer'
import ImageGallery from '../components/imageGallery/index'

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
