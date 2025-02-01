import { useState, useEffect } from 'react'

type SnitchCSSStyle = {
  position: 'absolute',
  transformStyle: 'preserve-3d'
  transform: string,
  transition: string,
  opacity: string,
}

const initialSnitchStyle: SnitchCSSStyle = {
  position: 'absolute',
  transformStyle:'preserve-3d',
  transform: 'translateX(-50%)',
  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
  opacity: '1',
}

type XYZLimits = {
  [key: string]: [number, number]
}

const limits: XYZLimits = {
  x: [-9, 9],
  y: [-4, 4],
  z: [-3, 3]
}

function generateRandomPoint(limits: XYZLimits) {
  const x = Math.floor(Math.random() * (limits.x[1] - (limits.x[0]) + 1)) + (limits.x[0]);
  const y = Math.floor(Math.random() * (limits.y[1] + 1)) + (limits.y[0]);
  const z = Math.floor(Math.random() * (limits.z[1] + 1)) + (limits.z[0]);

  return { x, y, z }
}

const Snitch = () => {

  const [snitchCSSStyle, setSnitchCSSStyle] = useState<SnitchCSSStyle>(initialSnitchStyle)


  useEffect(() => {
    const interval = setInterval(() => {
      const point = generateRandomPoint(limits) 
      setSnitchCSSStyle(prev => ({
        ...prev,
        transform: `translateX(${point.x}em) translateY(${point.y}em) translateZ(${point.z}em)`,
        opacity: `${Math.round(Math.random())}`
      }))
    }, 1300)

    return () => clearInterval(interval)
  }, [])


  return (
    <div style={snitchCSSStyle}
    className='snitch'
    onClick={() => {alert("Well done, you're a seeker!")}}></div>
  )
}

export default Snitch