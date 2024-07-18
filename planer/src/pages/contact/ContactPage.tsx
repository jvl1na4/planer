import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import Appbar from "../AppBar";
import '/src/App.css';
import ContactForm from "./ContactForm";

export default function ContactPage() {
    
    return (
        <>
        <Box sx={{  flexGrow: 1, display: 'flex', flexDirection: 'column', pt: 15, }}>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <Appbar/>
                </Grid>
                <Grid item xs={3}>
                    
                </Grid>
                <Grid item sm={6}>  
                     <Box sx={{
                        backgroundColor: '#D7B3B3',
                        color: '#000000',
                        padding: '0px',
                        borderRadius: '0px', 
                        textAlign: 'center',
                        width: '1000px', 
                        height: '100%', 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Stack direction={'column'} spacing={2}>
                            <Typography variant="h2" component="div">
                                about me
                            </Typography>
                            <Typography variant="body2" >
                                i made this website because i am mentally limited (adhd) and i would 
                                like to remember but can't remember.
                            </Typography>
                            <Typography variant="body2" >
                                if you happen to find bugs (you wont, im amazing) or you have wishes or 
                                something you feel the need to say, fill out this funny form:
                            </Typography>
                            <Typography>
                                the amount of emails this can send is limited and if you spam i will 
                                take the website down... stick to dms if you have a lot to say
                            </Typography>
                            <ContactForm />
                            <Card sx={{
                                backgroundColor: '#D7B3B3',
                                
                            }}>
                                <Typography>other contact possibilities:</Typography>
                                <Typography>discord: ratsarcool</Typography>
                            </Card>
                                    
                                
                        </Stack>
                        
                    </Box>
                </Grid>
                
            </Grid>
        </Box>
    </>
    );
}
