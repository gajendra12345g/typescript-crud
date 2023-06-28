import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { signInUser } from '../redux/authSlice';


const SignupFormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SignupFormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch=useDispatch();


  const handleSubmit = () => {
    console.log(email,password)
    dispatch(signInUser(email,password));
    
  };
  return (
    <SignupFormContainer>
      <SignupFormTitle>SignIn</SignupFormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input required type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input required type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Button type="submit" onClick={handleSubmit}>Signin</Button>
        </FormGroup>
      </form>
    </SignupFormContainer>
  )
}

export default SignIn