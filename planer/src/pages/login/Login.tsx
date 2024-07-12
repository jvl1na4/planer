import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Stack, Box, Card, Button, Typography, CardContent, CardActionArea } from "@mui/material";

const initialValues = {
  email: '',
  password: '',
};

export default function Loginpage() {
  let navigate = useNavigate();

  const handleLogin = async (values, { setSubmitting }) => {
    /*
    try {
      const response = await axios.post('http://localhost:3000/login', values);
      const token = response.data.accessToken;
      localStorage.setItem('token', token);
      console.log('Login successful', token);
      
      navigate('/home');
      window.location.reload();
    } catch (error) {
      console.error('Login Error:', error);
      localStorage.setItem('token','');
    }
    */
    navigate('/home');
    setSubmitting(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Card sx={{ padding: '20px', minWidth: '300px' }}>
            <Form>
              <Stack direction="column" spacing={2}>
                <label htmlFor="email">E-Mail:</label>
                <Field as={TextField} type="email" name="email" variant="outlined" fullWidth />
                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

                <label htmlFor="password">Password:</label>
                <Field as={TextField} type="password" name="password" variant="outlined" fullWidth />
                <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                  login
                </Button>
              </Stack>
            </Form>
          </Card>
        )}
      </Formik>
    </Box>
  );
}
