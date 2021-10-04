const { Given, When, Then } = require('@wdio/cucumber-framework');

const RegistrationPage = require('../TestDemoshop/MainPage');
const SecurePage = require('../TestDemoshop/SuccessPage');

const pages = {
    register: RegistrationPage
}

Given(/^I am on the registration page$/, async (page) => {
	await pages[page].open()
});


When(/^I enter mandatory fields <firstmame>, <lastname>, <email>, <telephone>, <password>, <passwordConfirm>$/, async (firstname, lastname, email, telephone, password, passwordConfirm) => {
	await RegistrationPage.register(firstname, lastname, email, telephone, password, passwordConfirm)
});

When(/^I check Pricacy Policy Checkbox$/, () => {
	return true;
});

When(/^I click on "([^"]*)" button$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^I should see a message saying <Message>$/, async (message) => {
	await expect(SuccessPage.successMessage).toBeExisting();
    await expect(SuccessPage.successMessage).toHaveTextContaining(message);
});
