import Goals from "./Goals";
import Statistics from "./Statistics";
import Profile from "./Profile";

export default function Main({state}) {
    return (
        <main>
            {state === "goals" ?
                <Goals />
                : state === "statistics"
                    ? <Statistics />
                    : <Profile />}
        </main>
    )
}