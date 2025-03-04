import './App.scss'
import Tower from './components/Tower/Tower';
import Goals from './components/Goals/Goals';
import Snitch from './components/Snitch/Snitch';
import Ground from './components/Ground/Ground';
import Modal from './components/Modal/Modal';
import { useGlobalState }from './context/useGlobalState'

function App() {

const { state, dispatch } = useGlobalState();

return (
  <div className="animation-body">
    <div className={`scene ${state.gameState.isGameOn && 'active'}`}>
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
    {!state.gameState.isModal && !state.gameState.isGameOn &&
      <button
      type='button'
      className='start-game-button'
      onClick={() => dispatch({type: "START_GAME"})}
      >
        Start Game
      </button>
    }
    {
      state.gameState.isModal &&
        <Modal />
    }
  </div>
  )
}

export default App
