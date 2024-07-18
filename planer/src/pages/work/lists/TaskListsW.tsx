import { Box, Paper } from '@mui/material';
import AssighmentList from './AssighnementListW';
import ProjectList from './ProjectListW';
import ToDoList from './ToDoListW';

export default function TaskListsW() {
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