import React from 'react';
import { TextField, Box, Card, Button, Typography, FormControl, InputLabel, MenuItem, Select, Stack, styled } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CancelIcon from '@mui/icons-material/Cancel';

const hashedKey = localStorage.getItem('hashedKey');

const initialValues = {
  name: '',
  date: '',
  subject: '',
  userKey: hashedKey,
  categoryId: '',
};

const categories = [
  { id: 1, name: 'school' },
  { id: 2, name: 'work' },
  { id: 3, name: 'private' },
];

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

  const handleSave = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/tests', values);
      console.log('Task saved successfully', response.data);
      navigate('/home');
    } catch (error) {
      console.error('Save error:', error);
      console.log(values);
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
        <Typography variant="h4" gutterBottom>New Test</Typography>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            }
            if (!values.date) {
              errors.date = 'Required';
            }
            if (!values.categoryId) {
              errors.categoryId = 'Required';
            }
            return errors;
          }}
          onSubmit={handleSave}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <Stack direction="column" spacing={2}>
                <label htmlFor="name">Test Name:</label>
                <Field as={TextField} name="name" variant="outlined" fullWidth sx={{ background: '#D7B3B3' }} />
                <ErrorMessage name="name" component="div" style={{ color: 'red' }} />

                <label htmlFor="date">Test Date:</label>
                <Field as={TextField} type="date" name="date" variant="outlined" fullWidth sx={{ background: '#D7B3B3' }} />
                <ErrorMessage name="date" component="div" style={{ color: 'red' }} />

                <label htmlFor="Subject">Subject:</label>
                <Field as={TextField} name="subject" variant="outlined" fullWidth sx={{ background: '#D7B3B3' }} />
                <ErrorMessage name="subject" component="div" style={{ color: 'red' }} />

                <FormControl variant="outlined" fullWidth sx={{ background: '#D7B3B3', mt: 2 }}>
                  <InputLabel id="categoryId-label">Category</InputLabel>
                  <Field
                    as={Select}
                    labelId="categoryId-label"
                    name="categoryId"
                    onChange={(event) => setFieldValue('categoryId', event.target.value)}
                    label="Category"
                  >
                    {categories.map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
                <ErrorMessage name="categoryId" component="div" style={{ color: 'red' }} />

                <Stack direction="row" justifyContent="space-evenly">
                  <StyledButton variant="contained" color="primary" onClick={() => navigate('/home')}>
                    Cancel
                    <CancelIcon />
                  </StyledButton>
                  <StyledButton type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                    Save
                  <AddTaskIcon />
                  </StyledButton>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
      </Card>
    </Box>
  );
}
