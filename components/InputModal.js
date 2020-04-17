import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
class InputModal extends React.Component{
    state={
        content:"",
        title:"",
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    };

    
    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name:this.props.item.name,
            title:this.state.title,
            content:this.state.content,
        };
        if(!this.props.edit){
            axios
            .post(`/api`,newItem)
            .then(res => alert(`Hi, ${this.props.item.name} your post has been published`))
            .catch(err => console.log(err))
            this.toggle();
            return
        }
        else{
            axios
            .put(`/api/${this.props.id}`,newItem)
            .then(res => alert(`Hi, ${this.state.name||this.props.name} your blog has been edited. Next time you login, your changes will be visible.`))
            .catch(err => console.log(err))
            this.toggle();
            return
        }
    };
    
    
     
    render(){
        return(
            <div style={{textAlign:"left",marginBottom:"3em",position:"relative",zIndex:"3"}}>
                <div className="modal-main" style={{display:"block",padding:"1em"}}>
                    {/* <h3 id="title" className="mb-3">Start filling here</h3> */}
                    <form onSubmit={this.onSubmit}>
                        <div className="blog-form">
                            <div className="row">
                                
                                <div className="col-lg-6">
                                    <label>User Name</label>
                                    <input type="text" name="name" className="form-control text " value={this.props.item.name} placeholder="Enter your name" onChange={this.onChange} required/>
                                </div>
                                <div className="col-lg-6">
                                    <label>Title</label>
                                    <input type="text" name="title" className="form-control text" placeholder="Enter the title" onChange={this.onChange} required/>
                                </div>
                                <div className="col-sm-12">
                                    <label>Content</label>
                                    <textarea name="content" cols="40" rows="10" className="form-control textarea" placeholder="Enter post content" onChange={this.onChange} required></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <input type="submit" className="btn btn-primary mb-4 mb-lg-0" value="Submit" data-dismiss="modal"/>
                                </div>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>     
        );
    }
}
export default connect(
    state => state,
)(InputModal);
