import React from 'react';
import { SearchInput } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import {SearchInputLayout} from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { backButtonLayout } from './styles';
import { Link, useLocation } from 'react-router-dom';



const SeachUser = () => {
    const location = useLocation()
    if (location.pathname === '/') return (    
        <SearchInputLayout >
            <SearchInput
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIcon />
        </SearchInputLayout>    
        
        
    )
    else return (
        <Link to="/" style={backButtonLayout}><ArrowBackIcon /></Link>
    )
}



export default SeachUser;