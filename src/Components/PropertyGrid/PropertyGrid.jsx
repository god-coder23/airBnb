import listings from '../../data/listings';
import PropertyCard from './PropertyCard';
import './PropertyGrid.css';

const rowTitles = [
  "Available in South Goa this weekend",
  "Stay in Mumbai",
  "Available next month in Bengaluru",
  "Explore stays in New Delhi",
  "Top-rated places in Jaipur",
  "Weekend getaways in Pune",
  "Find relaxation in Kerala",
  "Mountain retreats in Manali",
  "Villas in Lonavala"
];

export default function PropertyGrid() {
  const groupedListings = rowTitles.map((title, rowIndex) => {
    return {
      title,
      items: listings.slice(rowIndex * 7, (rowIndex + 1) * 7)
    };
  });

  return (
    <section className="property-grid-section">
      {groupedListings.map((group, index) => (
        <div key={index} className="property-row-container">
          <div className="property-row-header">
            <h2>
              {group.title}
              <span className="title-arrow">
                <svg viewBox="0 0 18 18" style={{ width: 10, height: 10, fill: 'currentColor' }}>
                  <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"></path>
                </svg>
              </span>
            </h2>
            <div className="property-row-nav">
              <button className="nav-arrow left" aria-label="Previous">
                <svg viewBox="0 0 18 18" style={{ width: 12, height: 12, fill: 'currentColor' }}>
                  <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
                </svg>
              </button>
              <button className="nav-arrow right" aria-label="Next">
                <svg viewBox="0 0 18 18" style={{ width: 12, height: 12, fill: 'currentColor' }}>
                  <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="property-row-cards">
            {group.items.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
