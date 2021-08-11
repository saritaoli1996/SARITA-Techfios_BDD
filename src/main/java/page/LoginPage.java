package page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	
	//Element Library
	@FindBy(how= How.XPATH, using= "//input[@id='username']") WebElement USERNAME_FIELD;
	@FindBy(how= How.XPATH, using="//input[@type='password']") WebElement PASSWORD_FIELD;
	@FindBy(how= How.XPATH, using="//button[contains(text(), 'Sign in')]") WebElement SIGNIN_FIELD;
	
	
	//Interactive Methods
	public void enterUserName(String userName) {
		USERNAME_FIELD.sendKeys(userName);
	}
	
	public void enterPassword(String password) {
		PASSWORD_FIELD.sendKeys(password);
	}
	
	public void clickSignIn() {
		SIGNIN_FIELD.click();
	}
	
}
