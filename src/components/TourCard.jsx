import React, { useState } from "react";

const TourCard = ({ id, name, info, price, image, onRemove }) => {
    // Local state to toggle between full and shortened tour description
    const [isReadMore, setIsReadMore] = useState(false);

    return (
        <article className="tour-card">
            {/* Tour title */}
            <h3>{name}</h3>

            {/* Tour image */}
            <img src={image} alt={name} className="tour-image" />

            {/* Tour price (styled separately to highlight cost) */}
            <p className="tour-price">${price}</p>

            {/* Tour description with "Read More / Show Less" toggle */}
            <p className="tour-info">
                {
                    isReadMore 
                    ? info  // Show full description if isReadMore is true
                    : `${info.substring(0, 50)}...`  // Show only first 50 characters if false
                }

                {/* Button to toggle description */}
                <button 
                    onClick={() => setIsReadMore(!isReadMore)} 
                    className="read-more-btn"
                >
                    {isReadMore ? "Show Less" : "Read More"}
                </button>
            </p>

            {/* Button that allows the user to remove this tour from the list */}
            <button 
                onClick={() => onRemove(id)} 
                className="remove-btn"
            >
                Not Interested
            </button>
        </article>
    )
}

export default TourCard;