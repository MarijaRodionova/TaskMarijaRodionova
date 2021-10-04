// const Page = require('./page');

class SuccessPage extends MainPage () {
    get successMessage () { return $('#content>h1') }

}

module.exports = new SuccessPage();