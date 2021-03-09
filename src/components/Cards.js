import React from 'react';
import Carditem from './Carditem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these great destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {/* pass props */}
                        <Carditem
                            src="assets/image-1.jpg"
                            text="Find your own personal oasis in a beautiful beach-front villa"
                            label="Luxury"
                            path="/services"
                        />
                        <Carditem
                            src="assets/image-3.jpg"
                            text="All-inclusive private luxury villas equipped with everything you need and so much more"
                            label="Private"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        {/* pass props */}
                        <Carditem
                            src="assets/image-4.jpg"
                            text="Romantic getaways"
                            label="Romance"
                            path="/services"
                        />
                        <Carditem
                            src="assets/image-2.jpg"
                            text="Relaxation your way"
                            label="Relaxation"
                            path="/services"
                        />
                        <Carditem
                            src="assets/image-5.jpg"
                            text="Exciting night life"
                            label="Night Life"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
