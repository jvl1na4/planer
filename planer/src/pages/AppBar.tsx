import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Grid } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

//styling für fie App Bar
const StyledAppBar = styled(AppBar)(({theme}) => ({
    backgroundColor: '#7B3445',
    boxShadow: 'none',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    '@media all': {
      minHeight: 128,
    },
}))

// styling für die buttons
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


export default function Appbar() {
  
  return (
      <StyledAppBar position="fixed" color="primary">
        <Toolbar>
            <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
            >

            <Grid container spacing={2}
                alignItems="center"
                columns={{ xs: 5}}>
                <Grid item xs={1}>
                  <StyledButton href='/planer/home'>HOME</StyledButton>
                </Grid>
                <Grid item xs={1}>
                  <StyledButton href='/work'>WORK</StyledButton>
                </Grid>
                <Grid item xs={1}>
                  <StyledButton href='/school'>SCHOOL</StyledButton>
                </Grid>
                <Grid item xs={1}>
                  <StyledButton href='/personal'>PERSONAL</StyledButton>
                </Grid>
                <Grid item xs={1}>
                    <StyledButton href='/contact'>CONTACT</StyledButton>
                </Grid>
            </Grid>
          </Typography>
        </Toolbar>
      </StyledAppBar>
    
  );
}