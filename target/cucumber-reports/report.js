$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/apothekeFeatures/apothekeFeature.feature");
formatter.feature({
  "name": "Login to Apotheke site with valid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should be able to login into Apotheke site using valid credentials.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Load Test Data from \"\u003cTest_ID\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User navigates to Shop Apotheke test",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on OK to accept cookies",
  "keyword": "Then "
});
formatter.step({
  "name": "User should enter valid email and password credentials",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on Register",
  "keyword": "When "
});
formatter.step({
  "name": "User should be navigated to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "Opened Browsers should quit",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Test_ID"
      ]
    },
    {
      "cells": [
        "TC_01"
      ]
    },
    {
      "cells": [
        "TC_04"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able to login into Apotheke site using valid credentials.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Load Test Data from \"TC_01\"",
  "keyword": "Given "
});
formatter.match({
  "location": "apothekeStepDef.load_Test_Data_from(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Shop Apotheke test",
  "keyword": "When "
});
formatter.match({
  "location": "apothekeStepDef.user_navigates_to_Shop_Apotheke_test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on OK to accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef.user_clicks_on_OK_to_accept_cookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter valid email and password credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef.user_should_enter_valid_email_and_password_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Register",
  "keyword": "When "
});
formatter.match({
  "location": "apothekeStepDef.user_clicks_on_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be navigated to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef.user_should_be_navigated_to_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Opened Browsers should quit",
  "keyword": "And "
});
formatter.match({
  "location": "apothekeStepDef.opened_Browsers_should_quit()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to login into Apotheke site using valid credentials.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Load Test Data from \"TC_04\"",
  "keyword": "Given "
});
formatter.match({
  "location": "apothekeStepDef.load_Test_Data_from(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Shop Apotheke test",
  "keyword": "When "
});
formatter.match({
  "location": "apothekeStepDef.user_navigates_to_Shop_Apotheke_test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on OK to accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef.user_clicks_on_OK_to_accept_cookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter valid email and password credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef.user_should_enter_valid_email_and_password_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Register",
  "keyword": "When "
});
formatter.match({
  "location": "apothekeStepDef.user_clicks_on_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be navigated to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef.user_should_be_navigated_to_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Opened Browsers should quit",
  "keyword": "And "
});
formatter.match({
  "location": "apothekeStepDef.opened_Browsers_should_quit()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User should observe an error message when invalid credentials are entered.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Load Test Data from \"\u003cTest_ID\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User navigates to Shop Apotheke test",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on OK to accept cookies",
  "keyword": "Then "
});
formatter.step({
  "name": "User should enter invalid email and password credentials",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on Register",
  "keyword": "When "
});
formatter.step({
  "name": "User should observe an error message",
  "keyword": "Then "
});
formatter.step({
  "name": "Opened Browsers should quit",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Test_ID"
      ]
    },
    {
      "cells": [
        "TC_02"
      ]
    },
    {
      "cells": [
        "TC_05"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should observe an error message when invalid credentials are entered.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Load Test Data from \"TC_02\"",
  "keyword": "Given "
});
formatter.match({
  "location": "apothekeStepDef.load_Test_Data_from(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Shop Apotheke test",
  "keyword": "When "
});
formatter.match({
  "location": "apothekeStepDef.user_navigates_to_Shop_Apotheke_test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on OK to accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef.user_clicks_on_OK_to_accept_cookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter invalid email and password credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef.user_should_enter_invalid_email_and_password_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Register",
  "keyword": "When "
});
formatter.match({
  "location": "apothekeStepDef.user_clicks_on_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should observe an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef.user_should_observe_an_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Opened Browsers should quit",
  "keyword": "And "
});
formatter.match({
  "location": "apothekeStepDef.opened_Browsers_should_quit()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should observe an error message when invalid credentials are entered.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Load Test Data from \"TC_05\"",
  "keyword": "Given "
});
formatter.match({
  "location": "apothekeStepDef.load_Test_Data_from(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Shop Apotheke test",
  "keyword": "When "
});
formatter.match({
  "location": "apothekeStepDef.user_navigates_to_Shop_Apotheke_test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on OK to accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef.user_clicks_on_OK_to_accept_cookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter invalid email and password credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef.user_should_enter_invalid_email_and_password_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Register",
  "keyword": "When "
});
formatter.match({
  "location": "apothekeStepDef.user_clicks_on_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should observe an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef.user_should_observe_an_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Opened Browsers should quit",
  "keyword": "And "
});
formatter.match({
  "location": "apothekeStepDef.opened_Browsers_should_quit()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/apothekeFeatures/apothekeFeature01.feature");
formatter.feature({
  "name": "Register with new user",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should be able to create a new account with shop Apotheke.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Load the Test Data from \"\u003cTest_ID\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User should navigate Shop Apotheke test",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks OK to accept the cookies",
  "keyword": "Then "
});
formatter.step({
  "name": "User has to enter valid credentials for a new account",
  "keyword": "Then "
});
formatter.step({
  "name": "User will click on Create a user account",
  "keyword": "When "
});
formatter.step({
  "name": "User has to navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browsers",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Test_ID"
      ]
    },
    {
      "cells": [
        "TC_03"
      ]
    },
    {
      "cells": [
        "TC_06"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able to create a new account with shop Apotheke.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Load the Test Data from \"TC_03\"",
  "keyword": "Given "
});
formatter.match({
  "location": "apothekeStepDef01.load_the_Test_Data_from(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate Shop Apotheke test",
  "keyword": "When "
});
formatter.match({
  "location": "apothekeStepDef01.user_should_navigate_Shop_Apotheke_test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks OK to accept the cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef01.user_clicks_OK_to_accept_the_cookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter valid credentials for a new account",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef01.user_has_to_enter_valid_credentials_for_a_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click on Create a user account",
  "keyword": "When "
});
formatter.match({
  "location": "apothekeStepDef01.user_will_click_on_Create_a_user_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef01.user_has_to_navigate_to_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browsers",
  "keyword": "And "
});
formatter.match({
  "location": "apothekeStepDef01.close_the_browsers()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to create a new account with shop Apotheke.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Load the Test Data from \"TC_06\"",
  "keyword": "Given "
});
formatter.match({
  "location": "apothekeStepDef01.load_the_Test_Data_from(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate Shop Apotheke test",
  "keyword": "When "
});
formatter.match({
  "location": "apothekeStepDef01.user_should_navigate_Shop_Apotheke_test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks OK to accept the cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef01.user_clicks_OK_to_accept_the_cookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter valid credentials for a new account",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef01.user_has_to_enter_valid_credentials_for_a_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click on Create a user account",
  "keyword": "When "
});
formatter.match({
  "location": "apothekeStepDef01.user_will_click_on_Create_a_user_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "apothekeStepDef01.user_has_to_navigate_to_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browsers",
  "keyword": "And "
});
formatter.match({
  "location": "apothekeStepDef01.close_the_browsers()"
});
formatter.result({
  "status": "passed"
});
});