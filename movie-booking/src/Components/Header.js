import React, { useEffect, useState } from 'react'
import { AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link } from 'react-router-dom';

function Header() {
    const [value, setValue] = useState(0);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getAllMovies().then((data) => setMovies(data.movies)).catch((err) => console.log(err));
    }, []);
  return (
    <div>
        <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
            <Toolbar> 
                <Box width={"20%"}>
                    <MovieIcon />
                </Box>
                <Box width={"30%"} margin={"auto"}>
                    <Autocomplete
                        freeSolo
                        options={movies && movies.map((option) => option.title)}
                        renderInput={(params) => <TextField sx={{  input: { color: "white" } }} variant='standard' {...params} placeholder="Search Across Movies" />}
                    />
                </Box>
                <Box display={"flex"}>
                    <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e, val)=>setValue(val)}>
                        <Tab LinkComponent={Link} to="/movies" label="MOVIES"/>
                        <Tab LinkComponent={Link} to="/admin" label="ADMIN"/>
                        <Tab LinkComponent={Link} to="/auth" label="AUTH"/>
                    </Tabs>
                </Box>
            </Toolbar> 
         </AppBar>
    </div>
  )
}

export default Header