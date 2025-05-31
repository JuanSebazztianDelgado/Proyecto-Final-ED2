import styles from "./StarRating.module.scss";

const StarRating = ({ rating, setRating, readOnly = false, size = "medium" }) => {
  const handleStarClick = (star) => {
    // Solo permite cambiar la calificación si no es solo lectura y hay función setRating
    if (!readOnly && setRating) {
      setRating(star);
    }
  };

  return (
    <div className={`${styles.stars} ${styles[size]} ${readOnly ? styles.readOnly : ''}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? styles.filled : styles.empty}
          onClick={() => handleStarClick(star)}
          style={{ cursor: readOnly ? 'default' : 'pointer' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;