Feature: Login to Apotheke site with valid credentials 

Scenario Outline: User should be able to login into Apotheke site using valid credentials. 
	Given Load Test Data from "<Test_ID>" 
	When User navigates to Shop Apotheke test 
	Then User clicks on OK to accept cookies 
	Then User should enter valid email and password credentials 
	When User clicks on Register 
	Then User should be navigated to Home Page 
	And Opened Browsers should quit 
	
	Examples: 
		|Test_ID|
		|TC_01|
		|TC_04|
		
Scenario Outline: User should observe an error message when invalid credentials are entered. 
	Given Load Test Data from "<Test_ID>" 
	When User navigates to Shop Apotheke test 
	Then User clicks on OK to accept cookies 
	Then User should enter invalid email and password credentials 
	When User clicks on Register 
	Then User should observe an error message 
	And Opened Browsers should quit 
	
	Examples: 
		|Test_ID|
		|TC_02|
		|TC_05|