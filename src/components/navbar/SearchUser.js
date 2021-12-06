import React from 'react';
import { SearchInput } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import { searchInputLayout } from './styles';



const SeachUser = () => {
    return (
        <div style={searchInputLayout} >
            <SearchInput
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIcon />
            
            
        </div>
    );
}

export default SeachUser;