import StatBox from "../statBox/index";


function Statistics({ hidden, setHidden, data, setData, total, setTotal}) {

    const progressbar = document.querySelector(".progress");

    const changeProgress = (progress) => {
    progressbar.style.width = `${progress}%`;
    };

    setTimeout(() => changeProgress(data), 600);

    return (
        <div>
            {!hidden ? <div>
                <div class="statistics">
                    <div class="progress-container">
                        <div id="percent-loaded" role="progressbar" aria-valuenow={data}
                            aria-valuemin="0" aria-valuemax="100"  class="progress"></div>
                    </div>
                </div>
                <div>
                    <StatBox data={data} total={total}/>
                </div>
            </div> : null}
        </div>  
    );
  }


export default Statistics;