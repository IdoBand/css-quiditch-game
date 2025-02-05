import { useState, useEffect } from 'react'

type SnitchCSSStyle = {
  style : {
    position: 'absolute',
    transformStyle: 'preserve-3d'
    transform: string,
    transition: string,
    opacity: string,
  },
  lastRotated: number
}

const initialSnitchStyle: SnitchCSSStyle = {
  style: {
    position: 'absolute',
    transformStyle:'preserve-3d',
    transform: 'translateX(-50%)',
    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
    opacity: '1',
  },
  lastRotated: 0
}

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

  const [snitchCSSStyle, setSnitchCSSStyle] = useState<SnitchCSSStyle>(initialSnitchStyle)

  useEffect(() => {
    const interval = setInterval(() => {
      const point = generateRandomPoint(snitchLimits) 
      setSnitchCSSStyle(prev => ({
        lastRotated: prev.lastRotated - 24,
        style: {
          ...prev.style,
          transform: `translateX(${point.x}em) translateY(${point.y}em) translateZ(${point.z}em) rotateY(${prev.lastRotated - 24}deg)`,
          opacity: `${generateOpacity()}`
        }
        
      }))
    }, 1300)

    return () => clearInterval(interval)
  }, [])


  return (
    <div style={snitchCSSStyle.style}
    className='snitch'
    onClick={() => {alert("Well done, you're a seeker!")}}></div>
  )
}

export default Snitch