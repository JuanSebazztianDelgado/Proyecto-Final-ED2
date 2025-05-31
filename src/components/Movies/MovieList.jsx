import MovieCard from "./MovieCard";
import Loading from "../Common/Loading";
import styles from "./MovieList.module.scss";

const MovieList = ({ movies, onMovieClick, loading = false, title }) => {
  if (loading) {
    return <Loading />;
  }

  if (!movies || movies.length === 0) {
    return (
      <div className={styles.empty}>
        <h3>No se encontraron películas</h3>
        <p>Intenta con otros criterios de búsqueda</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {title && (
        <h2 className={styles.title}>{title}</h2>
      )}
      
      <div className={styles.list}>
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onClick={onMovieClick} 
          />
        ))}
      </div>
      
      <div className={styles.count}>
        {movies.length} película{movies.length !== 1 ? 's' : ''} encontrada{movies.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
};

export default MovieList;