import ralph from '../assets/images/ralph.png'
import Header from '../routes/Header/Header'
import Footer from '../routes/Footer/Footer'

function Error() {
    return (
        <div>
            <Header />
                <section>
                    <h1>Oups 🙈 Cette page n'existe pas</h1>
                    <img src={ralph} alt="ralph wiggum" />
                </section>
            <Footer />
        </div>
    )
}
 
export default Error