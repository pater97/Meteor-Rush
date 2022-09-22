// import routing
import { Routes, Route, Link } from "react-router-dom";
// import css
import './App.css';
// import screen
import GameBox from './components/class-components/game-box/GameBox'
import Game from './screens/game/Game.js'
import Login from './screens/login/Login';
import Tutorial from './screens/tutorial/Tutorial'
import GameOver from './screens/gameOver/GameOver'
import Rank from './screens/classifica/Classifica'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="game" element={<Game />} />
        <Route path="game-over" element={<GameOver />} />
        <Route path="rank" element={<Rank />} />
      </Routes>
    </div>
  );
}

export default App;