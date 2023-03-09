import PersonnageCard from "../components/VoteCard"
import Button from "../components/buttons"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Statistics from "../components/statistics"

function Vote() {
    return (
        <div>
            <Header />
                <PersonnageCard />
                <Statistics />
                <Button />
            <Footer />
        </div>
    )
}

export default Vote