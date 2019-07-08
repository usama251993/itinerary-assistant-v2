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

Trip view component created and developed
http://localhost:4200/view

Further Steps
Overview tab in View Component
Modify New Trip form
Integrate data filled in by the user into a service
Populate the View Component using the data filled in by the user
Integrate transit component properly
Some modifications in User Interface

# Commit #4:

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

# Commit #6:
The JSON data can be loaded to view the trip
Transit module to be added as a sibling of Attractions and Stays
Trip service has been greatly optimized
Models are now obsolete
A single stay can have multiple Contacts

## The trip editing form when landed via "Edit Trip" is horribly slow! ##
## Optimize the buildFormGroup() in IaTripFormBuilderService on priority ##
## Incorporate use of Resolver immediately! ##

The entire app has been modularized
  There is now a separate component for each entity of the trip
    ia-new-trip
    └─ ia-new-day
       └─ ia-new-place
          └─ ia-new-attraction
          └─ ia-new-stay
             └─ ia-new-room

Further Steps
1. Switch between Stepper UI and Tabs UI for viewing the trip
2. Transit Moule from Commit #3
  a. Transit module to be added as a sibling of Attractions and Stays
3. Trip Overview Component to be designed
4. Add CanDeactivate guard on Trip Form

#Commit #7:
Transit is currently placed as the last entry of attractions array
Plan C.json is a file which contains the details of entire trip

Further Steps
1. Switch between Stepper UI and Tabs UI for viewing the trip
2. Transit Moule from Commit #3
3. Trip Overview Component to be designed
4. Add CanDeactivate guard on Trip Form