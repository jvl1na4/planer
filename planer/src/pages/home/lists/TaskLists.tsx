import { Paper } from '@mui/material';
import AssighmentList from './AssighnementList';
import ProjectList from './ProjectList';
import ToDoList from './ToDoList';

export default function PinnedSubheaderList() {
  return (
    <Paper
      sx={{
        width: '100%',
        bgcolor: '#4D4344',
        maxHeight: '100%'
      }}
      
    >
        <ToDoList />
        <AssighmentList />
        <ProjectList />
    </Paper>
  );
}