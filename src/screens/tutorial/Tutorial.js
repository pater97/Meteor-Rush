// importa css
import '../tutorial/tutorial.css'
// import lotti
import { Player, Controls } from '@lottiefiles/react-lottie-player';


function Tutorial() {
    return (
        <div id='tutorial'>
            {/* meteors lottie */}
            <Player
                className='lottiMeteors'
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_vQfffuIbXS.json"
            >
                <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                />
            </Player>
            <picture>
                <Player
                    className='lottiAstro'
                    autoplay
                    loop
                    src="https://assets7.lottiefiles.com/packages/lf20_ypej3gd9.json"
                >
                    <Controls
                        visible={false}
                        buttons={["play", "repeat", "frame", "debug"]}
                    />
                </Player>
            </picture>
            <caption>
                <h1>
                    OH NO! <br />
                    IL PIANETA STA PER ESPLODERE A CAUSA DELLE METEORITI
                </h1>
                <p>
                    Devi fuggire
                    <ul>
                        <li>
                        <i class="fa-solid fa-meteor"></i> | <span>Evita le meteore lungo il cammino</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-computer-mouse"></i> | <span>premi il tasto sinistro per eseguire il salto</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-hand-pointer"></i> | <span>Tappa nel caso in cui sei su mobile</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-person-running"></i> | <span>Corri più che puoi e cerca di raggiungere il massimo risultato per fuggire</span>
                        </li>
                    </ul>
                </p>
            </caption>
        </div>
    )
}

export default Tutorial