exports.loginpage =
class loginpage {
    constructor(page){
        this.page=page;
        this.loginlink="#nav-link-accountList"
        this.usernameinput=('//input[@id="ap_email_login"]')
        this.buttoninput=('//input[@class="a-button-input"]')
        this.passwordinput=('//input[@id="ap_password"]')
        this.signininput=('//input[@id="signInSubmit"]')


    }

    async gotologinpage(){
        await this.page.goto('https://www.amazon.com/');
    }

    async login(username , password){
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.usernameinput).fill(username);
        await this.page.locator(this.buttoninput).click();
        await this.page.locator(this.passwordinput).fill(password);
        await this.page.locator(this.signininput).click();
    }
}