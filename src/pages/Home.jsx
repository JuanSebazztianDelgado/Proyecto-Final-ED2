
import { useAuth } from '../hooks/useAuth';
import styles from './Home.module.scss';
import MovieList from '../components/Movies/MovieList';

const Home = () => {
  const { user } = useAuth();

  return (
    <section className={styles.home}>
      <div className={styles.welcome}>
        <h1>Bienvenido{user ? `, ${user.displayName || user.email}` : ''}</h1>
        <p>Descubre y reseña tus películas favoritas</p>
      </div>
      
      <div className={styles.moviesSection}>
        <h2>Películas Disponibles</h2>
        <MovieList />
      </div>
    </section>
  );
};

export default Home;