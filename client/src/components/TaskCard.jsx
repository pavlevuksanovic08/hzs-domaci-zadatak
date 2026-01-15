import sleepImg from  "../assets/sleep.png"
import exerciseImg from "../assets/exercise.png"
import foodImg from "../assets/healthy-food.png"
import waterImg from "../assets/glass-of-water.png"
import checkImg from "../assets/check.png"

export default function TaskCard({ card, checked = false, onToggle }) {

    let imgSrc;
    let alt;
    switch (card.type) {
        case "exercise":
            imgSrc = exerciseImg;
            alt = "exercise";
            break;
        case "food":
            imgSrc = foodImg;
            alt = "food";
            break;
        case "sleep":
            imgSrc = sleepImg;
            alt = "sleep";
            break;
        case "water":
            imgSrc = waterImg;
            alt = "water";
            break;
        default:
            imgSrc = null;
            alt = "";
    }

    function handleToggle(e) {
        e && e.stopPropagation();
        if (onToggle) onToggle(!checked);
    }

    return (
        <div className={`card ${checked ? 'checked' : ''}`} onClick={handleToggle}>
            <div className="overlay" aria-hidden>
                <img src={checkImg} alt="check mark" onClick={handleToggle} className="checkmark"/>
            </div>
            <img src={imgSrc} alt={alt} />
            <p>{card.text}</p>
        </div>
    )
}