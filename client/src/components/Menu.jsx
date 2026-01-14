import NavItem from "./NavItem"
import goalsImg from "../assets/target.png"
import statsImg from "../assets/stats.png"
import profileImg from "../assets/user.png"
import logoutImg from "../assets/logout.png"
import "../styles/menu.css"

export default function Menu() {
    return (
        <>
            <nav aria-label="Main navigation">
                <img alt="logoImg" className="logo" />
                <div>
                    <NavItem img={goalsImg} text="Goals"/>
                    <NavItem img={statsImg} text="Statistics"/>
                    <NavItem img={profileImg} text="Profile"/>
                    <hr></hr>
                    <NavItem img={logoutImg} text="Log Out" />
                </div> 
            </nav>
        </>
    )
}