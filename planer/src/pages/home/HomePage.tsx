import { Box, Grid } from "@mui/material";
import Appbar from "../AppBar";
import '/src/App.css';
import CurrentDateWidget from "./DateCard";
import homepageImage from './img/homepageImage.jpeg';
import catpainting from './img/cat painting _3.jpeg';
import TaskLists from "./lists/TaskLists";
import EventAndTest from "./lists/EventAndTest";
import ZurichWeatherWidget from "./Weathergetter";

export default function HomePage() {
    
    return (
        <>
            <Box sx={{  flexGrow: 1, display: 'flex', flexDirection: 'column', pt: 14, }}> 
                <Grid container spacing={2} columns={{ xs: 24 }} >
                    <Grid item xs={24} >
                        <Appbar/>
                    </Grid>
                    <Grid item xs={21}>  
                         <CurrentDateWidget />
                    </Grid>
                    <Grid item xs={3}>   
                        <img src={catpainting} alt="meow" style={{ width: '100%',  paddingTop: '0px' }}/>            
                    </Grid>
                    <Grid item xs={6}>  
                        <ZurichWeatherWidget />
                         <img src={homepageImage} alt="meow" style={{ width: '100%', paddingTop: 16 }}/>
                    </Grid>
                    <Grid item xs={8}>  
                         <TaskLists />
                    </Grid>
                    <Grid item xs={10}>  
                         <EventAndTest />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

