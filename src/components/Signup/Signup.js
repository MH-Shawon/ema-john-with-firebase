import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPasword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

  const handleEmailBlur = event => {
    setEmail(event.target.value)
  };
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordlBlur = event => {
    setConfirmPasword(event.target.value);
  };

  const handleCreateUser = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Your two password did not match')
      return;
    }
    if (password.length < 6) {
      setError('Password must be contain 6 characters or longer');
      return;
    };
    createUserWithEmailAndPassword(email, password)
  };

  if (user) {
    navigate('/shop')
  }

  return (
    <div>
      <div className='form-container'>
        <div>
          <h2 className='form-title'>Sign UP</h2>
          <Form onSubmit={handleCreateUser}>
            <Form.Group className="input-group" >
              <Form.Label>Email</Form.Label>
              <Form.Control onBlur={handleEmailBlur} type="email" required />
            </Form.Group>
            <Form.Group className="input-group">
              <Form.Label>Password</Form.Label>
              <Form.Control onBlur={handlePasswordBlur} type="password" required />
            </Form.Group>
            <Form.Group className="input-group">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control onBlur={handleConfirmPasswordlBlur} type="password" required />
            </Form.Group>

            <p style={{ color: 'red' }}>{error}</p>
            <Button className='submit-btn' type="submit">
              Sign Up
            </Button>
          </Form>
          <p>Already have an account? <Link className='form-link' to="/login">Login</Link></p>
          <div className='divider-part'>
            <div className='divider'>
            </div>
            <p>or</p>
            <div className='divider'></div>
          </div>
          <button className='google-btn'>Continue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;