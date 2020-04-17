import React from 'react';
import { connect } from 'react-redux';
import {loginUser,registerUser} from "../redux/actions/itemActions";

class LoginForm extends React.Component{
    state={
        login:true,
        name:"",
        email:"",
        password:"",
        password2:""
    }
    toggleLogin = () => {
        this.setState({login:!this.state.login})
    }
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSignUp = (e) => {
        console.log('signup')
        const {name,email,password,password2} = this.state
        e.preventDefault();
        this.props.registerUser(name,email,password,password2,this.props.noRedirect)
    }
    handleLogin = (e) => {
        const {email,password} = this.state
        e.preventDefault();
        this.props.loginUser(email,password,this.props.noRedirect)
    }
    render(){
        return(
           <div className="container banner pb-3 mt-5 mb-5" >
                <h3 id="title" className="mb-3">Enter details here</h3>
                    <div className="blog-form">
                        <div className="row">
                            <div className="col-lg-6">
                            {!this.state.login?
                            <form onSubmit={this.handleSignUp} >
                                <label>Name</label>
                                <input type="text" name="name" className="form-control text " placeholder="Enter your name" onChange={this.handleChange} required/>
                                <label>Email</label>
                                <input type="text" name="email" className="form-control text " placeholder="Enter your email-id" onChange={this.handleChange} required/>
                                <label>Password</label>
                                <input type="password" name="password" className="form-control text " placeholder="Enter your password" onChange={this.handleChange} required/>
                                <label>Confirm Password</label>
                                <input type="password" name="password2" className="form-control text " placeholder="Re-Enter your password" onChange={this.handleChange} required/>
                                <input type="submit" className="btn btn-primary mb-4" value="Sign Up"/>
                            </form>:
                            <form onSubmit={this.handleLogin}>
                                <label>Name</label>
                                <input type="text" name="name" className="form-control text " placeholder="Enter your name" onChange={this.handleChange} required/>
                                <label>Email</label>
                                <input type="email" name="email" className="form-control text " placeholder="Enter your email-id" onChange={this.handleChange} required/>
                                <label>Password</label>
                                <input type="password" name="password" className="form-control text " placeholder="Enter your password" onChange={this.handleChange} required/>
                                <input type="submit" className="btn btn-primary mb-4 "  value="Login"/>
                            </form>
                            }
                            </div>
                            <div className="col-lg-6">
                            <img alt="banner"
                                 className="img-fluid"
                                 src="/static/assets/images/logo3.png" />
                            <button className="btn btn-warning" style={{padding: "11px 30px"}} onClick={this.toggleLogin}>{this.state.login?"Register":"Login"}</button>     
                            </div>  
                        </div>
                    </div>
            </div>   

        )
    }
}

export default connect(
    state => state,
    {loginUser,registerUser}
)(LoginForm);