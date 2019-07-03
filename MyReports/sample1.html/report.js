$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Sample1.feature");
formatter.feature({
  "name": "Simple Pipeline one",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To verify Pipe1 Scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To print the username",
  "keyword": "Given "
});
formatter.match({
  "location": "Sample1StepDef.To_print_the_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Item",
  "keyword": "When "
});
formatter.match({
  "location": "Sample1StepDef.click_on_Item()"
});
formatter.result({
  "status": "passed"
});
});