import { Player, Controls } from '@lottiefiles/react-lottie-player';
import '../gameOver/gameOver.css'

function GameOver() {

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
            </div>
        </div>
    )
}

export default GameOver