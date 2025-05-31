import styles from "./MovieCard.module.scss";

const MovieCard = ({ movie, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(movie);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div 
      className={styles.card} 
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalles de ${movie.title}`}
    >
      <div className={styles.imageContainer}>
        <img 
          src={movie.poster} 
          alt={`Póster de ${movie.title}`}
          className={styles.image}
          loading="lazy"
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.year}>{movie.year}</p>
        {movie.genre && (
          <p className={styles.genre}>{movie.genre}</p>
        )}
        {movie.rating && (
          <div className={styles.rating}>
            <span>⭐ {movie.rating}/10</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;