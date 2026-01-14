
export default function NavItem({img, text, color="", onClick}) {
    return (
        <div className="navItem" onClick={onClick}>
            <img src={img} className="navIcon"></img>
            <p style={{color: color}} className="navText">{text}</p>
        </div>
    )
}