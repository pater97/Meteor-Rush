// import css
import '../game/game.css'
import GameBox from '../../components/class-components/game-box/GameBox';
// import lottieControll
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function Test() {

        return (

                <div className="container">
                        {/* layer */}
                        <div className='layer1 baseSetting'></div>
                        <div className='layer2 baseSetting'></div>
                        <div className="layer3 baseSetting"></div>
                        {/* roccie */}
                        <div className="rock1 baseSetting"></div>
                        <div className="rock2 baseSetting"></div>
                        {/* planet */}
                        <div className="planet1"></div>
                        <div className="planet2"></div>
                        <div className="planet3"></div>
                        <div className="planet4"></div>
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
                        <GameBox/>
                </div>
        )
}

export default Test