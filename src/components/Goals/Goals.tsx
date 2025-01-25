 import './Goals.scss'
type GoalsProps = {
  position: 'hoops-pos-a' | 'hoops-pos-b'
}
const Goals = ({ position }: GoalsProps) => {
  return (
    <div className={`goals-container ${position}`}>
      <div className="tall-goal">
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
      </div>
      <div className="mid-goal">
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

      </div>
      <div className="short-goal">
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
        
      </div>
    </div>
  )
}

export default Goals