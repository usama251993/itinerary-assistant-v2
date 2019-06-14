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

Pending BottomSheet confirm dialog
Integration of SnackBar

# Commit #5:

BottomSheet and SnackBar successfully implemented with an option to switch between them to display Delete Comfimation Dialog
Data could be successfully exported into a JSON file which can be downloaded
Stepper UI for viewing trip is used
Use of mat-table to hold the fields in New Trip for would be deprecated in upcoming couple of commits
JSON is not downloadable on the first click of JSON Export button (needs to be fixed)

Further Steps
1. Load the trip data from a JSON file
2. Edit the trip data
  a. when a new trip is created
  b. when a trip is loaded from a JSON file
3. Optimize Trip Service
  a. Merge the exportToJSON() and createTrip() methods
  b. Optimise the use of for loops in the code
  c. Create the importFromJSON() method
4. Switch between Stepper UI and Tabs UI for viewing the trip
5. Trip Overview Component to be designed
6. Contacts to be used as a FormArray to hold multiple phone numbers for a Stay
7. Transit Moule from Commit #3