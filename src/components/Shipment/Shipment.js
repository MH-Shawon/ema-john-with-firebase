import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {

    const [user] = useAuthState(auth)
 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();


    const handleNameBlur = event => {
        setName(event.target.value)
      };
    
      const handleAddressBlur = event => {
        setAddress(event.target.value);
      };
      const handlePhonelBlur = event => {
        setPhone(event.target.value);
      };


      const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
      };

    return (
        <div>
      <div className='form-container'>
        <div>
          <h2 className='form-title'>Shipping Information</h2>
          <Form onSubmit={handleCreateUser}>
            <Form.Group className="input-group" >
              <Form.Label>Your Name</Form.Label>
              <Form.Control onBlur={handleNameBlur} type="text" required />
            </Form.Group>
            <Form.Group className="input-group" >
              <Form.Label>Your Email</Form.Label>
              <Form.Control value={user?.email} readOnly type="email" required />
            </Form.Group>
            <Form.Group className="input-group">
              <Form.Label>Address</Form.Label>
              <Form.Control onBlur={handleAddressBlur} type="text" required />
            </Form.Group>
            <Form.Group className="input-group">
              <Form.Label>Phone</Form.Label>
              <Form.Control onBlur={handlePhonelBlur} type="text" required />
            </Form.Group>

            <p style={{ color: 'red' }}>{error}</p>
            <Button className='submit-btn' type="submit">
              Add Shipping
            </Button>
          </Form>
          
          
        </div>
      </div>
    </div>
  );
};
    


export default Shipment