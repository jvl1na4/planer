// src/CurrentDateWidget.tsx
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const CurrentDateWidget: React.FC = () => {
  const today = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[today.getDay()];
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });

  // Function to get the ISO week number
  function getWeekNumber(date: Date) {
    const thursday = new Date(date.getFullYear(), date.getMonth(), date.getDate() + (3 - ((date.getDay() + 6) % 7)));
    const firstThursday = new Date(thursday.getFullYear(), 0, 4);
    firstThursday.setDate(firstThursday.getDate() + (3 - ((firstThursday.getDay() + 6) % 7)));
    const weekNumber = 1 + Math.round(((thursday.getTime() - firstThursday.getTime()) / (24 * 60 * 60 * 1000) - 3 + ((firstThursday.getDay() + 6) % 7)) / 7);
    return weekNumber;
  }

  const weekNumber = getWeekNumber(today);

  return (
    <Box
      sx={{
        backgroundColor: '#D7B3B3',
        color: '#000000',
        padding: '0px',
        borderRadius: '0px', 
        textAlign: 'center',
        width: '100%', 
        height: '100%', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={5} sx={{ textAlign: 'center', padding: '10px' }}>
          <Typography variant="body1" component="div" sx={{ fontSize: '40px' }}>
            {dayOfWeek.toLowerCase()}
          </Typography>
          <Typography variant="body1" component="div" sx={{ fontSize: '40px' }}>
            {month.toLowerCase()} {day}
          </Typography>
        </Grid>
        <Grid item xs={7} sx={{ textAlign: 'center', padding: '10px' }}>
          <Typography variant="h3" component="div" sx={{ fontSize: '75px' }}>
            KW {weekNumber < 10 ? '0' + weekNumber : weekNumber}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CurrentDateWidget;
