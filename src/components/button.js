import React, {useState} from 'react'

const Button = () => {
  const [clicks, setClicks] = useState(0)

  return (
    <button onClick={() => setClicks(clicks + 1)}>{clicks}</button>
  )
}

export default Button
