import React from 'react';
import Card from './Card';
import {connect} from 'react-redux';
const CardsContainer = (props) => {
    console.log(props)
    return (
        <div className="row m-5 justify-content-center">
            {props && props.item && props.item.items && props.item.items.length>=1 && props.item.items.map((item)=>(
                <div className="col-lg-4 col-md-6 col-sm-12" key={item._id}>
                    <Card item={item}/>
                </div>
            ))}
        </div>
    )
}
export default connect(
    state => state,
)(CardsContainer);
