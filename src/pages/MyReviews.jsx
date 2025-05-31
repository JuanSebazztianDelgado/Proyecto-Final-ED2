
import styles from './MyReviews.module.scss';
import { useReviews } from '../hooks/useReviews';
import ReviewCard from '../components/Reviews/ReviewCard';

const MyReviews = () => {
  const { myReviews, loading } = useReviews();

  if (loading) return <div className={styles.loading}>Cargando reseñas...</div>;

  return (
    <section className={styles.myReviews}>
      <h2>Mis Reseñas ({myReviews.length})</h2>
      
      {myReviews.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No has publicado ninguna reseña todavía.</p>
        </div>
      ) : (
        <div className={styles.reviewsList}>
          {myReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MyReviews;