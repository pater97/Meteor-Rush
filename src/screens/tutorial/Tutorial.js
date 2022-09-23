// importa css
import '../tutorial/tutorial.css'
// import lotti
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import Button from '../../components/ui/button/PersonalButton'
import { useNavigate } from 'react-router-dom';


function Tutorial() {

    let navigate = useNavigate()
    
    function goGame(){
        navigate('/game')
    }

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
            <div className='caption'>
                <h1>
                    UNO SCIAME DI METEORE HA INTERROTTO LA SPEDIZIONE<br />
                     SUL PIANETA GAMMA-SEI! <br />
                     AIUTA L'INTREPIDO ASTRONAUTA!
                </h1>
                <ul>
                    <li>
                        <i className="fa-solid fa-meteor"></i> | <span>Evita le meteore lungo il cammino continuando a saltare</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-computer-mouse"></i> | <span>Da computer: Premi il tasto sinistro</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-hand-pointer"></i> | <span>Da Mobile: Tocca lo schermo</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-person-running"></i> | <span>Sopravvivi il più a lungo possibile!</span>
                    </li>
                </ul>
                <Button
                    label={'SONO PRONTO'}
                    callBack={goGame}
                />
            </div>
        </div>
    )
}

export default Tutorial