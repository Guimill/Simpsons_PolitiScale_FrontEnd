import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Statistics() {

    let location = useLocation();
    const urlName = location.pathname;
    const urlPostName = 'http://localhost:3000' + urlName;

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(urlPostName).then((response) => {
            const total = response.data.length;
            let vote = response.data.filter(function (vote) {
                return vote.vote === "Gauche"
              });
            let voteLength = vote.length;
            let result = ( voteLength / total ) * 100;
            setData(result);
            console.log(result)
        });
      }, []);

    const progressbar = document.querySelector(".progress");

    const changeProgress = (progress) => {
    progressbar.style.width = `${progress}%`;
    };

    setTimeout(() => changeProgress(22), 500);
    setTimeout(() => changeProgress(65), 1000);
    setTimeout(() => changeProgress(data), 1600);




    return (
        <div class="progress-container">
            <div class="progress"></div>
        </div>
    );
  }


export default Statistics;