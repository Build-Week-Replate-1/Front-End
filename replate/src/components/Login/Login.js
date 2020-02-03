//import liraries
import React, { useState, useEffect } from 'react';
import {Container, TextField, Button, Link, Grid }  from '@material-ui/core';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import axios from 'axios';
// create a component
const Login = () => {

  const [user, setUser] = useState({username: '', password: ''})

  const handleChange = event => {
    setUser({...user, [event.target.name]: event.target.value});
    console.log(user);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user);
    axios
      .post("https://replated.herokuapp.com/api/volunteer/login", user)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    
  }

 return (
   <Container maxWidth="xs">
     <h1>Login</h1>
     <form onSubmit={event => handleSubmit(event)}>
       <TextField
         label="Username"
         type="text"
         required
         fullWidth
         name="username"
         id="username"
         value={user.username}
         variant="filled"
         margin="normal"
         onChange={event => handleChange(event)}
       />

       <TextField
         label="Password"
         type="password"
         required
         fullWidth
         name="password"
         id="password"
         value={user.password}
         variant="filled"
         margin="normal"
         onChange={event => handleChange(event)}
       />

       <Button type="submit" fullWidth color="primary" variant="contained">
         Submit
       </Button>
     </form>
     <Grid container justify='center' spacing={3}>
       <Grid item>
         <Link color="secondary">
           Business Registration
         </Link>
       </Grid>
       <Grid item>
       <Link color="secondary">Volunteer Registration</Link>
       </Grid>
     </Grid>
   </Container>
 );
};


//make this component available to the app
export default Login;
