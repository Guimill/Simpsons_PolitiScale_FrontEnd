import './App.css';

function App() {
  return (
    <div className="App">
          <header class="banner" role="banner">
        <div class="banner__containerTop">
            <h1>CARTOON POLITICS</h1>
            <p> permet de positionner correctement le banner avec space-around </p>
            <p> permet de positionner correctement le banner avec space-around </p>
            <p> permet de positionner correctement le banner avec space-around </p>
            <div>
                <a href="index.html"><button class="banner__containerTop__buttonLangue"><h3>FR</h3></button></a>
                <a href="https://en.duolingo.com/course/fr/en/Learn-French"><button class="banner__containerTop__buttonLangue"><h3>EN</h3></button></a>
            </div>
        </div>
        <div class="banner__containerBottom">
            <a class="banner__containerBottom__a" href="guillaume.milleret@gmail.com"><img class="banner__containerBottom__a__img" src="./public/img/mail.svg" alt="logo d'une enveloppe contenant mon mail"></img></a>
            <a class="banner__containerBottom__a" href="https://github.com/Guimill"><img class="banner__containerBottom__a__img" src="./public/img/github.svg" alt="logo de github redirigeant vers mon github"></img></a>
            <a class="banner__containerBottom__a" href="https://www.linkedin.com/in/guillaume-milleret/"><img class="banner__containerBottom__a__img" src="./public/img/linkedin.svg" alt="logo de linkedin redirigeant vers mon linkedin"></img></a>
        </div>
    </header>

    <body>
        <section>
            <div class="personnage" >
                <h2>  Simpson Homer  </h2>
                <img class="personnage__img" src="./public/img/homer.jpg" alt="test"></img>
            </div>
        </section>

        <section>
            <div class="console">
                <div class="console__containerTop">
                    <button class="console__containerTop__button">
                        Personnage aléatoire
                    </button>
                </div>
                <div class="console__containerBottom"> 
                    <button class="console__containerBottom__button console__containerBottom__button--left">
                        Gauche
                    </button>
                    <button class="console__containerBottom__button console__containerBottom__button--right">
                        Droite
                    </button>
                </div>
            </div>    
        </section>

        <section>
            <div class="stat">
                <div id="stat-bar"></div>
            </div>
        </section>
    </body>

    <footer>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </footer>
    </div>
  );
}

export default App;
