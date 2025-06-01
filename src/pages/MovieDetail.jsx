
import { useParams } from 'react-router-dom';
import styles from './MovieDetail.module.scss';
import { findMovieById } from '../utils/moviesData';
import ReviewForm from '../components/Reviews/ReviewForm';
import ReviewCard from '../components/Reviews/ReviewCard';
import { useReviews } from '../hooks/useReviews';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = findMovieById(parseInt(id));
  const { getReviewsByMovie } = useReviews();
  const reviews = getReviewsByMovie(parseInt(id));

  if (!movie) {
    return (
      <div className={styles.notFound}>
        <p>Película no encontrada.</p>
      </div>
    );
  }

  return (
    <section className={styles.detail}>
      <div className={styles.movieInfo}>
        <h1>{movie.title}</h1>
        <div className={styles.movieMeta}>
          <span>{movie.year}</span> • <span>{movie.genre}</span>
        </div>
        {movie.synopsis && <p className={styles.synopsis}>{movie.synopsis}</p>}
      </div>

      <div className={styles.reviewsSection}>
        <h3>Reseñas ({reviews.length})</h3>
        
        {reviews.length === 0 ? (
          <p className={styles.noReviews}>¡Sé el primero en reseñar esta película!</p>
        ) : (
          <div className={styles.reviewsList}>
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
        
        <div className={styles.reviewForm}>
          <h4>Escribir Reseña</h4>
          <ReviewForm movieId={parseInt(id)} />
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;