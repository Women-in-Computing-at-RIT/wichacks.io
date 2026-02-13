import { Link } from 'react-router-dom';
import "../style/style.css";
import CategoryBox from "../page_components/Category";
import flower from "../assets/categories/flower.PNG";
import widget_flower from "../assets/categories/widget-flower.png";
import teabag from "../assets/categories/teabag.png";
import ribbon from "../assets/categories/ribbon.png";
import boots from "../assets/categories/boots.png";
import watering_pail from "../assets/categories/watering-pail.png";
import teacup from "../assets/categories/teacup.png";
import cupcake from "../assets/categories/cupcake.PNG";

const past_categories = [
    { fitClass: "widget-flower", image: widget_flower, category: "WiC: Best Women and Gender Hack", description: "Best hack that promotes women and gender minorities." },
    { fitClass: "watering-pail", image: watering_pail, category: "WiC: Best Accessible UI/UX", description: "Best UI/UX project with an emphasis on inclusivity/accessibility."},
    { fitClass: "teacup", image: teacup, category: "WiC: Best Hardware Hack", description: "Best hack which utilizes physical hardware." },
    // { fitClass: "cupcake", image: cupcake, category: "Widget's Wonder Hack", description: "Hackathons are about enjoying yourself! Best fun, silly project about something you enjoy." },
    { fitClass: "boots", image: boots, category: "WiC: Best Game Hack", description: "Best hack with gameplay." },
    { fitClass: "flower", image: flower, category: "WiC: Failure to Launch", description: "Best hack that didn't happen to work out in the end." },
    { fitClass: "ribbon", image: ribbon, category: "WiC: Fan Favorite", description: "Best hack according to hackers." },
    // { fitClass: "teabag", image: teabag, category: "Constellation Brands: Digital Meets Reality", description: "Create a digital experience that interacts with the physical world using movement, light, or sound." },

];

// map category boxes here
function Categories() {
    return (
        <div className="categories-background section">
            <div className ="categories">
                <h2>Hack Categories</h2>
                <div className="categories-container">
                    {past_categories.map((cat, index) => (
                        <CategoryBox
                            key={index}
                            image={cat.image}
                            category={cat.category}
                            description={cat.description}
                            fitClass={`fit-${cat.fitClass}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Categories;