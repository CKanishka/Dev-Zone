import React from 'react';
import {connect} from 'react-redux';
import Head from 'next/head'
import LoginForm from './LoginForm';
import InputForm from './InputModal';
const handleClick = (props) => {
    if(!props.item.isAuthenticated){
        alert("Please login/register to post")
    }
}
const AddButton = (props) => {
    return(
        <>
        <div className="modal fade mt-2 pt-3" id="main-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
            <div className="modal-dialog  modal-dialog-centered" >
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle"> {!props.item.isAuthenticated?"Please login or register":"Enter post details here"}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {!props.item.isAuthenticated?<LoginForm />:<InputForm />}
                </div>
                </div>
            </div>
        </div>
        <div className="add-btn" data-toggle="modal" data-target="#main-modal">+</div>
        </>
    )
}

export default connect(
    state => state,
)(AddButton);