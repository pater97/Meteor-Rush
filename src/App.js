import './App.css';
import GameBox from './components/class-components/game-box/GameBox'
import TestCanvas from './screens/testcanvas/TestCanvas.js'
import './screens/testcanvas/testCanvas.css'


function App() {
  return (
    <div className="App">
      <GameBox />
      <TestCanvas />
    </div>
  );
}

export default App;
