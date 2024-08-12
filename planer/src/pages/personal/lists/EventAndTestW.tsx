import { Box, Paper } from '@mui/material';
import EventListW from './EventListW';
import TestListW from './TestListW';

export default function EventAndTestW() {
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
      <EventListW />
      <TestListW />
    </Box>
  );
}