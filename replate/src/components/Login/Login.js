//import liraries
import React, { useState, useEffect } from 'react';
import {Input, InputLabel, FormControl}  from '@material-ui/core';
// create a component
const Login = () => {
 return (
  <div>
   <div>Login</div>
   <FormControl color='primary'>
     <InputLabel htmlFor='email'>Email</InputLabel>
     <Input id='email' type='email' aria-describedby='enter your email'/>
  </FormControl>
  <FormControl>
     <InputLabel htmlFor='password'>Password</InputLabel>
     <Input id='password' type='password'/>
   </FormControl>
  </div>
 );
};


//make this component available to the app
export default Login;
