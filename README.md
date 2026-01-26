# Lead City Shuttle - MVP Web Application

**Safe, Affordable Group Transport for Lead City University Students**

A responsive web application MVP for a student shared-bus booking platform, built for demo and presentation to sponsors, school management, and partners.

## Project Overview

Lead City Shuttle is a pilot transportation service connecting **Soka Junction** to **Lead City University**. Each bus carries 30-35 students per trip with a fixed schedule at 7:30 AM, 8:30 AM, and 4:30 PM.

### Target Users
- Lead City University students
- School administration (operator view)
- Sponsors and partners

## Tech Stack

- **Frontend**: React 19 + Vite 7
- **Styling**: Tailwind CSS 4 + PostCSS
- **State Management**: React Hooks (useState, useContext, useEffect)
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Build Tool**: Vite with HMR

**No backend required** - Uses mock data and local state

## Project Structure

```
lead-city-shuttle/
├── src/
│   ├── components/
│   │   └── Layout.jsx              # Main layout with navbar, footer, routing
│   ├── context/
│   │   └── TripContext.jsx         # State management, trip data, booking logic
│   ├── pages/
│   │   ├── Landingpage.jsx         # Hero, features, schedule showcase
│   │   ├── Bookingpage.jsx         # Trip selection, booking UI
│   │   └── Adminpage.jsx           # Operator dashboard, trip manifest
│   ├── App.jsx                     # App routing setup
│   ├── main.jsx                    # React entry point
│   ├── index.css                   # Global styles, animations
│   ├── App.css                     # Component-specific styles
│
├── public/                          # Static assets
├── package.json                     # Dependencies
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind theme config
├── postcss.config.js                # PostCSS config
├── index.html                       # HTML entry point
└── README.md                        # This file
```

## Features (MVP)

### 1. Landing Page (`/`)
- **Hero Section**: "Safe, Affordable Group Transport for Lead City Students"
- **Call-to-Action Buttons**: "Book a Ride" and "Partner With Us"
- **Features Showcase**: Route, capacity, schedule
- **Schedule Display**: Today's trips with seat availability
- **Benefits Section**: Why students love the service
- **Professional Design**: Modern startup aesthetic

### 2. Booking Page (`/book`)
- **Trip Selection**: Choose from 3 daily trips (7:30 AM, 8:30 AM, 4:30 PM)
- **Real-time Availability**: Shows available seats per trip
- **Drop-off Options**: 
  - School Gate
  - School Car Park
- **Seat Counter**: Live updates on seat availability
- **Booking Confirmation**: Modal with trip details
- **Mobile Responsive**: Works seamlessly on all devices

### 3. Operator Dashboard (`/admin`)
- **Key Metrics Dashboard**:
  - Total passengers across all trips
  - Fleet occupancy rate (%)
  - Available seats remaining
  - Active trips count
- **Trip Manifest**: Detailed view of each trip
  - Departure time and route
  - Occupancy progress bar
  - Passenger list
  - Status badges (FULL, ALMOST FULL, FILLING)
- **Real-time Updates**: See bookings as they happen

## Mock Data

The application includes realistic mock data:

```javascript
// Three daily trips with full passenger lists
Trip 1: 7:30 AM  - 18/30 seats booked
Trip 2: 8:30 AM  - 28/30 seats booked (almost full)
Trip 3: 4:30 PM  - 5/35 seats booked (plenty of space)

// 51 sample student names representing booked passengers
```

## Setup Instructions

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

1. **Clone/Navigate to project**:
   ```bash
   cd lead-city-shuttle
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/` (or next available port)

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## Architecture & Code Organization

### Context API (State Management)

**TripContext.jsx** manages:
- List of available trips with real-time capacity
- Booking functionality
- Passenger lists
- Drop-off location options

```javascript
// Usage in components
const { trips, bookSeat, getAvailableSeats, dropoffLocations } = useTrips();
```

### Component Hierarchy

```
<App>
  └── <Layout>          (Nav + Footer)
      ├── <LandingPage>     (Route: /)
      ├── <BookingPage>     (Route: /book)
      └── <AdminPage>       (Route: /admin)
```

### Styling Approach

- **Tailwind CSS**: Utility-first responsive design
- **Custom Theme**: Brand colors (primary blue)
- **Animations**: Smooth fade-in/slide-up effects
- **Mobile First**: Responsive grid and flexbox layouts
- **Accessibility**: Proper contrast ratios, keyboard navigation

## Key Features Explained

### Real-time Seat Availability
Bookings instantly update the available seat count:
```javascript
const bookSeat = (tripId, dropoffLocation) => {
  // Update trip occupancy
  // Add passenger to list
  // Update status (Filling → Full)
}
```

### Status Indicators
- **Green (Filling)**: Less than 90% booked
- **Amber (Almost Full)**: 90%+ booked
- **Red (Full)**: 100% capacity reached

### Responsive Design Breakpoints
- **Mobile (< 640px)**: Single column, full-width buttons
- **Tablet (640px-1024px)**: Two-column layouts
- **Desktop (> 1024px)**: Full three-column layouts with sidebars

## Non-Goals (Not Implemented)

❌ Authentication / User accounts  
❌ Payment gateway integration  
❌ Live GPS tracking  
❌ Database / Backend API  
❌ Email notifications  
❌ Multi-language support  

These can be added in Phase 2 of development.

## Performance Optimizations

- Vite for instant HMR and fast builds
- React hooks for efficient re-renders
- CSS framework for minimal bundle size
- No unnecessary API calls (mock data)

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Presentation Tips

1. **Demo Flow**:
   - Start at landing page to show the concept
   - Navigate to booking page and make a sample booking
   - Show confirmation modal
   - Check operator dashboard to see the booking

2. **Highlight**:
   - Real-time seat availability updates
   - Responsive mobile design
   - Clean, professional UI
   - Fast, smooth interactions

3. **For Sponsors**:
   - Show scalability (easy to add more trips)
   - Show customization possibilities
   - Demo data represents real demand

## Development Notes

### Adding New Trips

Edit `TripContext.jsx` to add new trips:
```javascript
const INITIAL_TRIPS = [
  {
    id: 4,
    time: '6:00 AM',
    capacity: 30,
    booked: 0,
    passengers: [],
    status: 'Filling'
  }
];
```

### Customizing Colors

Edit `tailwind.config.js` to change brand colors:
```javascript
brand: {
  600: '#2563eb', // Change this hex code
}
```

### Adding New Pages

1. Create new file in `src/pages/`
2. Add route in `App.jsx`
3. Add navigation link in `Layout.jsx`

## Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 5174
```

**Styles not updating?**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

**Module not found?**
- Run `npm install` again
- Check file names are correct (case-sensitive)

## Future Enhancements

- User authentication and profiles
- Payment integration
- SMS/Email notifications
- Real GPS tracking
- Database integration
- Admin panel for trip management
- Rating and review system
- Multiple routes support

## Credits

Built with:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [React Router](https://reactrouter.com)

## License

This MVP is built for demo and presentation purposes.

---

**Last Updated**: January 2025  
**Version**: 1.0.0-MVP  
**Status**: Ready for Demo & Presentation
