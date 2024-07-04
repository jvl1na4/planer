import { Box, Button, Grid } from "@mui/material";
import Appbar from "../AppBar";
import '/src/App.css';
import Weather from "./WeatherCard";
import CurrentDateWidget from "./GreatingCard";

export default function HomePage() {
    
    return (
        <>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', pt: 15 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Appbar/>
                    </Grid>
                    <Grid item sm={6}>  
                         <Weather />
                    </Grid>
                    <Grid item sm={6}>   
                        <CurrentDateWidget />            
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
