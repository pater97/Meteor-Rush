// import routing
import { Routes, Route, Link } from "react-router-dom";
// import css
import './App.css';
// import screen
import Game from './screens/game/Game.js'
import Register from './screens/register/Register'
import Login from './screens/login/Login';
import Tutorial from './screens/tutorial/Tutorial'
import GameOver from './screens/gameOver/GameOver'
import Ranking from './screens/ranking/Ranking'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/game" element={<Game />} />
        <Route path="/gameover" element={<GameOver />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </div>
  );
}

export default App;