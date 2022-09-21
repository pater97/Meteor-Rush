// import routing
import { Routes, Route, Link } from "react-router-dom";
// import css
// import screen
import './App.css';
import GameBox from './components/class-components/game-box/GameBox'
import Game from './screens/game/Game.js'
import Login from './screens/login/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;