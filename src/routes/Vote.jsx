import PersonnageCard from "../components/VoteCard"
import Button from "../components/buttons"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Statistics from "../components/statistics"
import { useState } from "react"

function Vote() {
    const [hidden, setHidden] = useState(true);
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(null);



    return (
        <div>
            <Header />
                <PersonnageCard />
                <Statistics hidden={hidden} setHidden={setHidden} data={data} setData={setData} total={total} setTotal={setTotal} />
                <Button hidden={hidden} setHidden={setHidden} data={data} setData={setData} total={total} setTotal={setTotal}/>
            <Footer />
        </div>
    )
}

export default Vote