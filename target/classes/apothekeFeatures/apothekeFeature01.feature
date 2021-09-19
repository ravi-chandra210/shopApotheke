Feature: Register with new user

Scenario Outline: User should be able to create a new account with shop Apotheke. 
	Given Load the Test Data from "<Test_ID>" 
	When User should navigate Shop Apotheke test
	Then User clicks OK to accept the cookies
	Then User has to enter valid credentials for a new account 
	When User will click on Create a user account 
	Then User has to navigate to Home Page 
	And close the browsers
	
	Examples: 
		|Test_ID|
		|TC_03|
		|TC_06|