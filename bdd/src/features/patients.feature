Feature: Patients

@5
Scenario Outline: Create a new patient
  When I open "Dashboard" page
  And I click "Patients" link from the side menu
  And I wait for Add New Patient button to be displayed
  And I click add new patient button from list header
  And I write "<name>" in "Name" patient field
  And I click on "<genderInput>" gender
  And I write "<DOB>" in "dob" patient field
  And I write "<phone>" in "Phone" patient field
  And I write "<email>" in "Email" patient field
  And I write "<symptoms>" in "Symptoms" patient field
  And I click "<button>" button in patient modal window
  Then A patient is "<isAdded>"
  
  Examples:
  | name            | genderInput | DOB        | phone      | email           | symptoms     | button | isAdded   |
  | John Doe        | male        | 02/02/1998 | 1234567890 | test1@gmail.com | lorem ipsum  | save   | added     |
  | Keira Knightley | female      | 3/26/1985  | 1112223330 | test2@gmail.com | Aenean massa | close  | not added |