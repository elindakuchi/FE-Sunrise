import React, { useContext, useState } from 'react';
import { SearchInput } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import {SearchInputLayout} from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { backButtonLayout } from './styles';
import { Link, useLocation } from 'react-router-dom';



import { UserContext } from '../../UserProvider';
import data from './testData.json'


const SeachUser = () => {
    const location = useLocation()

    // const [searchTerm,setSearchTerm] = useState('')


    if (location.pathname === '/') return (    
        <SearchInputLayout >
            <SearchInput
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            //   onChange={e=>setSearchTerm(e.target.value)}
            />
            <SearchIcon />
        </SearchInputLayout>    
        
        
    )
    else return (
        <Link to="/" style={backButtonLayout}><ArrowBackIcon /></Link>
    )
}



export default SeachUser;