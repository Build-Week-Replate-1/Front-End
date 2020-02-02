//import liraries
import React, { useState, useEffect } from 'react';
import {Container, TextField, Button }  from '@material-ui/core';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
// create a component
const Login = () => {

  const [user, setUser] = useState({email: '', password: ''})

  const handleChange = event => {
    setUser({...user, [event.target.name]: event.target.value});
    console.log(user);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user);
    
  }

 return (
  <Container maxWidth='xs'>
   <h1>Login</h1>
   <form onSubmit={event => handleSubmit(event)}>

    <TextField label='Email' type='email' required fullWidth name='email' id='email' variant='filled' margin='normal' onChange={event => handleChange(event)}></TextField>

    <TextField label='Password' type='password' required fullWidth name='password' id='password' variant='filled' margin='normal' onChange={event => handleChange(event)}></TextField>

    <Button type='submit' fullWidth color='primary' variant='contained'>Submit</Button>
   </form>
  </Container>
 );
};


//make this component available to the app
export default Login;
