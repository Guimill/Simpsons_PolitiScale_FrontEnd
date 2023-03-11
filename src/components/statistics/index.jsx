
function Statistics({ hidden, setHidden, data, setData}) {

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
                        <div class="progress"></div>
                    </div>
                </div>
                <div class="statistics">
                    <div class="statistics__statBox">
                        <div class="statistics__statBox--gauche">{Math.round(data)}%</div>
                        <div class="statistics__statBox--droite">{Math.round(100 -data)}%</div>
                    </div>
                </div>
            </div> : null}
        </div>  
    );
  }


export default Statistics;