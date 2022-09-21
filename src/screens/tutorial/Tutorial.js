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
                    Devi fuggire:

                </p>
            </caption>
        </div>
    )
}

export default Tutorial