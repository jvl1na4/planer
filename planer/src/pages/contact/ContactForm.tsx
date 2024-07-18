import React, { useState } from 'react';
import { TextField, Button, Box, Typography, styled } from '@mui/material';
import emailjs from 'emailjs-com';

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#51202C',
  color: '#AAAAAA',
  '&:hover': {
    backgroundColor: '#1F090C',
  },
}));

interface EmailDetails {
  to_name: string;
  from_name: string;
  message: string;
}

export default function SendEmail() {
  const [emailDetails, setEmailDetails] = useState<EmailDetails>({
    to_name: 'juliana',
    from_name: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.send(
      'service_85jkdo9',
      'template_cjhdm9r', 
      emailDetails,
      'Lrt36FfWCvQu4qT0I' 
    )
    .then((response) => {
      setResponseMessage('Email sent successfully');
      console.log('Email sent successfully', response.status, response.text);
    }, (error) => {
      setResponseMessage('Failed to send email');
      console.log('Failed to send email', error);
    });
    
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#B19595',
        padding: '20px',
        margin: '20px',
      }}
    >
      <Typography variant="h4" gutterBottom>Send Email</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Recipient Name"
          name="to_name"
          value={emailDetails.to_name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{background: '#D7B3B3'}}
        />
        <TextField
          label="Your Name"
          name="from_name"
          value={emailDetails.from_name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{background: '#D7B3B3'}}
        />
        <TextField
          label="Message"
          name="message"
          value={emailDetails.message}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          sx={{background: '#D7B3B3'}}
        />
        <StyledButton type="submit" variant="contained">
          Send Email
        </StyledButton>
      </form>
      {responseMessage && (
        <Typography variant="body1" sx={{ marginTop: '20px', color: 'red' }}>
          {responseMessage}
        </Typography>
      )}
    </Box>
  );
}
