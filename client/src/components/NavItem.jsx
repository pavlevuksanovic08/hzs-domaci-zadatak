
export default function NavItem({img, text, color=""}) {
    return (
        <div className="navItem">
            <img src={img} className="navIcon"></img>
            <p style={{color: color}} className="navText">{text}</p>
        </div>
    )
}