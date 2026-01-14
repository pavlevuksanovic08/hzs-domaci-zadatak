import Calendar from "react-calendar"
import TaskCard from "./TaskCard"
import "../styles/goals.css"
import "../styles/flameProgress.css"
import "../styles/taskCard.css"
import streakImg from "../assets/streak.png"

export default function Goals() {
    const sampleCards = [
        { type: "sleep", text: "Go to bed 2 hours earlier" },
        { type: "exercise", text: "Walk 30 minutes" },
        { type: "food", text: "Eat one fruit" },
        { type: "water", text: "Drink 2L of water" },
        { type: "sleep", text: "Nap 20 minutes" },
        { type: "exercise", text: "Stretch for 10 minutes" }
    ]

    return (
        <div className="goals">
            <div className="dailyGoals">
                <h1>Daily's Goals</h1>
                <div className="tasks">
                    {/*Display Grid*/}
                    <div className="taskCard-placeholder">
                        {sampleCards.map((c, i) => (
                            <TaskCard key={i} card={c} />
                        ))}
                    </div>
                    <div className="flame-progress">
                        <div className="flame-wrap">
                            <img src={streakImg} className='flame flame-gray' />
                            <div className="flame-fill" style={{'--progress': '70%'}}>
                                <img src={streakImg} className='flame flame-color' />
                            </div>
                        </div>

                        <div className="percent"><p>70%</p></div>
                    </div>
                </div>
            </div>
            <div className="streakCalendar">
                <div className="streak-card">
                    <img src={streakImg} alt="streak" className="streak-flame"/>
                    <p className="streak-number">18</p>
                </div>
                <div className="streak-calendar-wrapper">
                    <Calendar />
                </div>
            </div>
        </div>
    )
}