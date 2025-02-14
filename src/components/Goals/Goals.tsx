 import './Goals.scss'
 import { useGameContext } from '../../context/GameContext'
type GoalsProps = {
  goalsPosition: 'goals-pos-right' | 'goals-pos-left'
}
const Goals = ({ goalsPosition }: GoalsProps) => {

  const { gameState } = useGameContext()

  return (
    <div className={`goals-container ${goalsPosition}`}>
      <div className="tall-goal">
        <div className={`pole ${goalsPosition} ${gameState.isGameOn ? 'active' : ''}`}></div>
        <div className="hoop">
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
        </div>
        <div className="hoop back">
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
        </div>
      </div>
      <div className="mid-goal">
        <div className={`pole ${goalsPosition} ${gameState.isGameOn ? 'active' : ''}`}></div>
        <div className="hoop">
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
        </div>
        <div className="hoop back">
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
        </div>
      </div>
      <div className="short-goal">
        <div className={`pole ${goalsPosition} ${gameState.isGameOn ? 'active' : ''}`}></div>
        <div className="hoop">
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
        </div>
        <div className="hoop back">
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
          <div className="hoop-layer"></div>
        </div>
      </div>
    </div>
  )
}

export default Goals