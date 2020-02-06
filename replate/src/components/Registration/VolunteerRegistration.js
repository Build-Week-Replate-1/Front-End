import React, { useState} from 'react';
import {Container, TextField, Button }  from '@material-ui/core';
import axios from 'axios';

const VolunteerRegister = (props) => {

    const [data, setData] = useState({username: '', password: ''})
  
    const handleChange = event => {
      setData({...data, [event.target.name]: event.target.value});
      console.log(data);
    }
  
    const handleSubmit = event => {
      event.preventDefault();
      axios
        .post("https://replated.herokuapp.com/api/volunteer/register", data)
        .then(res => {
          console.log("registerResponse", res)
          localStorage.setItem("token", res.data.token)
          props.history.push('/Dashboard')
        })
        .catch(err => {
          console.log(err);
          console.log(data);
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


        <TextField
            label="Phone Number"
            type="text"
            required
            fullWidth
            name="phone_number"
            id="number"
            value={data.phone_number}
            variant="filled"
            margin="normal"
            onChange={handleChange}/>

        <TextField
            label="volunteer_name"
            type="text"
            required
            fullWidth
            name="volunteer_name"
            id="name"
            value={data.volunteer_name}
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
  
  export default VolunteerRegister;