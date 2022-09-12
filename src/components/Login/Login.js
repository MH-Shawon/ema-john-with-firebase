import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  return (
    <div className='form-container'>
      <div>
        <h2 className='form-title'>
          Login
        </h2>
        <Form>
          <Form.Group className="input-group" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />

          </Form.Group>

          <Form.Group className="input-group">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Button className='submit-btn' type="submit">
            Login
          </Button>
        </Form>
        <p>New to Ema-John? <Link className='form-link' to="/signup">Create New Account</Link></p>

        <div className='divider-part'>
          <div className='divider'>
            
            
          </div>
         or
          <div className='divider'></div>
        </div>

          <button className='google-btn'>Continue With Google</button>

        </div>
        
      </div>
    
    
  );
};

export default Login;