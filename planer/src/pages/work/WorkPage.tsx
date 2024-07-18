import { Box, Grid } from "@mui/material";
import Appbar from "../AppBar";
import '/src/App.css';
import EventAndTest from "./lists/EventAndTestW";
import TaskListsW from "./lists/TaskListsW";

export default function HomePage() {
    
    return (
        <>
            <Box sx={{  flexGrow: 1, display: 'flex', flexDirection: 'column', pt: 15, }}> 
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Appbar/>
                    </Grid>
                    <Grid item sm={4}>  
                       <EventAndTest /> 
                    </Grid>
                    <Grid item sm={4}>   
                        <TaskListsW />      
                    </Grid>
                    <Grid item sm={3}>  
                         
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

