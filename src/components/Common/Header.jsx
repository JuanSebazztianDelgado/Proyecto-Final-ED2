import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import styles from "./Header.module.scss";

const Header = () => {
  const { user, logout } = useAuthContext();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">🎬 MovieReviews</Link>
        </div>
        
        <div className={styles.links}>
          <Link to="/" className={styles.link}>Inicio</Link>
          
          {user && (
            <>
              <Link to="/my-reviews" className={styles.link}>Mis Reseñas</Link>
              <Link to="/watchlist" className={styles.link}>Mi Lista</Link>
            </>
          )}
          
          {!user ? (
            <div className={styles.authLinks}>
              <Link to="/login" className={styles.link}>Iniciar Sesión</Link>
              <Link to="/register" className={styles.linkButton}>Registrarse</Link>
            </div>
          ) : (
            <div className={styles.userSection}>
              <span className={styles.userName}>
                Hola, {user.displayName || user.email}
              </span>
              <button 
                onClick={logout}
                className={styles.logoutButton}
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;