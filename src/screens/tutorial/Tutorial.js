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
                    OH NO! <br />
                    IL PIANETA STA PER ESPLODERE A CAUSA DELLE METEORITI <br />
                    DEVI FUGGIRE!
                </h1>
                <ul>
                    <li>
                        <i className="fa-solid fa-meteor"></i> | <span>Evita le meteore lungo il cammino</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-computer-mouse"></i> | <span>premi il tasto sinistro per eseguire il salto</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-hand-pointer"></i> | <span>Tappa nel caso in cui sei su mobile</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-person-running"></i> | <span>Corri più che puoi e raggiungi il massimo risultato</span>
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