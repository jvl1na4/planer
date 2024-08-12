import { Box, Paper } from '@mui/material';
import EventListS from './EventListS';
import TestListS from './TestListS';

export default function EventAndTestS() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#4D4344',
        position: 'relative',
        overflow: 'auto',
        height: 400,
        maxHeight: 400,
        '& ul': { padding: 0 },
      }}
      
    >
      <EventListS />
      <TestListS />
    </Box>
  );
}