 import './Goals.scss'
type GoalsProps = {
  goalsPosition: 'goals-pos-right' | 'goals-pos-left'
}
const Goals = ({ goalsPosition }: GoalsProps) => {
  return (
    <div className={`goals-container ${goalsPosition}`}>
      <div className="tall-goal">
        <div className={`tall-pole ${goalsPosition}`}></div>
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
        <div className={`mid-pole ${goalsPosition}`}></div>
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
        <div className={`short-pole ${goalsPosition}`}></div>
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