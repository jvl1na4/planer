import { Box, Button, Grid } from "@mui/material";
import Appbar from "../AppBar";
import '/src/App.css';
import Weather from "./WeatherCard";
import CurrentDateWidget from "./DateCard";
import homepageImage from './homepageImage.jpeg';
import ToDoList from "./lists/ToDoList";
import AssighmentList from "./lists/AssighnementList";
import EventList from "./lists/EventList";
import ProjectList from "./lists/ProjectList";
import TaskLists from "./lists/TaskLists";
import EventAndTest from "./lists/EventAndTest";

export default function HomePage() {
    
    return (
        <>
            <Box sx={{  flexGrow: 1, display: 'flex', flexDirection: 'column', pt: 15, }}> 
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Appbar/>
                    </Grid>
                    <Grid item sm={6}>  
                         <CurrentDateWidget />
                    </Grid>
                    <Grid item sm={6}>   
                        <CurrentDateWidget />            
                    </Grid>
                    <Grid item sm={3}>  
                         <Weather />
                         <img src={homepageImage} alt="meow" style={{ width: '100%', paddingTop: '20px' }}/>
                    </Grid>
                    <Grid item sm={4}>  
                         <TaskLists />
                    </Grid>
                    <Grid item sm={5}>  
                         <EventAndTest />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

