import mail from '../../assets/images/mail.svg'
import github from '../../assets/images/github.svg'
import linkedin from '../../assets/images/linkedin.svg'


function Header() {
    return (
        <header class="banner" role="banner" style={{minWidth: "100%"}}>
        <div class="banner__containerTop">
            <a href="/" id='a-tittle'><h1>SIMPSONS PolitiScale</h1></a>
            <p> {/* permet de positionner correctement le banner avec space-around */} </p>
            <p> {/* permet de positionner correctement le banner avec space-around */} </p>
            <p> {/* permet de positionner correctement le banner avec space-around */} </p>
            <div>
                <a href="/"><button class="banner__containerTop__buttonLangue"><h3>FR</h3></button></a>
                <a href="https://en.duolingo.com/course/fr/en/Learn-French"><button class="banner__containerTop__buttonLangue"><h3>EN</h3></button></a>
            </div>
        </div>
        <div class="banner__containerBottom">
            <a class="banner__containerBottom__a" 
                href="mailto:guillaume.milleret@gmail.com">
                    <img class="banner__containerBottom__a__img" src={mail} alt="logo d'une enveloppe contenant mon mail"/></a>
            <a class="banner__containerBottom__a" 
                href="https://github.com/Guimill">
                    <img class="banner__containerBottom__a__img" src={github} alt="logo de github redirigeant vers mon github"/></a>
            <a class="banner__containerBottom__a" 
                href="https://www.linkedin.com/in/guillaume-milleret/">
                    <img class="banner__containerBottom__a__img" src={linkedin} alt="logo de linkedin redirigeant vers mon linkedin"/></a>
        </div>
    </header>
    )
}

export default Header