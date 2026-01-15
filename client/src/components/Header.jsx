
import "../styles/header.css";

export default function Header({ state, menuOpen, onToggleMenu }) {
    return (
        <header>
            <button className="menu-toggle" onClick={onToggleMenu} aria-label="Toggle menu">
                <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
            </button>
            <div className="header-title">
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