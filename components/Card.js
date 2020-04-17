import React from 'react';
import Router from 'next/router';
const handleClick = (slug) => {
    Router.push({
        pathname: '/blog',
        query: {id: slug },
    })
}
const Card = (props) => {
    return (
        <div class="card custom-card">
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div class="btn btn-custom" onClick={()=>handleClick('123')}>Read more ></div>
            </div>
        </div>
    )
}


export default Card