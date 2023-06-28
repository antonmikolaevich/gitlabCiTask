Feature: Doctors

@3
Scenario: It should be possible to open a modal window
  When I open "Dashboard" page
  And I click "Doctors" link from the side menu
  And I click add new doctor button from list header
  Then modal window should be displayed

  When I click "close" button in modal window
  Then modal window should not be displayed

@4
Scenario: Show an error for an empty doctor email
  When I open "Dashboard" page
  And I click "Doctors" link from the side menu
  And I click add new doctor button from list header
  And I write "John Doe" in "Name" field
  And I click "save" button in modal window
  Then Email error message should be displayed 