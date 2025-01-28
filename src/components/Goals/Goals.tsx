 import './Goals.scss'
type GoalsProps = {
  GoalsPosition: 'goals-pos-right' | 'goals-pos-left'
}
const Goals = ({ GoalsPosition }: GoalsProps) => {
  return (
    <div className={`goals-container ${GoalsPosition}`}>
      <div className="tall-goal">
        <div className={`tall-pole ${GoalsPosition}`}></div>
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
        <div className={`mid-pole ${GoalsPosition}`}></div>
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
        <div className={`short-pole ${GoalsPosition}`}></div>
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