
import './App.scss'
import Tower from './components/Tower/Tower';
import Goals from './components/Goals/Goals';
import Snitch from './components/Snitch/Snitch';
import Ground from './components/Ground/Ground';
import { useGameContext } from './context/GameContext';
import Modal from './components/Modal/Modal';

function App() {

const { gameState, setGameState } = useGameContext()

function handleStartGameClick() {
  setGameState(prev => ({
    ...prev,
    didFirstGame: true,
    isGameOn: true
  }))
}

return (
  <div className="animation-body">
    <div className={`scene ${gameState.isGameOn && 'active'}`}>
      <Snitch />
      <Tower houseName='ravenclaw' position='tower-pos-a' />
      <Tower houseName='huflpuff' position='tower-pos-b' />
      <Tower houseName='gryffindor' position='tower-pos-c' />
      <Tower houseName='slytherin' position='tower-pos-d' />
      <Tower houseName='ravenclaw' position='tower-pos-e' />
      <Tower houseName='huflpuff' position='tower-pos-f' />
      <Tower houseName='gryffindor' position='tower-pos-g' />
      <Tower houseName='slytherin' position='tower-pos-h' />
      <Goals goalsPosition='goals-pos-right' />
      <Goals goalsPosition='goals-pos-left' />
      <Ground />
    </div>
    {!gameState.isModal && !gameState.isGameOn &&
      <button
      type='button'
      className='start-game-button'
      onClick={handleStartGameClick}
      >
        Start Game
      </button>}
    {
      gameState.isModal &&
        <Modal />
    }
  </div>
  )
}

export default App
