import React, { useState} from 'react';
import {Container, TextField, Button }  from '@material-ui/core';
import axios from 'axios';

const BusinessRegister = () => {

    const [data, setData] = useState({username: '', password: ''})
  
    const handleChange = event => {
      setData({...data, [event.target.name]: event.target.value});
      console.log(data);
    }
  
    const handleSubmit = event => {
      event.preventDefault();
      console.log(data);
      axios
        .post("https://replated.herokuapp.com/api/business/register", data)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      
    }
  
    return (
      <Container maxWidth="xs">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            type="text"
            required
            fullWidth
            name="username"
            id="username"
            value={data.username}
            variant="filled"
            margin="normal"
            onChange={handleChange}/>
            
          <TextField
            label="Password"
            type="password"
            required
            fullWidth
            name="password"
            id="password"
            value={data.password}
            variant="filled"
            margin="normal"
            onChange={handleChange}/>
  
          <Button type="submit" fullWidth color="primary" variant="contained">
            Register
          </Button>
  
        </form>
        </Container>
    );
};
  
  export default BusinessRegister;