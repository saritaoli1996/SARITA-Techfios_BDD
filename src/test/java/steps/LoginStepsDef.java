package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import util.BrowserFactory;

public class LoginStepsDef {
	WebDriver driver;
	LoginPage loginPage;
	
	@Given ("^user is on the techfios login page$")
	public void Given_user_is_on_the_techfios_login_page() {
		driver = BrowserFactory.init();
	}
	
	@When("^user enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String arg1) throws Throwable {
	   loginPage= PageFactory.initElements(driver, LoginPage.class);
	   loginPage.enterUserName("demo@techfios.com");
	}

	@When("^user enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String arg1) throws Throwable {
	loginPage.enterPassword("abc123");
	    
	}

	@When("^user clicks on signin button$")
	public void user_clicks_on_signin_button() throws Throwable {
		loginPage.clickSignIn();
	 
	}

	@Then("^user should land on Dashboard pag$")
	public void user_should_land_on_Dashboard_pag() throws Throwable {
	    
	   
	}
	
}
