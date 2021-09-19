package com.shop.Apotheke.pages;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.shop.Apotheke.pages.apothekePages;
import com.shop.Apotheke.utils.utils;

public class apothekePages {
	
	/**
	 * @author : Srinivasa Ravi Chandra Muktavarapu
	 * @category : Apotheke Assignment
	 * @Task : Automation of given Scenario
	 * @date : 17/09/2021
	 */
	
	protected static RemoteWebDriver driver;

	/************************************************ Static variables to store Excel sheet data **************************************/
	static String testCaseID; 
	static String browser;
	static String url;
	static String email;
	static String password;
	static String first_name;
	static String last_name;
	static String day;
	static String month;
	static String year;

	/************************************************** Apotheke Page Elements ******************************************************/

	String mainLogo = "//div[@class='col-header col-first sticky-image-smaller']";
	String mailC = "//input[@id='login-email']";
	String passwordC = "//input[@id='login-password']";
	String registerC = "//button[@id='btn-login']";
	String logoA = "//div[@class='u-padding--left l-flex l-flex__column l-flex--start']";
	String genderF = "//*[contains(text(),'Frau *')]";
	String genderM = "//*[contains(text(),'Herr *')]";
	String fNameC = "//input[@name='§newLayoutRegistrationForm.firstName']";
	String lNameC = "//input[@name='§newLayoutRegistrationForm.lastName']";
	String rMailC = "//input[@name='§newLayoutRegistrationForm.email']";
	String rPasswordC = "//input[@name='§newLayoutRegistrationForm.password']";
	String checkBox = "//div[@class='checkbox ']//label";
	String rButton = "//button[@data-qa-id='login-registration-submit-button']";
	String errorM = "//div[@class='alert alert-danger']";
	String cookiesC = "//a[@class='c-button']";
	String rLogo = "//div[@class='o-HeaderLarge__logo--inner']";
	String dayDate = "//select[@id='reg-date-of-birth-days']";
	String monthDate = "//select[@id='reg-date-of-birth-months']";
	String yearDate = "//select[@id='reg-date-of-birth-years']";

	/********************************************** Methods ******************************************************/

	/*..... Required class objects .....*/
	utils utilsOb = new utils();
	org.apache.logging.log4j.Logger log = LogManager.getLogger(apothekePages.class);


	/*..... Browser System properties .....*/
	static {
		System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		System.setProperty("webdriver.gecko.driver", "./drivers/geckodriver.exe");
	}

	/*..... This Method will read test data from provided excel sheet .....*/
	public void getSheetData(String testName){
		try {
			utils.getTestData(testName);
			testCaseID=utils.storeData("Test Case Name");
			log.info("Executing testCaseId...." + testCaseID );
			browser = utils.storeData("BROWSER");
			url = utils.storeData("URL");
			email = utils.storeData("EMAIL");
			password = utils.storeData("PASSWORD");
			first_name = utils.storeData("FIRST_NAME");
			last_name = utils.storeData("LAST_NAME");
			day = utils.storeData("DAY");
			month = utils.storeData("MONTH");
			year = utils.storeData("YEAR");
		} catch (IOException e) {
			log.error("Error occured while reading the test data from excel sheet");
		}
	}

	/*.....This Method will Launch browser and launching flink test URL. 
	 * Browser name and Website URL is passed from Test data excel sheet .....*/
	public WebDriver launchApothekeWebsite(){
		try {
			if(browser.equalsIgnoreCase("chrome")) {
				driver = new ChromeDriver();
			}else if(browser.equalsIgnoreCase("Firefox")) {
				driver = new FirefoxDriver();                      
			}
			utilsOb.waitForElm(3);
			driver.get(url);		
			driver.manage().window().maximize();
			//utilsOb.waitForElm(3);
			utilsOb.waitForGivenElem(driver, mainLogo);
		} catch (Exception e) {
			log.error("Error occured while launching the Apotheke url in desired browser");
		}
		return driver;
	}
	
	/*....This method is to accept cookies....*/
	public void cookies() {
		utilsOb.waitAndClick(driver, 2, cookiesC);
	}
	
	
	/*....This Method is to enter valid mail id and password....*/
	public void enterValidC() {
		utilsOb.sendInput(driver, mailC, email);
		utilsOb.sendInput(driver, passwordC, password);
	}
	
	/*....This Method is to click register for successful login....*/
	public void successfulLogin() {
		utilsOb.waitAndClick(driver, 2, registerC);
	}
	
	/*....This method is to validate successful login....*/
	public void validateL() {
		String m1 = utilsOb.getElemText(driver, logoA);
		if(m1.contains("Hello,")) {
			log.info("The Login is successful");
		}
		else {
			log.info("The Login has failed");
	}
	}
	
	/*....This method is to enter invalid credentials....*/
	public void invalidC() {
		utilsOb.sendInput(driver, mailC, email);
		utilsOb.sendInput(driver, passwordC, password);
	}
	
	/*....This method is to validate the error message for invalid credentials....*/
	public void errorMessage() throws InterruptedException {
		Thread.sleep(3000);
		String m2 = utilsOb.getElemText(driver, errorM);
		if(m2.contains("Email address and / or password are incorrect.")) {
			log.info("The provided credentials are invalid");
		}
		else {
			log.info("Something has gone wrong");
	}
	}
	
	/*....This method is to register with a new account....*/
	public void registerNew() {
		utilsOb.waitAndClick(driver, 1, genderM);
		utilsOb.sendInput(driver, fNameC, first_name);
		utilsOb.sendInput(driver, lNameC, last_name);
		utilsOb.sendInput(driver, rMailC, email);
		utilsOb.sendInput(driver, rPasswordC, password);
		utilsOb.selectDrpDwnValue(driver, dayDate, day);
		utilsOb.selectDrpDwnValue(driver, monthDate, month);
		utilsOb.selectDrpDwnValue(driver, yearDate, year);
		driver.findElementByXPath(checkBox).click();
	}
	
	public void clicksRegister() {
		utilsOb.waitAndClick(driver, 1, rButton);
	}
	

	/*..... This Method will close all the active sessions of browser .....*/
	public void closeBrowser() {
		driver.quit();
	}
	
	/*....unused methods....*/
//	public void updateTemp(String setTemp) {
//	JavascriptExecutor js = (JavascriptExecutor) driver;
//	js.executeScript("document.getElementById('temperature').innerHTML='"+setTemp+"'");
//}

}
