# Lead City Shuttle - Code Documentation

## Architecture Overview

The application follows a component-based architecture with centralized state management using React Context API.

```
App (Routing & Context Provider)
├── Layout (Navigation & Footer)
│   ├── Navbar (Links to all pages)
│   ├── Outlet (Page content)
│   └── Footer (Copyright & links)
│
├── LandingPage (Hero & Features)
├── BookingPage (Trip Selection & Booking)
└── AdminPage (Operator Dashboard)

TripContext (Centralized State)
├── trips (list of daily trips)
├── bookings (booking history)
├── bookSeat() (add booking)
├── getAvailableSeats() (utility)
└── dropoffLocations (locations list)
```

## State Management (TripContext.jsx)

### Mock Data Structure

```javascript
// Each trip contains:
{
  id: 1,                    // Unique identifier
  route: string,            // Full route name
  shortRoute: string,       // Abbreviated route
  time: string,             // Departure time (24-hour)
  capacity: number,         // Total seats
  booked: number,           // Occupied seats
  passengers: string[],     // List of passenger names
  status: 'Filling' | 'Full'
}
```

### Context API Hook

```javascript
const { trips, bookings, bookSeat, getAvailableSeats, dropoffLocations } = useTrips();
```

### bookSeat() Function

```javascript
// When called with tripId and dropoff location:
// 1. Checks if trip has available seats
// 2. Increments booked count
// 3. Adds passenger to list
// 4. Updates status if needed
// 5. Stores booking in bookings array
// 6. Returns booking object for confirmation

const booking = bookSeat(tripId, dropoffId, passengerName);
if (booking) {
  // Show confirmation modal
}
```

## Page Components

### LandingPage.jsx

**Purpose:** First impression, value proposition showcase

**Features:**
- Hero section with gradient background
- Three feature cards (Route, Capacity, Schedule)
- Today's schedule display with availability badges
- Benefits section with checkmark icons
- CTA footer section

**Key Props:** None (uses context)

**State:**
- None (stateless component)

**Styling:**
- Uses gradient-to-b for hero background
- Color-coded status badges (green/amber/red)
- Responsive grid layout

### BookingPage.jsx

**Purpose:** Allow students to book rides

**Features:**
- Trip selection with visual feedback
- Drop-off location selection
- Booking summary sidebar
- Real-time seat availability display
- Confirmation modal

**Key Props:** None (uses context)

**State:**
```javascript
const [selectedTripId, setSelectedTripId] = useState(null);
const [selectedDropoff, setSelectedDropoff] = useState('gate');
const [showModal, setShowModal] = useState(false);
const [bookedTrip, setBookedTrip] = useState(null);
```

**Key Functions:**
- `handleBook()` - Calls bookSeat() and shows confirmation
- Trip cards show visual occupancy with progress bars
- Color changes based on availability (green/amber/red)

**Responsive Behavior:**
- Left column (trips): 2/3 width on desktop
- Right sidebar: Fixed position, 1/3 width on desktop
- Stacks vertically on mobile

### AdminPage.jsx

**Purpose:** Operator/admin dashboard for trip management

**Features:**
- Key metrics cards (total passengers, occupancy %, available seats, active trips)
- Detailed trip manifest
- Real-time passenger lists
- Status indicators with color coding
- Occupancy progress bars

**Key Props:** None (uses context)

**State:** None (read-only dashboard)

**Calculated Values:**
```javascript
const totalBooked = trips.reduce((acc, trip) => acc + trip.booked, 0);
const totalCapacity = trips.reduce((acc, trip) => acc + trip.capacity, 0);
const occupancyRate = Math.round((totalBooked / totalCapacity) * 100);
const totalAvailable = totalCapacity - totalBooked;
```

**Status Logic:**
- isFull: booked >= capacity
- isAlmostFull: booked >= capacity * 0.9
- Status badge colors: red (full), amber (almost full), green (filling)

## Layout Component

**Features:**
- Sticky navigation bar
- Logo with bus icon
- Quick links (Home, Book, Operator)
- Footer with company info and links
- Outlet for page content

**Navigation Structure:**
```
LCU Shuttle (logo)
├── Home (/)
├── Book (/book)
└── Operator (/admin)
```

## Styling System

### Tailwind Configuration

**Custom Colors:**
```javascript
brand: {
  50: '#eff6ff',    // Lightest
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',
  600: '#2563eb',   // Primary (used for buttons, links, accents)
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a'    // Darkest
}
```

**Responsive Breakpoints:**
- `sm` (640px): Tablets
- `md` (768px): Small desktops
- `lg` (1024px): Large desktops

**Key Classes:**
- `max-w-7xl` - Content wrapper (max 80rem)
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - Responsive grids
- `flex items-center justify-between` - Flexbox utilities

### Custom CSS (index.css)

**Animations:**
- `fadeIn` - Modal appearance (200ms)
- `slideUp` - Card entrance effect
- `animate-fade-in` - Applied to modals
- `animate-slide-up` - Applied to cards

**Utilities:**
- Scrollbar styling for better aesthetics
- Global transitions on buttons and links
- Font smoothing for better rendering

## Component Patterns

### Trip Card Pattern

```jsx
// Used in: BookingPage and AdminPage
<div className={`border-2 p-6 rounded-xl ${isSelected ? 'border-brand-600 ring-2 ring-brand-600' : 'border-gray-200'}`}>
  <div className="flex items-start justify-between">
    {/* Trip info on left */}
    {/* Status badge on right */}
  </div>
  <div className="mt-4">
    {/* Progress bar */}
  </div>
</div>
```

**Visual Feedback:**
- Hover effect: Border color changes, shadow appears
- Selected state: Ring and background color change
- Disabled state: Opacity reduces, cursor becomes "not-allowed"

### Modal Pattern

```jsx
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-fade-in">
    <div className="bg-white rounded-2xl max-w-sm w-full p-8 text-center shadow-2xl">
      {/* Content */}
    </div>
  </div>
)}
```

**Features:**
- Centered overlay with backdrop blur/opacity
- Touch-friendly: padding for mobile
- Dismissable with button click
- Smooth fade-in animation

### Status Badge Pattern

```jsx
<span className={`px-4 py-2 rounded-full text-sm font-semibold ${
  isFull ? 'bg-red-100 text-red-800' :
  isAlmostFull ? 'bg-amber-100 text-amber-800' :
  'bg-green-100 text-green-800'
}`}>
  {statusText}
</span>
```

## Data Flow Example: Complete a Booking

```
User selects trip → setSelectedTripId(tripId)
                 ↓
User selects dropoff → setSelectedDropoff(dropoffId)
                    ↓
User clicks "Reserve Seat" → handleBook()
                           ↓
bookSeat(tripId, dropoffId) [from context]
                           ↓
Trip.booked++ , passengers.push(name)
status updated if needed
booking object returned
                           ↓
setBookedTrip(trip data)
setShowModal(true)
                           ↓
Confirmation modal appears
User sees confirmation details
                           ↓
User clicks "Back to Bookings"
Modal closes, form resets
                           ↓
Admin Dashboard reflects update in real-time
(because it reads from same context)
```

## Performance Considerations

### Optimizations Implemented

1. **Memoization:** Components don't re-render unnecessarily
2. **Local State:** Only BookingPage has local state (form UI)
3. **Context:** Shared only when needed
4. **CSS-in-JS:** Tailwind generates only used classes

### Scalability Notes

**Current Limits:**
- ~3-4 trips (performance is fine)
- ~50-100 passengers (no noticeable lag)
- Single route (architecture allows multi-route)

**For Production Scale:**
- Move to backend API
- Implement pagination for long lists
- Add virtualization for passenger lists
- Use React.memo for trip cards

## CSS Classes Reference

**Common Utility Classes Used:**

```
Layout:
  max-w-7xl, mx-auto, px-4, py-8, gap-6

Typography:
  text-4xl, font-bold, text-center, text-gray-600

Colors:
  bg-brand-600, text-white, border-gray-200

Spacing:
  mb-4, mt-2, p-6, px-8, py-3

Responsive:
  sm:px-6, lg:px-8, md:grid-cols-2, lg:col-span-3

Flexbox:
  flex, items-center, justify-between, gap-2

Grid:
  grid, grid-cols-1, md:grid-cols-2, lg:grid-cols-3

Sizing:
  h-12, w-12, max-w-sm, min-h-screen

Effects:
  shadow-lg, rounded-xl, border-2, opacity-50
```

## Adding New Features

### Example: Add Passenger Name Input

1. **Update State** (BookingPage.jsx):
```javascript
const [passengerName, setPassengerName] = useState('');
```

2. **Add Input Field**:
```jsx
<input
  type="text"
  value={passengerName}
  onChange={(e) => setPassengerName(e.target.value)}
  placeholder="Your name"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
/>
```

3. **Pass to bookSeat()**:
```javascript
const booking = bookSeat(selectedTripId, selectedDropoff, passengerName);
```

### Example: Add Trip Cancellation

1. **Add Action to Context**:
```javascript
const cancelSeat = (tripId, passengerName) => {
  // Find and remove passenger
  // Decrement booked count
  // Update status
};
```

2. **Add Button to AdminPage**:
```jsx
<button onClick={() => cancelSeat(trip.id, passenger)}>
  Remove
</button>
```

## Testing the Application

### Manual Testing Checklist

- [ ] Landing page loads with hero section
- [ ] Booking page shows all 3 trips
- [ ] Can select a trip
- [ ] Can select drop-off location
- [ ] Clicking "Reserve Seat" shows confirmation modal
- [ ] Seat count decreases after booking
- [ ] Admin dashboard updates in real-time
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] Animations smooth (fade-in modal, slide-up cards)
- [ ] Navigation works between all pages
- [ ] Almost-full trip shows amber badge
- [ ] Full trip is disabled (can't select)

---

**For more information, see README.md and GETTING_STARTED.md**
