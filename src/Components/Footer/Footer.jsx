import { useState } from 'react';
import './Footer.css';

const inspirationTabs = [
  { id: 'popular', label: 'Popular' },
  { id: 'arts', label: 'Arts & culture' },
  { id: 'beach', label: 'Beach' },
  { id: 'mountains', label: 'Mountains' },
  { id: 'outdoors', label: 'Outdoors' },
  { id: 'things', label: 'Things to do' },
];

const inspirationData = {
  popular: [
    { city: 'St. Petersburg', category: 'Apartment rentals' },
    { city: 'Chicago', category: 'Flat rentals' },
    { city: 'Athens', category: 'Holiday rentals' },
    { city: 'Ocean City', category: 'Apartment rentals' },
    { city: 'San Diego', category: 'House rentals' },
    { city: 'Wilmington', category: 'Cottage rentals' },
    { city: 'Key West', category: 'Apartment rentals' },
    { city: 'Philadelphia', category: 'House rentals' },
    { city: 'Orange Beach', category: 'Cottage rentals' },
    { city: 'Portland', category: 'Apartment rentals' },
    { city: 'Minneapolis', category: 'Monthly Rentals' },
    { city: 'London', category: 'Holiday rentals' },
    { city: 'Detroit', category: 'Apartment rentals' },
    { city: 'Albuquerque', category: 'Apartment rentals' },
    { city: 'Pocono Mountains', category: 'Flat rentals' },
    { city: 'San Juan', category: 'Cabin rentals' },
    { city: 'Savannah', category: 'Cottage rentals' },
  ],
  arts: [
    { city: 'Everglades', category: 'Villa rentals' },
    { city: 'Kirkwood Mountain Resort', category: 'Apartment rentals' },
    { city: 'North Cascades National Park', category: 'Cabin rentals' },
    { city: 'Amalfi Coast', category: 'House rentals' },
    { city: 'Flathead Lake', category: 'Apartment rentals' },
    { city: 'Paris', category: 'Flat rentals' },
    { city: 'Northstar California Resort', category: 'Flat rentals' },
    { city: 'Namba Sta.', category: 'Holiday rentals' },
    { city: 'ESPN Wide World of Sports', category: 'Apartment rentals' },
    { city: 'Phoenix Convention Center', category: 'House rentals' },
    { city: 'Coronado Islands', category: 'House rentals' },
    { city: 'Ortygia', category: 'House rentals' },
    { city: 'Olympic National Park', category: 'Cottage rentals' },
    { city: 'SoFi Stadium', category: 'House rentals' },
    { city: 'The Galleria', category: 'Apartment rentals' },
    { city: 'Le Marais', category: 'Villa rentals' },
    { city: 'Mohican State Park', category: 'Cabin rentals' },
  ],
  // ... (you can add more categories here as needed)
};

export default function Footer() {
  const [activeTab, setActiveTab] = useState('popular');
  const items = inspirationData[activeTab] || inspirationData.popular;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-inspiration">
          <h3 className="inspiration-title">Inspiration for future getaways</h3>
          <div className="inspiration-tabs-container">
            <div className="inspiration-tabs">
              {inspirationTabs.map(tab => (
                <button 
                  key={tab.id}
                  className={`inspiration-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="inspiration-grid">
            {items.map((item, index) => (
              <a href="#" className="inspiration-link" key={index}>
                <div className="inspiration-city">{item.city}</div>
                <div className="inspiration-category">{item.category}</div>
              </a>
            ))}
            <a href="#" className="inspiration-link show-more">
              <div className="inspiration-city">
                Show more
                <svg viewBox="0 0 18 18" style={{height: '12px', width: '12px', marginLeft: '6px'}} fill="currentColor">
                  <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>

        <div className="footer-top">
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">AirCover</a></li>
              <li><a href="#">Anti-discrimination</a></li>
              <li><a href="#">Disability support</a></li>
              <li><a href="#">Cancellation options</a></li>
              <li><a href="#">Report neighbourhood concern</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Hosting</h4>
            <ul>
              <li><a href="#">Airbnb your home</a></li>
              <li><a href="#">AirCover for Hosts</a></li>
              <li><a href="#">Hosting resources</a></li>
              <li><a href="#">Community forum</a></li>
              <li><a href="#">Hosting responsibly</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Airbnb</h4>
            <ul>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">New features</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>© 2026 Airbnb, Inc.</span>
            <span className="footer-dot">·</span>
            <a href="#">Privacy</a>
            <span className="footer-dot">·</span>
            <a href="#">Terms</a>
            <span className="footer-dot">·</span>
            <a href="#">Company details</a>
          </div>
          <div className="footer-bottom-right">
            <button className="footer-locale-btn">🌐 English (IN)</button>
            <button className="footer-locale-btn">₹ INR</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
