import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import MovieItem from './Movies/MovieItem'
import { Link } from "react-router-dom";
import { getAllMovies } from '../api-helpers/api-helpers';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  console.log(movies);
  console.log("IS ARR", Array.isArray(movies.movies))
  return (
    <Box width="100%" height="100vh" marginTop={2} margin="auto">
        <Box margin={"auto"} width="80%" height="40%" padding={2} display="flex">
        <img
            src="https://i.ytimg.com/vi/yEinBUJG2RI/maxresdefault.jpg"
            alt="Rocketry"
            width="100%"
            height="100%"
        />
        </Box>
        <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign={"center"}>
          Latest Releases
        </Typography>
      </Box>
      <Box
        gap={5}
        margin="auto"
        width="80%"
        flexWrap={"wrap"}
        display="flex"
        justifyContent={"center"}
      >
        {movies && movies.slice(0,4).map((movie, index) => (
            <MovieItem id={movie.id} title={movie.title} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate} key={index}/>
        ))}
      </Box>
      <Box display={"flex"} padding={5} margin="auto">
        <Button
          variant="outlined"
          LinkComponent={Link}
          to="/movies"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View All Movies
        </Button>
      </Box>
    </ Box>
  )
}

export default HomePage