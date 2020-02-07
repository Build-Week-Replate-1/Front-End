import React, { useState} from 'react';
import {Container, TextField, Button }  from '@material-ui/core';
import axios from 'axios';

const BusinessRegister = (props) => {

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
            console.log("registerResponse", res)
            localStorage.setItem("token", res.data.token)
            props.history.push('/BusinessDonate')
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
          label="business_name"
          type="text"
          required
          fullWidth
          name="business_name"
          id="business_name"
          value={data.business_name}
          variant="filled"
          margin="normal"
          onChange={event => handleChange(event)}/>

        <TextField
          label="business_address"
          type="text"
          required
          fullWidth
          name="business_address"
          id="business_address"
          value={data.business_address}
          variant="filled"
          margin="normal"
          onChange={event => handleChange(event)}/>

        <TextField
          label="phone_number"
          type="text"
          required
          fullWidth
          name="phone_number"
          id="phone_number"
          value={data.phone_number}
          variant="filled"
          margin="normal"
          onChange={event => handleChange(event)}/>

        <TextField
          label="Type (donor or charity)"
          type="select"
          required
          fullWidth
          name="type"
          id="type"
          value={data.type}
          variant="filled"
          margin="normal"
          onChange={event => handleChange(event)}/>
  
          <Button type="submit" fullWidth color="primary" variant="contained">
            Register
          </Button>
  
        </form>
        </Container>
    );
};
  
  export default BusinessRegister;