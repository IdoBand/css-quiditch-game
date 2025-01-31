import './Tower.scss'
type HouseName = "slytherin" | "ravenclaw" | "gryffindor" | "huflpuff"

type TowerProps = {
    houseName: HouseName
    position: string
}

const Tower = ({ houseName, position }: TowerProps) => {
  return (
    <div className={`tower ${position}`}>
        <div className="base">
          <div className={`base-rectangle front ${houseName}`}></div>
          <div className={`base-rectangle back ${houseName}`}></div>
          <div className={`base-rectangle left ${houseName}`}></div>
          <div className={`base-rectangle right ${houseName}`}></div>
          <div className={`base-rectangle top`}></div>
        </div>
        <div className="stand">
          <div className={`stand-back ${houseName}`}></div>
          <div className={`left-side-trapezoid-down ${houseName}`}></div>
          <div className={`left-side-trapezoid-up ${houseName}`}></div>
          <div className={`right-side-trapezoid-down ${houseName}`}></div>
          <div className={`right-side-trapezoid-up ${houseName}`}></div>
        </div>
        <div className="roof">
          <div className={`roof-triangle front ${houseName}`}></div>
          <div className={`roof-triangle back ${houseName}`}></div>
          <div className={`roof-triangle left ${houseName}`}></div>
          <div className={`roof-triangle right ${houseName}`}></div>
        </div>
    </div>
  )
}

export default Tower