import Ralph from "../assets/images/ralph.png";
import Header from "../routes/Header/Header";
import Footer from "../routes/Footer/Footer";

function Error() {
  return (
    <>
      <Header />
      <main className="page error">
        <img src={Ralph} alt="Ralph Wiggum" />
        <h1>
          ERREUR 404
          <br />
          Je suis un Licorné !
        </h1>
      </main>
      <Footer />
    </>
  );
}

export default Error;
