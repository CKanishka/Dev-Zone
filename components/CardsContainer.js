import React from 'react';
import Card from './Card';
const CardsContainer = () => {
    return (
        <div class="row m-5 justify-content-center">
            {[1,2,3,4,5].map((item,index)=>(
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Card />
                </div>
            ))}
        </div>
    )
}

export default CardsContainer;