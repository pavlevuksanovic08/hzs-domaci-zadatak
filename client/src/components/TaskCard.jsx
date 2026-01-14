import sleepImg from  "../assets/sleep.png"
import exerciseImg from "../assets/exercise.png"
import foodImg from "../assets/healthy-food.png"
import waterImg from "../assets/glass-of-water.png"

export default function TaskCard({card}) {
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

    }
    return (
        <div className="card">
            <img src={imgSrc} alt={alt} />
            <p>{card.text}</p>
        </div>
    )
}