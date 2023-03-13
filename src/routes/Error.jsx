import Ralph from '../assets/images/ralph.png'
import Header from '../routes/Header/Header'
import Footer from '../routes/Footer/Footer'

function Error() {
    return (
        <div>
            <Header />
                <div class="statistics" style={{padding:50}}>
                    <img src={Ralph} alt="Ralph wiggum" />
                    <div class="statistics__statBox--nombreDeVote"><h1>ERREUR 404 <br />Je suis un Licorné !</h1></div>
                </div>
            <Footer />
        </div>
    )
}
 
export default Error