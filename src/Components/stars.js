import React from 'react';

// Définition d'un composant fonctionnel StarRating qui prend une prop 'rating'
const StarRating = ({ rating }) => {
  // Utilisation de Array.from pour créer un tableau de longueur égale à la note
  const stars = Array.from({ length: rating }, (_, index) => index + 1);

  return (
    <div>
      {/* Utilisation de la méthode map pour créer un span avec une étoile pour chaque élément du tableau 'stars' */}
      {stars.map((star) => (
        <span key={star} role="img" aria-label="star">
          ⭐️
        </span>
      ))}
    </div>
  );
};

export default StarRating;
