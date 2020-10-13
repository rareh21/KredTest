import React from "react";
import history from '../lib/history';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { screen } from '../actions';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const dispatch = useDispatch(); 
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    function handleScreen2() {
      dispatch(screen(poster, movie.Title, movie.Year));
      history.push("/screen2");
    }
  return (
     <div>
       <div>
          <div>
              <Card style={{ width: '18rem' }} onClick={handleScreen2}>
                  <Card.Img variant="top"
                      width="200"
                      alt={`The movie titled: ${movie.Title}`}
                      src={poster}  />
                  <Card.Body>
                      <Card.Title>{movie.Title}</Card.Title>
                      <Card.Text>
                      {movie.Year}
                      </Card.Text>

                   </Card.Body>
                </Card>                      
          </div>                               
        </div>
     </div>
  );
};

export default Movie;
