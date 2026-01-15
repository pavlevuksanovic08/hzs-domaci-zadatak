
import "../styles/header.css";

export default function Header({ state }) {
    return (
        <header>
            <div>
                {state === "goals" ?        
                    <h1>Goals Dashboard</h1>
                    : state === "statistics" ?
                        <h1>Statistics Overview</h1>
                    :   <h1>User Profile</h1>
            }
            </div>
    
        </header>
        
    )
}