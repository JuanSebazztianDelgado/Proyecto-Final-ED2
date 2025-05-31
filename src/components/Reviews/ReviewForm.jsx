import { useState } from "react";
import StarRating from "./StarRating.jsx";
import styles from "./ReviewForm.module.scss";

const ReviewForm = ({ onSubmit, movieTitle, isLoading = false }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!comment.trim()) {
      newErrors.comment = "El comentario es requerido";
    } else if (comment.trim().length < 10) {
      newErrors.comment = "El comentario debe tener al menos 10 caracteres";
    } else if (comment.trim().length > 500) {
      newErrors.comment = "El comentario no puede exceder 500 caracteres";
    }
    
    if (rating === 0) {
      newErrors.rating = "La calificación es requerida";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const reviewData = {
      comment: comment.trim(),
      rating,
      date: new Date().toISOString(),
      movieTitle: movieTitle || null
    };

    onSubmit(reviewData);
    
    // Limpiar formulario después del envío exitoso
    setComment("");
    setRating(0);
    setErrors({});
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    // Limpiar error de comentario cuando el usuario empiece a escribir
    if (errors.comment) {
      setErrors(prev => ({ ...prev, comment: null }));
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    // Limpiar error de rating cuando el usuario seleccione
    if (errors.rating) {
      setErrors(prev => ({ ...prev, rating: null }));
    }
  };

  const isFormValid = comment.trim() && rating > 0;
  const commentLength = comment.length;

  return (
    <div className={styles.container}>
      {movieTitle && (
        <h3 className={styles.title}>Reseña para: {movieTitle}</h3>
      )}
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="comment" className={styles.label}>
            Tu reseña:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Comparte tu opinión sobre esta película..."
            className={`${styles.textarea} ${errors.comment ? styles.error : ''}`}
            rows={4}
            maxLength={500}
            disabled={isLoading}
          />
          <div className={styles.textareaFooter}>
            <span className={`${styles.charCount} ${commentLength > 450 ? styles.warning : ''}`}>
              {commentLength}/500
            </span>
            {errors.comment && (
              <span className={styles.errorText}>{errors.comment}</span>
            )}
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Calificación:</label>
          <div className={styles.ratingContainer}>
            <StarRating 
              rating={rating} 
              setRating={handleRatingChange}
              size="large"
            />
            {rating > 0 && (
              <span className={styles.ratingText}>
                {rating} de 5 estrellas
              </span>
            )}
          </div>
          {errors.rating && (
            <span className={styles.errorText}>{errors.rating}</span>
          )}
        </div>

        <button 
          type="submit" 
          className={`${styles.submitButton} ${!isFormValid ? styles.disabled : ''}`}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar Reseña'}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;