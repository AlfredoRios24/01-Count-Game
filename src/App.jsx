import Player from './components/Player.jsx';
import TimerContainer from './components/TimerContainer.jsx';
import  Timer from './components/Timer.jsx';


function App() {
  return (
    <>
      <Player></Player>
      <TimerContainer>
          <Timer title="Nivel Facil" time="1"></Timer>
          <Timer title="Nivel Intermedio" time = "20"></Timer>
          <Timer title="Nivel Difícil" time = "40"></Timer>
          <Timer title="Nivel Reto" time = "60" ></Timer>
      </TimerContainer>
    </>
  );
}

export default App;