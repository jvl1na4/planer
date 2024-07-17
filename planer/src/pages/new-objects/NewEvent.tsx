import React from 'react';
import { TextField, Box, Card, Button, Typography, CardContent, CardActions, Stack, styled, getOverlayAlpha } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const StyledButton = styled(Button)(({}) => ({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  padding: '6px 12px',
  lineHeight: 1.5,
  backgroundColor: '#51202C',
  color: '#AAAAAA',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#1F090C',
    boxShadow: 'none',
  }
}));


export default function NewEvent() {
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
      <Card sx={{ padding: '20px', minWidth: '300px', background: '#B19595' }}>
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
                <Field as={TextField} type="email" name="email" variant="outlined" fullWidth sx={{background: '#D7B3B3', }} />
                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

                <label htmlFor="password">Password:</label>
                <Field as={TextField} type="password" name="password" variant="outlined" fullWidth sx={{background: '#D7B3B3'}} />
                <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

                <StyledButton type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                  Login
                </StyledButton>
              </Stack>
            </Form>
          )}
        </Formik>
      </Card>
    </Box>
  );
}

