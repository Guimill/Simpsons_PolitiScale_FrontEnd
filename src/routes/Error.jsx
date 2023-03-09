import Ralph from '../assets/images/ralph.png'
import Header from '../routes/Header/Header'
import Footer from '../routes/Footer/Footer'

function Error() {
    return (
        <div>
            <Header />
                <section>
                    <h1>Oups 🙈 Cette page n'existe pas</h1>
                    <img src={Ralph} alt="Ralph wiggum" />
                </section>
            <Footer />
        </div>
    )
}
 
export default Error