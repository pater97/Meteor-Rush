import { Player, Controls } from '@lottiefiles/react-lottie-player';

import { useNavigate } from 'react-router-dom';

import Button from '../../components/ui/button/PersonalButton';
import '../gameOver/gameOver.css'


function GameOver() {

    let navigate = useNavigate()

    function playAgain(){
        navigate('/')
    }

    function goTo(){
        navigate('/ranking')
    }

    return (
        <div id="gameOver">
            <div className='gameover-container'>
                <h2 className='gameover'>
                    GAME OVER
                </h2>
                <div className='lottiAstro'>
                    <Player
                        className='astronaut'
                        autoplay
                        loop
                        src="https://assets2.lottiefiles.com/packages/lf20_if8bcea1.json"
                    >
                        <Controls
                            visible={false}
                            buttons={["play", "repeat", "frame", "debug"]}
                        />
                    </Player>
                </div>

                <Button
                    callBack={playAgain}
                    label={"GIOCA ANCORA"}
                />

                <Button
                    callBack={goTo}
                    label={"CLASSIFICA"}
                />

            </div>
        </div>
    )
}

export default GameOver