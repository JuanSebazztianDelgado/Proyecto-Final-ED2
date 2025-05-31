// src/utils/moviesData.js
export const moviesData = [
  {
    id: 'tt4154796',
    title: 'Avengers: Endgame',
    year: 2019,
    genre: 'Action',
    duration: 181,
    director: 'Anthony Russo, Joe Russo',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    description: 'After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.',
    rating: 8.4
  },
  {
    id: 'tt7286456',
    title: 'Joker',
    year: 2019,
    genre: 'Drama',
    duration: 122,
    director: 'Todd Phillips',
    poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    description: 'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.',
    rating: 8.4
  },
  {
    id: 'tt6751668',
    title: 'Parasite',
    year: 2019,
    genre: 'Thriller',
    duration: 132,
    director: 'Bong Joon Ho',
    poster: 'https://m.media-amazon.com/images/M/MV5BYWZjMjc3M2QtNWg0ZC00M2Q2LWFmZWQtYzYzYWE3MzAxZWYxXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
    description: 'A poor family schemes to become employed by a wealthy family and infiltrate their household.',
    rating: 8.6
  },
  {
    id: 'tt1375666',
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    duration: 148,
    director: 'Christopher Nolan',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.',
    rating: 8.8
  },
  {
    id: 'tt0111161',
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    duration: 142,
    director: 'Frank Darabont',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 9.3
  },
  {
    id: 'tt0468569',
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    duration: 152,
    director: 'Christopher Nolan',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.',
    rating: 9.0
  },
  {
    id: 'tt0167260',
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    genre: 'Fantasy',
    duration: 201,
    director: 'Peter Jackson',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWI5MTktXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam.',
    rating: 8.9
  },
  {
    id: 'tt0108052',
    title: 'Schindler\'s List',
    year: 1993,
    genre: 'Biography',
    duration: 195,
    director: 'Steven Spielberg',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    description: 'In German-occupied Poland, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce.',
    rating: 8.9
  },
  {
    id: 'tt0110912',
    title: 'Pulp Fiction',
    year: 1994,
    genre: 'Crime',
    duration: 154,
    director: 'Quentin Tarantino',
    poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
    rating: 8.9
  },
  {
    id: 'tt0137523',
    title: 'Fight Club',
    year: 1999,
    genre: 'Drama',
    duration: 139,
    director: 'David Fincher',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club.',
    rating: 8.8
  }
];

// Función helper para buscar películas
export const findMovieById = (id) => {
  return moviesData.find(movie => movie.id === id);
};

// Función helper para buscar por género
export const getMoviesByGenre = (genre) => {
  return moviesData.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
};

// Función helper para buscar por título
export const searchMovies = (query) => {
  return moviesData.filter(movie => 
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
};

// Obtener todos los géneros únicos
export const getGenres = () => {
  const genres = moviesData.map(movie => movie.genre);
  return [...new Set(genres)];
};