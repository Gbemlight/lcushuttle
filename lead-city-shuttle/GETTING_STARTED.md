# Lead City Shuttle MVP - Getting Started Guide

## Quick Start

### Installation & Running

```bash
# Navigate to project directory
cd lead-city-shuttle

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

The application will be available at **http://localhost:5174/** (or the next available port).

## What You Get

A fully functional, production-ready MVP with:

✅ **Responsive Web Application** - Works on desktop, tablet, and mobile  
✅ **Three Complete Pages** - Landing, Booking, and Operator Dashboard  
✅ **Real-time State Management** - React Context API with mock data  
✅ **Professional UI/UX** - Modern design with Tailwind CSS  
✅ **Smooth Animations** - Fade-in modals and transitions  
✅ **Realistic Mock Data** - 51 sample passengers across 3 daily trips  

## Page Overview

### 1. Landing Page (/)
- Hero section with compelling messaging
- Feature highlights
- Daily schedule with live seat availability
- Call-to-action buttons
- Benefits section

**URL:** `http://localhost:5174/`

### 2. Booking Page (/book)
- Select from 3 daily trips
- Choose drop-off location (Gate or Car Park)
- Real-time seat availability counter
- Visual seat availability bars
- Booking confirmation modal

**URL:** `http://localhost:5174/book`

### 3. Operator Dashboard (/admin)
- Key metrics dashboard (occupancy %, total passengers, available seats)
- Trip manifest with real-time data
- Passenger lists for each trip
- Status indicators (FILLING, ALMOST FULL, FULL)
- Occupancy progress bars

**URL:** `http://localhost:5174/admin`

## Demo Workflow

Perfect for presentations to sponsors and school management:

1. **Start**: Open landing page and explain the value proposition
2. **Demo Booking**: 
   - Navigate to /book
   - Select a trip (show different availability levels)
   - Choose drop-off location
   - Complete a booking (shows confirmation modal)
   - Watch seat count update in real-time
3. **Show Operations**: 
   - Navigate to /admin
   - Show the operator dashboard
   - Highlight the last booking reflected in the data
   - Point out occupancy metrics

## Key Features

### Real-time Seat Updates
When a booking is made:
- Available seats decrease immediately
- Booking appears in passenger list
- Occupancy bar updates instantly
- Status may change (e.g., "Filling" → "Almost Full")

### Responsive Design
- **Mobile (<640px)**: Single column, full-width buttons
- **Tablet (640-1024px)**: Two-column layouts
- **Desktop (>1024px)**: Optimized three-column layouts

### Mock Data Details
```
Trip 1 (7:30 AM): 18/30 seats booked
Trip 2 (8:30 AM): 28/30 seats booked (almost full)
Trip 3 (4:30 PM): 5/35 seats booked (plenty available)

Total passengers: 51 students
All with realistic Nigerian names
```

## Customization

### Change Colors
Edit `tailwind.config.js` and modify the `brand` color palette:

```javascript
brand: {
  600: '#2563eb',  // Change this primary color
}
```

### Add More Trips
Edit `src/context/TripContext.jsx` and add to `INITIAL_TRIPS`:

```javascript
{
  id: 4,
  route: 'Soka Junction → Lead City University',
  time: '6:00 AM',
  capacity: 30,
  booked: 0,
  passengers: [],
  status: 'Filling'
}
```

### Change Drop-off Locations
Edit the `DROPOFF_LOCATIONS` array in `TripContext.jsx`:

```javascript
const DROPOFF_LOCATIONS = [
  { id: 'custom', name: 'Custom Location', description: 'Description' },
];
```

## Production Build

To create an optimized production build:

```bash
npm run build
```

Output will be in the `dist/` folder. Deploy these files to any static hosting.

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Project Structure

```
src/
├── components/
│   └── Layout.jsx           # Navigation & Footer
├── context/
│   └── TripContext.jsx      # State management & mock data
├── pages/
│   ├── Landingpage.jsx      # Hero & features
│   ├── Bookingpage.jsx      # Trip selection & booking
│   └── Adminpage.jsx        # Operator dashboard
├── App.jsx                   # Routing setup
├── main.jsx                  # React entry point
├── index.css                 # Global styles
└── App.css                   # Component styles
```

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool & dev server
- **Tailwind CSS 4** - Styling framework
- **React Router v7** - Routing
- **Lucide Icons** - Beautiful icons
- **React Context** - State management

## Troubleshooting

### Port 5174 already in use?
Vite will automatically use the next available port.

### Styles not updating?
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Restart the dev server

### Module not found errors?
Run `npm install` again to ensure all dependencies are installed.

### Need to access from network?
Run with: `npm run dev -- --host`
Then visit the IP address shown in terminal output.

## Next Steps (Future Enhancements)

1. **Backend Integration**
   - Connect to Node.js/Express API
   - Implement database (MongoDB/PostgreSQL)
   - Add authentication

2. **Payment**
   - Integrate payment gateway (Flutterwave, Stripe)
   - Generate invoices

3. **Notifications**
   - SMS/Email confirmations
   - Reminder notifications before departure

4. **Advanced Features**
   - Real GPS tracking
   - Customer ratings & reviews
   - Admin management panel
   - Multi-route support
   - Refund policies

5. **Deployment**
   - Deploy to Vercel, Netlify, or AWS
   - Set up CI/CD pipeline
   - Custom domain

## Questions?

Refer to the README.md file for detailed documentation about:
- Component architecture
- Context API implementation
- Styling approach
- Responsive design patterns
- Performance optimizations

---

**Version:** 1.0.0-MVP  
**Last Updated:** January 2025  
**Status:** Ready for Demo & Presentation
