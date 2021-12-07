import React from 'react';
import SearchUser from './SearchUser';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { displayLayout } from './styles';
import { theme } from './styles';
import { ThemeProvider } from '@mui/material/styles';
import Brightness5Icon from '@mui/icons-material/Brightness5';

const Navbar = () => {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={theme}>			
                <AppBar position="static" >
                    <Toolbar style={displayLayout}>
                        <Brightness5Icon />
                        <SearchUser />
                    </Toolbar>
                </AppBar>	
            </ThemeProvider>		
		</Box>
    );
}

export default Navbar;