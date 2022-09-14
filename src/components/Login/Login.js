import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  


  const handleEmailBlur = event => {
    setEmail(event.target.value)
  };
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  };

  const handleSignIn = event =>{
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    
  }

  if(user){
    navigate('/shop')
  };
    

  return (
    <div className='form-container'>
      <div>
        <h2 className='form-title'>
          Login
        </h2>
        <Form>
          <Form.Group className="input-group" >
            <Form.Label>Email</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" required />
          </Form.Group>
          <Form.Group className="input-group">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" required />

            <p style={{ color:'red' }}>{error?.message} </p>

            

          </Form.Group>
          <Button onSubmit={handleSignIn} className='submit-btn' type="submit">
            Login
          </Button>
        </Form>
        <p>New to Ema-John? <Link className='form-link' to="/signup">Create New Account</Link></p>
        <div className='divider-part'>
          <div className='divider'>
          </div>
          <p>or</p>
          <div className='divider'></div>
        </div>
        <button className='google-btn'>Continue With Google</button>
      </div>
    </div>
  );
};

export default Login;