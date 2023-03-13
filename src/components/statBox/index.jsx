function StatBox({data, total}){

    return(
        <div class="statistics">
            <div class="statistics__statBox">
                <div class="statistics__statBox--gauche">{Math.round(data)}%</div>
                <div class="statistics__statBox--nombreDeVote">{total} Votes</div>
                <div class="statistics__statBox--droite">{Math.round(100 -data)}%</div>
            </div>
        </div>
    )
}

export default StatBox