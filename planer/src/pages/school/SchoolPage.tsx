import { Box, Grid } from "@mui/material";
import Appbar from "../AppBar";
import TaskListsS from "./lists/TaskListsS";
import '/src/App.css';
import EventListS from "./lists/EventListS";
import TestList from "../home/lists/TestList";
import TestListS from "./lists/TestListS";

export default function SchoolPage() {
    
    return (
        <>
            <Box sx={{  flexGrow: 1, display: 'flex', flexDirection: 'column', pt: 15, }}> 
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Appbar/>
                    </Grid>
                    <Grid item sm={3}>  
                       <EventListS /> 
                    </Grid>
                    <Grid item sm={6}>   
                        <TestListS />      
                    </Grid>
                    <Grid item sm={3}>  
                         <TaskListsS />
                    </Grid>
                    <Grid item sm={4}>  
                         
                    </Grid>
                    <Grid item sm={5}>  
                         
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
