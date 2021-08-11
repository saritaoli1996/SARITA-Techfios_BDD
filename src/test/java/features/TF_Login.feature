Feature: validate techfios functionality 

Background: 
	Given user is on the techfios login page 
	 
Scenario: user should be able to login with valid credentials 
When user enters username as "demo@techfios.com" 
When user enters password as "abc123"
And user clicks on signin button
Then user should land on Dashboard pag