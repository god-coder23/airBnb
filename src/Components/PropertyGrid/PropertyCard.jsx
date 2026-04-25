import React, { useState } from 'react';

export default function PropertyCard({ listing }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <div className="property-card">
      <div className="card-carousel">
        <img src={listing.images[0]} alt={listing.location} className="single-card-img" loading="lazy" />

        <button className={`card-favorite ${isLiked ? 'liked' : ''}`} onClick={toggleFavorite}>
          <svg viewBox="0 0 32 32"><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z" /></svg>
        </button>

        {listing.isGuestFavourite && <div className="card-badge">Guest favourite</div>}
      </div>

      <div className="card-details">
        <div className="card-location">
          {listing.title || listing.location}
        </div>
        <div className="card-subtitle">
          <span className="card-price">
            {listing.priceText}
          </span>
        </div>
      </div>
    </div>
  );
}
