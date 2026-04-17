import React, { useState } from "react";
import "../style/style.css";

function CategoryBox({ image, category, description }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <button
        type="button"
        className={`category-card ${flipped ? "is-flipped" : ""}`}
        onClick={() => setFlipped((v) => !v)}
        aria-expanded={flipped}
        aria-label={`${category}: ${description}`}
        >
        <div className="category-inner">
            <div className="category-face category-front">
            <img src={image} alt="" aria-hidden className="category-img" />
            </div>

            <div className="category-face category-back">
            {/* IMPORTANT: pass the raw image path, not url(...) */}
            <div className="category-mask" style={{ "--mask-url": image }} aria-hidden={!flipped}>
                <div className={`category-back-content`}>
                <h3 className="category-title">{category}</h3>
                <p className="category-desc">{description}</p>
                </div>
            </div>
            </div>
        </div>
        </button>
    );
}

export default CategoryBox;