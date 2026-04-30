import { useWebSocket } from '../hooks/useWebSocket'
import { LineChart, Line, XAxis, YAxis, AreaChart, Area, BarChart, Bar } from 'recharts'

export default function Dashboard() {
  const data = useWebSocket()
  const latest = data[data.length - 1]

  return (
    <div className="grid">
      <div className="card fade">
        <h3>CPU</h3>
        <LineChart width={300} height={150} data={data}>
          <XAxis dataKey="time" hide />
          <YAxis hide />
          <Line dataKey="cpu" stroke="#00f0b5" />
        </LineChart>
      </div>

      <div className="card fade">
        <h3>Memory</h3>
        <BarChart width={300} height={150} data={data.slice(-5)}>
          <Bar dataKey="memory" fill="#00f0b5" />
        </BarChart>
      </div>

      <div className="card fade">
        <h3>Network</h3>
        <AreaChart width={300} height={150} data={data}>
          <Area dataKey="network" stroke="#00f0b5" fill="#003f2f" />
        </AreaChart>
      </div>

      <div className="card fade">
        <h3>Latency</h3>
        <div className="gauge">{latest?.latency?.toFixed(0)} ms</div>
      </div>
    </div>
  )
}
