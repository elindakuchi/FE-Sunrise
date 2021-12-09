import React from 'react';
import { SearchInput } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import {SearchInputLayout} from './styles';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { backButtonLayout } from './styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { displayLayout } from './styles';


const SeachUser = () => {

    const location = useLocation()
    const navigate = useNavigate()

    if ((location.pathname === '/') || (location.pathname.includes('?searchTerm='))) return (    
        <div style={displayLayout}>
            <Brightness5Icon  />
            <SearchInputLayout >
                <SearchInput
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={({target})=>navigate(`?searchTerm=${target.value}`)}
                />
                <SearchIcon />
            </SearchInputLayout>   
        </div>  
    )
    else return (
        <Link to="/" style={backButtonLayout}><ArrowBackIcon /></Link>
    )
}



export default SeachUser;

