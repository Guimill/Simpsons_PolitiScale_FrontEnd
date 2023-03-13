import Button from "../components/buttons"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import PersonnageCard from "../components/voteCard/index"
import Statistics from "../components/statistics"
import { useState } from "react"

function Vote() {
    const [hidden, setHidden] = useState(true);
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(null);
    const [focus1, setFocus1] = useState(true);
    const [focus2, setFocus2] = useState(true);

    return (
        <div>
            <Header />
                    <PersonnageCard focus1={focus1}/>
                    <Statistics hidden={hidden} setHidden={setHidden} data={data} setData={setData} total={total} setTotal={setTotal} />
                    <Button focus1={focus1} setFocus1={setFocus1} focus2={focus2} setFocus2={setFocus2} hidden={hidden} setHidden={setHidden} data={data} setData={setData} total={total} setTotal={setTotal}/>
            <Footer />
        </div>
    )
}

export default Vote