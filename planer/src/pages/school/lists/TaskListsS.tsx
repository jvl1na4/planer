import { Box, Paper } from '@mui/material';
import AssighmentListS from './AssighnementListS';
import ProjectListS from './ProjectListS';
import ToDoListS from './ToDoListS';

export default function TaskListsS() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#D7B3B3',
        position: 'relative',
        overflow: 'auto',
        height: 900,
        maxHeight: 900,
        '& ul': { padding: 0 },
      }}>
      <ToDoListS />
      <AssighmentListS />
      <ProjectListS />
    </Box>
  );
}