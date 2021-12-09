import React from 'react';
import SearchUser from './SearchUser';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { theme } from './styles';
import { ThemeProvider } from '@mui/material/styles';


const Navbar = () => {
   
    return (
        <Box sx={{ flexGrow: 1 }} data-testid="navbar">
            <ThemeProvider theme={theme}>			
                <AppBar position="static" >
                    <Toolbar >
                        <SearchUser />
                    </Toolbar>
                </AppBar>	
            </ThemeProvider>		
		</Box>
    );
}

export default Navbar;
