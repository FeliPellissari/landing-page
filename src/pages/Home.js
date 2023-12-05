import style from "./styles/styleHome.css";
import Header from "../components/Header";
import { Typewriter } from 'react-simple-typewriter';
import instagramicon from "../assets/instagramicon.svg";
import giticon from "../assets/giticon.svg";
import linkedinicon from "../assets/linkedinicon.svg";
import seta from "../assets/seta.png"

function Home(){


    return(
        <>
            <Header />

            <main className="conteudo">
                
                <span className="maquina">
                    <Typewriter
                        words={['Software Engineering Student', 'Developer']}
                        loop
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1800}
                    />
                </span>

                <div className="social_medias">
                    <a href="https://github.com/FeliPellissari" target="_blank" rel="noopener noreferrer">
                        <img className="social_media_icon" src={giticon} alt="github link"></img>
                    </a>

                    <a href="https://www.linkedin.com/in/felipe-pellissari-296b32177/" target="_blank" rel="noopener noreferrer">
                        <img className="social_media_icon" src={linkedinicon} alt="linkedin link"></img>
                    </a>

                    <a href="https://www.instagram.com/felipe.pellissari/" target="_blank" rel="noopener noreferrer">
                        <img className="social_media_icon" src={instagramicon} alt="instagram link"></img>
                    </a>
                </div>

                <div className="flecha">
                    <img className="seta_img"src={seta} alt="flecha"></img>
                </div>
            </main>
        </>
    )
}

export default Home;