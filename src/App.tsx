
import './App.scss'
import './components/Ground/Ground.scss'
import './components/Ground/Pitch.scss'
import Tower from './components/Tower/Tower';
import Goals from './components/Goals/Goals';
import Snitch from './components/Snitch';
function App() {

return (
  <div className="animation-body">
    <div className="scene">
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
      <div className="ground" >
        <div className='pitch' >
          <div />
        </div>
        <div className="ground-mist"></div>
      </div>
    </div>
  </div>
  )
}

export default App
