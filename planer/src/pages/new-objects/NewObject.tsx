import { Box, Button, Card, Grid, Stack, styled } from "@mui/material";
import Appbar from "../AppBar";
import '/src/App.css';
import { useNavigate } from "react-router-dom";

export default function NewObject() {
    
    const StyledButton = styled(Button)(({}) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#51202C',
    color: '#AAAAAA',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#1F090C',
        boxShadow: 'none',
    }
    }));

    let navigate = useNavigate();

    return (
        <>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                }}
            >
            <Card sx={{ padding: '20px', minWidth: '300px', background: '#B19595' }}>
                <Stack direction="column" spacing={5}>
                    <StyledButton onClick={() => navigate('/newObject/NewTest')}>Add New Test</StyledButton>
                    <StyledButton onClick={() => navigate('/newObject/NewEvent')}>Add New Event</StyledButton>
                    <StyledButton onClick={() => navigate('/newObject/NewToDo')}>Add New To-Do</StyledButton>
                    <StyledButton onClick={() => navigate('/newObject/NewAssighnement')}>Add New Assighnement</StyledButton>
                    <StyledButton onClick={() => navigate('/newObject/NewProject')}>Add New Project</StyledButton>
                </Stack>
            </Card>
            </Box>
        </>
    );
}

