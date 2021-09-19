# shopApotheke
Case study for Shop Apotheke based on Cucumber Selenium Automation Framework.

This is a sample Shop Apotheke feature test cases scenario to verify of login using valid credentials and 
invalid credentials and Registering to Shop Apotheke with a new account.

The test scripts are written based on Selenium and Java Frontend Automation Suite utilising the BDD methodologies of Cucumber and Gherkins.

Steps required to Execute the scenario --

Clone master branch from GIT Repository or download the ZIP file.
Clone the project from GIT to local machine with below dependencies -- JAVA Sdk, Apache Maven, Selenium Webdriver (chromedriver and geckodriver).
Currently the script supports Chrome and Firefox browsers only.

Open Excel file and change the Test Data if required.
Save the changes and execute the script through the below methods by executing the test cases.
Below are the different methods to execute the script.

Method 1: Eclipse IDE: Execute as JUnit Test.

Method 2: Eclipse IDE -- Right Click on the project --> Run As --> Maven Build --> clean install --> Apply and Run.

Method 3:. Command Line: Open cmd prompt in the system --> Navigate to the filepath where the project is stored --> mvn test

Method 4: Windows batch file: Navigate to the filepath where the project is stored --> Execute the "run.bat" file.

Note: These tests can also be executed parallelly by editing the pom file with maven surefire plugin and parallel configuration and updating the feature files accordingly.
