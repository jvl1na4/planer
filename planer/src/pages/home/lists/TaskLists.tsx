import { Box, Paper } from '@mui/material';
import AssighmentList from './AssighnementList';
import ProjectList from './ProjectList';
import ToDoList from './ToDoList';

export default function TaskLists() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#4D4344',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 690,
        '& ul': { padding: 0 },
      }}
      
    >
      <ToDoList />
      <AssighmentList />
      <ProjectList />
    </Box>
  );
}