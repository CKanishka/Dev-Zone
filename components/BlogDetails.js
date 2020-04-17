import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
class BlogDetails extends React.Component {
    state = {
        likeToggled:false,
        likeCount:this.props.likeCount
    }
    handleLike = () => {
        if(!this.state.likeToggled){
            this.setState((prevState,props)=>
            {
                return {likeCount:prevState.likeCount+1,likeToggled:true}
            })
        }
    }
    render(){
        return (
            <>
            <div className="modal fade mt-2 pt-3" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="login-modal" aria-hidden="true" >
            <div className="modal-dialog  modal-dialog-centered" >
                <div className="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle"> Please login or register</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <LoginForm noRedirect={true}/>
                </div>
                </div>
            </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="card my-5">
                        <img src="/static/assets/images/details_banner.jpg" className="card-img-top" alt="card-img" />
                        <div className="card-body">
                        <span className="text-green mr-3"><i className="fa fa-clock-o mr-1" aria-hidden="true"></i>Posted on 2020-16-04</span>
                        <span className="text-green"><i className="fa fa-user-o mr-1" aria-hidden="true"></i>By test</span>
                        <h5 className="card-title mt-3">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                        {!this.props.item.isAuthenticated?<span className="text-green like-btn" data-toggle="modal" data-target="#login-modal"><i className="fa fa-thumbs-up mr-1" aria-hidden="true"></i>{this.state.likeCount} Likes</span>:<span className="text-green like-btn" onClick={this.handleLike}><i className="fa fa-thumbs-up mr-1" aria-hidden="true"></i>{this.state.likeCount} Likes</span> }
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default connect(
    state => state,
)(BlogDetails);
