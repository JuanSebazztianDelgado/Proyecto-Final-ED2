// Formatear fecha
export const formatDate = (timestamp) => {
  if (!timestamp) return 'Fecha no disponible';
  
  const date = timestamp?.toDate?.() || new Date(timestamp);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Acortar texto
export const shortText = (text, maxLength = 100) => {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

// Calcular promedio de calificaciones
export const averageRating = (reviews) => {
  if (!reviews || !reviews.length) return 0;
  
  const validReviews = reviews.filter(r => r.rating && r.rating > 0);
  if (!validReviews.length) return 0;
  
  const total = validReviews.reduce((sum, r) => sum + r.rating, 0);
  return (total / validReviews.length).toFixed(1);
};

// Formatear duración de película
export const formatDuration = (minutes) => {
  if (!minutes) return 'N/A';
  
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours === 0) return `${mins}min`;
  if (mins === 0) return `${hours}h`;
  return `${hours}h ${mins}min`;
};

// Capitalizar primera letra
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Validar email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Generar ID único simple
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Formatear número de reseñas
export const formatReviewCount = (count) => {
  if (!count) return 'Sin reseñas';
  return count === 1 ? '1 reseña' : `${count} reseñas`;
};