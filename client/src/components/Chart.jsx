
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

// Recharts-based line chart. Expects data: [{ time: <ISO string|Date|number>, value: number }, ...]
export default function Chart({ data = [], height = 300 }) {
    const formatted = (data || []).map(d => ({
        time: new Date(d.time).toLocaleString(),
        value: d.value
    }))

    return (
        <div style={{ width: '100%', height }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={formatted} margin={{ top: 8, right: 24, bottom: 24, left: 12 }}>
                    <CartesianGrid stroke="rgba(255,255,255,0.04)" />
                    <XAxis dataKey="time" tick={{ fill: 'var(--muted, #BFC5CE)' }} />
                    <YAxis tick={{ fill: 'var(--muted, #BFC5CE)' }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#ff7a00" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}