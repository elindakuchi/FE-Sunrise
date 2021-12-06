import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#AD0F5B',
      },     
    },
  });


// Nav layout
export const displayLayout = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

// Search bar styling
export const SearchInput = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      
    },
    
  }));

export const searchInputLayout = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingRight: `calc(1em + ${theme.spacing(0.1)})`,
    borderRadius: '5px',
}

