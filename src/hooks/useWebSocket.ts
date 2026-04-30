import { useEffect, useState } from 'react'
import { Metrics } from '../types'

export const useWebSocket = () => {
  const [data, setData] = useState<Metrics[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newPoint: Metrics = {
        cpu: Math.random() * 70 + 20,
        memory: Math.random() * 40 + 40,
        network: Math.random() * 100,
        latency: Math.random() * 200 + 20,
        time: new Date().toLocaleTimeString()
      }
      setData(prev => [...prev.slice(-20), newPoint])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return data
}
