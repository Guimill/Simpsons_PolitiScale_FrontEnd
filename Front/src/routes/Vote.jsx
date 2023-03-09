import PersonnageCard from "../components/VoteCard"
import Button from "../components/buttons"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

function Vote() {
    return (
        <div>
            <Header />
                <PersonnageCard />
                <Button />
            <Footer />
        </div>
    )
}

export default Vote