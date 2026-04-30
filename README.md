# Airbnb Clone

A modern property rental listing application built with React and Vite. Browse and discover amazing stays across India with an intuitive search and filtering interface.
Website Deployed Link: https://airbnb-xi-eight.vercel.app/

## Features

- 🏠 **Property Listings** - Browse a curated collection of properties with detailed information
- 🔍 **Advanced Search** - Filter properties by destination, dates, and number of guests
- ⭐ **Ratings & Reviews** - View guest ratings and identify guest favorites
- 📅 **Date Picker** - Seamless date selection for your travel dates
- 🎨 **Modern UI** - Beautiful, responsive design built with Tailwind CSS
- ⚡ **Lightning Fast** - Optimized with Vite for instant development and fast builds
- 🎬 **Smooth Animations** - Engaging animations powered by GSAP

## Tech Stack

- **React 19** - Latest React with improved performance
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **React Day Picker** - Flexible date selection component
- **Lucide React** - Beautiful icon library
- **ESLint** - Code quality and style consistency

## Project Structure

```
src/
├── Components/
│   ├── Navbar/           # Navigation bar with search filters
│   │   ├── Navbar.jsx
│   │   ├── Date.jsx
│   │   ├── Destination.jsx
│   │   └── Guests.jsx
│   ├── PropertyGrid/      # Property listings display
│   │   ├── PropertyGrid.jsx
│   │   ├── PropertyCard.jsx
│   │   └── PropertyGrid.css
│   └── Footer/            # Footer component
├── Data/
│   └── Listings.js        # Property listing data
├── App.jsx                # Main application component
├── main.jsx               # React DOM entry point
├── App.css                # Global application styles
└── index.css              # Base styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd airbnb-main
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Check code quality:
```bash
npm run lint
```

## Features in Detail

### Search & Filter
- **Destination** - Search properties by location
- **Dates** - Select your travel dates with an interactive date picker
- **Guests** - Specify the number of guests

### Property Cards
- High-quality property images
- Price information in local currency
- Guest ratings and reviews
- Guest Favorite badge for top-rated properties
- Distance and availability information

### Responsive Design
The application is fully responsive and works seamlessly on:
- Desktop browsers
- Tablets
- Mobile devices

## Deployment

The project is configured for deployment on Vercel:

```bash
vercel build --prod && vercel deploy --prebuilt --prod
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Future Enhancements

- User authentication and booking system
- Property detail pages with full information
- User reviews and ratings submission
- Wishlist functionality
- Advanced filtering options
- Map view integration
- Payment processing

---

Built with ❤️ using React and Vite
