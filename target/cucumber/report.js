$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/TF_Login.feature");
formatter.feature({
  "line": 1,
  "name": "validate techfios functionality",
  "description": "",
  "id": "validate-techfios-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsDef.Given_user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 3503778500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "user should be able to login with valid credentials",
  "description": "",
  "id": "validate-techfios-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should land on Dashboard pag",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepsDef.user_enters_username_as(String)"
});
formatter.result({
  "duration": 119436100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepsDef.user_enters_password_as(String)"
});
formatter.result({
  "duration": 68534900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDef.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 1177352700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDef.user_should_land_on_Dashboard_pag()"
});
formatter.result({
  "duration": 21000,
  "status": "passed"
});
});