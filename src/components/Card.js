import React, { useState } from 'react';

function Card({ id, image, info, name, price, removeTour }) {
    const [readmore, setReadmore] = useState(false);
    const [interested, setInterested] = useState(false);

    const description = readmore ? info : `${info.substring(0, 100)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    function interestedHandler() {
        setInterested(!interested);
        alert(`You have marked the ${name} tour as ${interested ? 'not interested anymore' : 'interested'}.`);
    }

    return (
        <div className='card'>
            <img src={image} className="image" alt={name} />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? 'show less' : 'read more'}
                    </span>
                </div>
            </div>
            <div className="tour-buttons">
            <button className="btn-red1" onClick={interestedHandler}>
                    {interested ? 'Not Interested' : 'Interested'}
                </button>
                <button className="btn-red" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
                
            </div>
        </div>
    );
}

export default Card;
