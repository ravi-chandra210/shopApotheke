package com.shop.Apotheke.stepdefs;

import com.shop.Apotheke.pages.apothekePages;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class apothekeStepDef {
	apothekePages apothekeOb = new apothekePages();
	
	@Given("Load Test Data from {string}")
	public void load_Test_Data_from(String testCaseID) {
	     apothekeOb.getSheetData(testCaseID);
	}

	@When("User navigates to Shop Apotheke test")
	public void user_navigates_to_Shop_Apotheke_test() {
		apothekeOb.launchApothekeWebsite();    
	}

	@Then("User clicks on OK to accept cookies")
	public void user_clicks_on_OK_to_accept_cookies() {
		apothekeOb.cookies();
	}

	@Then("User should enter valid email and password credentials")
	public void user_should_enter_valid_email_and_password_credentials() {
		apothekeOb.enterValidC();
	}

	@When("User clicks on Register")
	public void user_clicks_on_Register() {
		apothekeOb.successfulLogin();
	}

	@Then("User should be navigated to Home Page")
	public void user_should_be_navigated_to_Home_Page() {
		apothekeOb.validateL();
	}

	@Then("Opened Browsers should quit")
	public void opened_Browsers_should_quit() {
		apothekeOb.closeBrowser();
	}

	@Then("User should enter invalid email and password credentials")
	public void user_should_enter_invalid_email_and_password_credentials() {
		apothekeOb.invalidC();
	}

	@Then("User should observe an error message")
	public void user_should_observe_an_error_message() throws InterruptedException {
		apothekeOb.errorMessage();
	}

}
