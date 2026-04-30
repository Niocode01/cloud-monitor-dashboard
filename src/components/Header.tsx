import { useEffect, useState } from 'react'

export default function Header() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(i)
  }, [])

  return (
    <div className="header">
      <span>{time.toLocaleTimeString()}</span>
      <span className="status">● Online</span>
      <select>
        <option>5s</option>
        <option>10s</option>
      </select>
    </div>
  )
}
