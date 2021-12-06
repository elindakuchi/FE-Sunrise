import React from 'react';
import { SearchInput } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import {SearchInputLayout} from './styles';



const SeachUser = () => {
    return (
        <SearchInputLayout >
            <SearchInput
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIcon />
        </SearchInputLayout>
    );
}

export default SeachUser;