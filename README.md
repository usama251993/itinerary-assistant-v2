# ItineraryAssistant

# Initial Commit

## Alt 1 + 7 + 9 = │
## Alt 1 + 9 + 2 = └
## Alt 1 + 9 + 4 = ┬
## Alt 1 + 9 + 5 = ├
## Alt 1 + 9 + 6 = ─
## Alt 2 + 1 + 8 = ┌

# Commit #1: Ready to work, with Angular Material setup up

# Commit #2:

Trip Create Form working correctly
Required fields: 
├─ Source City 
├─ Destination City
├─ Start Date
└─ End Date (Appears only after start date is entered)

┌─ Created Models
│  ├─ Day
│  │  └─ Place
│  │     ├─ Attractions
│  │     └─ Stays
│  └─ Transit
│
├─ Designed Components
│  ├─ Trip Home
│  ├─ Trip Header
│  ├─ New Trip
│  ├─ Edit Trip (Not Working)
│  └─ Design Trip (Not Working)
│
├─ Created Trip Design Service (Not Working)
│
└─ Implemented Routing

Futher Steps
UI for Design Trip Component
Form Validation for Design Trip Component

# Commit #3:

Design Trip form created

Further Steps
Load data dynamically
Validations
Use form array with mat-table
Change in transit model to have properties to store
1. Distance and time required to travel between places
2. Coupon codes for transit
3. Transit expenses

# Commit #4:

Design form is now merged with New Trip form and is now obsolete
New Stepper based UI for New Trip Form which incorporates planning of the whole trip

FormArray to enter details of the Room is unable to perform well with mat-table
Works well with mat-accordion

All the buttons are non functional except those to Add Day / Place / Stay / Room / Attraction, hence are therefore disabled

Further Steps
1. Transit Module from Commit #3
2. Save the trip data
3. Load the trip data