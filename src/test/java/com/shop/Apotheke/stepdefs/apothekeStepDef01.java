package com.shop.Apotheke.stepdefs;

import com.shop.Apotheke.pages.apothekePages;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class apothekeStepDef01 {
	apothekePages apothekeOb = new apothekePages();
	
	@Given("Load the Test Data from {string}")
	public void load_the_Test_Data_from(String testCaseID) {
		apothekeOb.getSheetData(testCaseID);
	}

	@When("User should navigate Shop Apotheke test")
	public void user_should_navigate_Shop_Apotheke_test() {
		apothekeOb.launchApothekeWebsite();
	}
	
	@Then("User clicks OK to accept the cookies")
	public void user_clicks_OK_to_accept_the_cookies() {
		apothekeOb.cookies();
	}

	@Then("User has to enter valid credentials for a new account")
	public void user_has_to_enter_valid_credentials_for_a_new_account() {
		apothekeOb.registerNew();
	}

	@When("User will click on Create a user account")
	public void user_will_click_on_Create_a_user_account() {
		apothekeOb.clicksRegister();
	}

	@Then("User has to navigate to Home Page")
	public void user_has_to_navigate_to_Home_Page() {
		apothekeOb.validateL();
	}

	@Then("close the browsers")
	public void close_the_browsers() {
		apothekeOb.closeBrowser();
	}

}
