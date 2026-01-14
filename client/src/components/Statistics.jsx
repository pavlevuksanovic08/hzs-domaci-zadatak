import Chart from "./Chart"

export default function Statistics() {
    // Sample time-series data (time ISO string, numeric value)
    const sampleData = [
        { time: '2026-01-05T08:00:00Z', value: 12 },
        { time: '2026-01-06T08:00:00Z', value: 18 },
        { time: '2026-01-07T08:00:00Z', value: 15 },
        { time: '2026-01-08T08:00:00Z', value: 22 },
        { time: '2026-01-09T08:00:00Z', value: 19 },
        { time: '2026-01-10T08:00:00Z', value: 24 },
        { time: '2026-01-11T08:00:00Z', value: 20 },
        { time: '2026-01-12T08:00:00Z', value: 26 },
        { time: '2026-01-13T08:00:00Z', value: 23 },
        { time: '2026-01-14T08:00:00Z', value: 28 }
    ]

    return (
        <div>
            <Chart data={sampleData} width={760} height={320} />
        </div>
    )
}