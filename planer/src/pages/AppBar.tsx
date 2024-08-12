import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Grid } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


//styling für fie App Bar
const StyledAppBar = styled(AppBar)(({theme}) => ({
    backgroundColor: '#7B3445',
    boxShadow: 'none',
    paddingTop: theme.spacing(1),
    alignContent: 'center',
    paddingBottom: theme.spacing(2),
    '@media all': {
      minHeight: 113,
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
  
  const navigate = useNavigate();

  const handleClearKey = () => {
    localStorage.removeItem('hashedKey');
    navigate('/login');
  };

  return (
    <StyledAppBar position="fixed" color="primary">
      <Toolbar>
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
        >
        </Typography>
        <Grid container spacing={2} columns={{ xs: 6 }}>
          <Grid item xs={1}>
            <StyledButton onClick={() => navigate('/home')}>HOME</StyledButton>
          </Grid>
          <Grid item xs={1}>
            <StyledButton onClick={() => navigate('/work')}>WORK</StyledButton>
          </Grid>
          <Grid item xs={1}>
            <StyledButton onClick={() => navigate('/school')}>SCHOOL</StyledButton>
          </Grid>
          <Grid item xs={1}>
            <StyledButton onClick={() => navigate('/personal')}>PERSONAL</StyledButton>
          </Grid>
          <Grid item xs={1}>
            <StyledButton onClick={() => navigate('/contact')}>CONTACT</StyledButton>
          </Grid>
          <Grid item xs={1}>
            <StyledButton onClick={handleClearKey}> LOGOUT </StyledButton>
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};
