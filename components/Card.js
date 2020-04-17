import React from 'react';
import Router from 'next/router';
const handleClick = (slug) => {

    Router.push({
        pathname: '/blog',
        query: {id: slug },
    })
}
// {content.length>100?`${content.substring(0,100)}...`:content}
const Card = (props) => {
    const {_id,content,title} = props.item
    return (
        <div className="card custom-card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <div className="btn btn-custom" onClick={()=>handleClick(_id)}>Read more ></div>
            </div>
        </div>
    )
}


export default Card