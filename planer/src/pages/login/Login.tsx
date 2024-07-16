import React from 'react';
import { TextField, Box, Card, Button, Typography, CardContent, CardActions, Stack } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

export default function Loginpage() {
  let navigate = useNavigate();

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/check', values);
      const loginResponseValues = response.data;

      if (loginResponseValues.email === values.email) {
        try {
          const keyResponse = await axios.get(`http://localhost:8080/api/users/key`, {
            params: {
              email: values.email,
              password: values.password
            }
          });
          const hashedKey = keyResponse.data;

          localStorage.setItem('hashedKey', hashedKey);

          navigate('/home');
          window.location.reload();
        } catch (error) {
          console.error('Error getting hashed key:', error);
          localStorage.setItem('token', '');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      localStorage.setItem('token', '');
    } finally {
      setSubmitting(false);
    }
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
      <Card sx={{ padding: '20px', minWidth: '300px' }}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack direction="column" spacing={2}>
                <label htmlFor="email">E-Mail:</label>
                <Field as={TextField} type="email" name="email" variant="outlined" fullWidth />
                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

                <label htmlFor="password">Password:</label>
                <Field as={TextField} type="password" name="password" variant="outlined" fullWidth />
                <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                  Login
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Card>
    </Box>
  );
}

