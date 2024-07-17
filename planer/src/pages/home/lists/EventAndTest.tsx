import { Box, Paper } from '@mui/material';
import EventList from './EventList';
import TestList from './TestList';

export default function EventAndTest() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#4D4344',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 400,
        '& ul': { padding: 0 },
      }}
      
    >
      <EventList />
      <TestList />
    </Box>
  );
}