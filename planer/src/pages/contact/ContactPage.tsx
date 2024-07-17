import { Box, Grid, Typography } from "@mui/material";
import Appbar from "../AppBar";
import '/src/App.css';

export default function ContactPage() {
    
    return (
        <>
        <Box sx={{  flexGrow: 1, display: 'flex', flexDirection: 'column', pt: 15, }}>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <Appbar/>
                </Grid>
                <Grid item sm={6}>  
                     <Box sx={{
                        backgroundColor: '#D7B3B3',
                        color: '#000000',
                        padding: '0px',
                        borderRadius: '0px', 
                        textAlign: 'center',
                        width: '100%', 
                        height: '100%', 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Typography variant="h2" component="div">
                            about me
                        </Typography>
                        <Typography variant="body2" >
                            meow meow :3
                        </Typography>
                    </Box>
                </Grid>
                
            </Grid>
        </Box>
    </>
    );
}
