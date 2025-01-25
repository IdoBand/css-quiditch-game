
import './App.scss'
import './components/Ground/Ground.scss'
import './components/Ground/Pitch.scss'
import Tower from './components/Tower/Tower';
import Goals from './components/Goals/Goals';

function App() {

return (
  <div className="animation-body">
    <div className="scene">
      <Tower houseName='ravenclaw' position='tower-pos-a' />
      <Tower houseName='huflpuff' position='tower-pos-b' />
      <Tower houseName='gryffindor' position='tower-pos-c' />
      <Tower houseName='slytherin' position='tower-pos-d' />
      <Tower houseName='slytherin' position='tower-pos-e' />
      <Tower houseName='gryffindor' position='tower-pos-f' />
      <Tower houseName='huflpuff' position='tower-pos-g' />
      <Tower houseName='ravenclaw' position='tower-pos-h' />
 
      <Goals position='hoops-pos-a' />
      <Goals position='hoops-pos-b' />
      <div className="ground" >
        <div className='pitch' />
        <div className="ground-mist"></div>
      </div>
    </div>
  </div>
  )
}

export default App
