const MainPage = require('./page');

class RegistrationPage extends MainPage {

    get inputFirstName () { return $('#firstname') }
    get inputLastName () { return $('#lastname') }
    get inputEmail () { return $('#email') }
    get inputTelephone () { return $('#telephone') }
    get inputPassword () { return $('#password') }
    get inputConfirmPassword () { return $('#confirm') }
    get PrivacyCheckbox () { return $('input[type="checkbox"]') }
    get btnSubmit () { return $('input[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async RegistrationPage (firstname, lastname, email, telephone, password, passwordConfirm) {
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputEmail.setValue(email);
        await this.inputTelephone.setValue(telephone);
        await this.inputPassword.setValue(password);
        await this.inputPasswordConfirm.setValue(passwordConfirm);
        await this.PrivacyCheckbox.click();
        await this.btnSubmit.click();
    }


}

module.exports = new RegistrationPage();