export default function PropertyCard({ listing }) {
  const toggleFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="property-card">
      <div className="card-carousel">
        <img src={listing.images[0]} alt={listing.location} className="single-card-img" loading="lazy" />

        <button className="card-favorite" onClick={toggleFavorite}>
          <svg viewBox="0 0 32 32"><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z" /></svg>
        </button>

        {listing.isGuestFavourite && <div className="card-badge">Guest favourite</div>}
      </div>

      <div className="card-details">
        <div className="card-location">
          {listing.location.includes("India") ?
            (listing.id % 2 === 0 ? `Flat in ${listing.location.split(',')[0]}` : `Home in ${listing.location.split(',')[0]}`)
            : listing.location}
        </div>
        <div className="card-subtitle">
          {listing.currency}{listing.price.toLocaleString('en-IN')} for 2 nights
          <span className="card-separator">·</span>
          <span className="card-rating">
            <svg viewBox="0 0 32 32" style={{ width: 10, height: 10, fill: 'currentColor' }}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
            {listing.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
