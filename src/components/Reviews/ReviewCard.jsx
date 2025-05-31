import styles from "./ReviewCard.module.scss";
import StarRating from "./StarRating.jsx";

const ReviewCard = ({ review }) => {

  // Función para formatear la fecha si existe
  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h4 className={styles.user}>{review.user || 'Usuario Anónimo'}</h4>
        {review.date && (
          <span className={styles.date}>{formatDate(review.date)}</span>
        )}
      </div>
      
      <div className={styles.rating}>
        <StarRating rating={review.rating} readOnly={true} size="small" />
        <span className={styles.ratingNumber}>({review.rating}/5)</span>
      </div>
      
      <p className={styles.comment}>
        {review.comment || 'Sin comentarios'}
      </p>
      
      {review.movieTitle && (
        <div className={styles.movieInfo}>
          <small>Película: {review.movieTitle}</small>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;