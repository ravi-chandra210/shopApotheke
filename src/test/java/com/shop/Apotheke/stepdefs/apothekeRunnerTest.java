package com.shop.Apotheke.stepdefs;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/cucumber-reports"}, features={"src/test/resources/apothekeFeatures"}, 
				monochrome=true)

public class apothekeRunnerTest {

}
