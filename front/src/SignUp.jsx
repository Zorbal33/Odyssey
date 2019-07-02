import React, { Component } from 'react';

class SignUp  extends Component {
    constructor(props){
    super(props);
    this.state = {
        email:"",
        password:"",
        passwordCheck:"",
        firstname:"",
        lastname:"",
    }}

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <h1>
                email:{this.state.email} <br/>
                password:{this.state.password} <br/>
                passwordCheck:{this.state.passwordCheck} <br/>
                prénom:{this.state.firstname} <br/>
                nom:{this.state.lastname}<br/>
                </h1>
                
                <input onChange={this.onChange} type="email" value={this.state.name} name="email" />
                <input onChange={this.onChange} value={this.state.name} name="password" />
                <input onChange={this.onChange} value={this.state.name} name="passwordCheck" />
                <input onChange={this.onChange} value={this.state.name} name="firstname" />
                <input onChange={this.onChange} value={this.state.name} name="lastname" />
            </div>
        );
    }
}

export default SignUp ;