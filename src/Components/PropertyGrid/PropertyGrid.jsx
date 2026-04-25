import React, { useRef, useState, useEffect } from 'react';
import listings from '../../Data/Listings';
import PropertyCard from './PropertyCard';
import './PropertyGrid.css';

const rowTitles = [
  "Available in South Goa this weekend",
  "Stay in Mumbai",
  "Available next month in Bengaluru",
  "Popular homes in Pune",
  "Amazing views in Lonavala",
  "Trending right now",
  "Beachfront villas in Goa"
];

function PropertyRow({ group }) {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft <= 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const clientWidth = scrollRef.current.clientWidth;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const stackImages = group.items.slice(0, 3).map(item => item.images[0]);

  return (
    <div className="property-row-container">
      <div className="property-row-header">
        <div className="title-wrapper">
          <h2>{group.title}</h2>
          <span className="title-arrow">
            <svg viewBox="0 0 18 18" style={{ width: 14, height: 14, fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
              <path d="M1 9h16M11 3l6 6-6 6" />
            </svg>
          </span>
        </div>
        <div className="property-row-nav">
          <button 
            className={`nav-arrow left ${isAtStart ? 'disabled' : ''}`} 
            onClick={() => scroll('left')}
            disabled={isAtStart}
            aria-label="Previous"
          >
            <svg viewBox="0 0 18 18" style={{ width: 12, height: 12, fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
              <path d="M11 15l-6-6 6-6" />
            </svg>
          </button>
          <button 
            className={`nav-arrow right ${isAtEnd ? 'disabled' : ''}`} 
            onClick={() => scroll('right')}
            disabled={isAtEnd}
            aria-label="Next"
          >
            <svg viewBox="0 0 18 18" style={{ width: 12, height: 12, fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
              <path d="M7 15l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="property-row-cards" ref={scrollRef} onScroll={handleScroll}>
        {group.items.map((listing) => (
          <PropertyCard key={listing.id} listing={listing} />
        ))}
        
        <div className="see-all-card">
          <div className="photo-stack">
            {stackImages[0] && <img src={stackImages[0]} alt="" className="stack-img left-img" />}
            {stackImages[1] && <img src={stackImages[1]} alt="" className="stack-img right-img" />}
            {stackImages[2] && <img src={stackImages[2]} alt="" className="stack-img center-img" />}
          </div>
          <span className="see-all-text">See all</span>
        </div>
      </div>
    </div>
  );
}

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
        <PropertyRow key={index} group={group} />
      ))}
    </section>
  );
}
