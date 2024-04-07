
import React, { useState } from 'react';
import "./Card.css";

function Card({ id, image, info, price, name, removeTour }) {
    const [readmore, setReadmore] = useState("false");
    function readmoreHandler() {
        setReadmore(!readmore);
    }

    const description = readmore ?  `${info.substring(0, 200)}....`: info;
    return (
        <div>
            <div className="card">
                <img src={image} alt="img" className="image" />
                <div className='tour-info'>
                    <div className="tour-details">
                        <h4 className="tour-price">₹{price} </h4>
                        <h4 className="tour-name">{name} </h4>
                    </div>
                    <div className="description">
                        {description}
                        <span onClick={readmoreHandler} className='read-more'>
                            {readmore ? " read more" : " show less"}
                        </span>
                    </div>
                </div>
                <button onClick={() => removeTour(id)} className='btn-red'>Not Interested</button>
            </div>
        </div>
    );
}
export default Card;
