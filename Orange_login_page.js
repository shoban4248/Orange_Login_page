
const { expect } = require('chai');

class Login {

    constructor(page) {

        this.page = page;

        // Locators
        this.userNameInput = page.locator("input[name='username']");
        this.passWordInput = page.locator("//input[@type='password']");
        this.loginBtn = page.locator("//button[@type='submit']");
        this.dashBoard = page.locator("//span[text()='Dashboard']");
    }

    async goto() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async login(username, password) {

        await this.userNameInput.fill(username);
        await this.passWordInput.fill(password);
        await this.loginBtn.click();
    }

    async enterUsername(username) {
        await this.userNameInput.fill(username);
    }

    async enterPassword(password) {
        await this.passWordInput.fill(password);
    }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }

    async pageTitle() {

        let title = await this.page.title();
        console.log(title);

    }

    async verifyDashboard() {

        await this.dashBoard.waitFor({ state: 'visible' });

        let text = await this.dashBoard.textContent();

        expect(text.trim()).to.equal("Dashboard");
    }

    async closebrowser() {
        await this.page.close();
    }

}

module.exports = Login;
