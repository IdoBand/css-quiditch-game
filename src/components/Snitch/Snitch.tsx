import { useEffect } from 'react'
import './Snitch.scss'
import { useGlobalState } from '../../context/useGlobalState'

type XYZLimits = {
  [key: string]: [number, number]
}

const snitchLimits: XYZLimits = {
  x: [-9, 9],
  y: [-4, 4],
  z: [-3, 3]
}

function generateRandomPoint(snitchLimits: XYZLimits) {
  const x = Math.floor(Math.random() * (snitchLimits.x[1] - snitchLimits.x[0] + 1)) + snitchLimits.x[0];
  const y = Math.floor(Math.random() * (snitchLimits.y[1] - snitchLimits.y[0] + 1)) + snitchLimits.y[0];
  const z = Math.floor(Math.random() * (snitchLimits.z[1] - snitchLimits.z[0] + 1)) + snitchLimits.z[0]; 

  return { x, y, z }
}
function generateOpacity() {
  const random = Math.round(Math.random() * 3)
  return random > 1 ? 0 : 1;
}

const Snitch = () => {
  
  const { state, dispatch } = useGlobalState()
  useEffect(() => {

    if (state.gameState.isGameOn) {
      const interval = setInterval(() => {
        const point = generateRandomPoint(snitchLimits)
        dispatch({
          type: 'SET_SNITCH_STATE',
          payload: (prevState) => { 
            return {
              ...prevState,
              lastRotated: prevState.lastRotated - 24,
              style: {
                ...prevState.style,
                transform: `translateX(${point.x}em) translateY(${point.y}em) translateZ(${point.z}em) rotateY(${prevState.lastRotated - 24}deg)`,
                opacity: `${prevState.lastRotated === 0 ? 1 : generateOpacity()}`
              }
            }
          }
      });
  
      }, 1300)

      return () => clearInterval(interval)
    }
    else {
      dispatch({type: "STANDBY_GAME"})
    }
    
  }, [state.gameState])

  function handleSnitchClick() {
    // game becomes winnable after 3 intervals
    if (state.gameState.isGameOn && state.snitchState.lastRotated <= -72) {
      dispatch({ type: "STOP_GAME"})
    }
  }

  return (
    <div style={state.snitchState.style}
    className='snitch'
    onClick={handleSnitchClick}></div>
  )
}

export default Snitch