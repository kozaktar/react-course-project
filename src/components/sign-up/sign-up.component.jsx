import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange=event=>{
        const {name, value}=event.target;

        this.setState({
            [name]:value
        });
    }

    handleSubmit=async event=>{
        const {displayName, email, password, confirmPassword}=this.state;

        event.preventDefault();

        if(password!==confirmPassword)
            return;

            try{
                const {user}=await auth.createUserWithEmailAndPassword(
                    email,
                    password
                );

                await createUserProfileDocument(user, {displayName});

                this.setState({
                    displayName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                })
            }
            catch(error){
                console.error(error);
            }

           

    }

    render(){
        const {displayName, email, password, confirmPassword}=this.state;
        return (
            <div className='sign-in'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={this.handleSubmit} className="sign-up-form">
                <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleChange}
                label="Display Name"
                required
                />
                 <FormInput
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                label="Email"
                required
                />
                 <FormInput
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                label="Password"
                />
                 <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={this.handleChange}
                label="Confirm Password"
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
            </div>
        )
    }
}
export default SignUp;