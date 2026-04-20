exports.orangelogin =
class orangelogin {
    constructor(page){
        this.page=page;
        this.usernamelink=('//input[@name="username"]')
        this.passwordlink=('//input[@name="password"]')
        this.signinlink=('//button[@type="submit"]')
        this.mainmenulink=('//a[@class="oxd-main-menu-item active"]')
        this.adminbutton=('//span[text()="Admin"]')
        this.admin=("//h6[text()='Admin']")
        this.Management=("//h6[text()='User Management']")
        this.adminHeader= page.locator(this.admin)
        this.managementHeader=page.locator(this.Management)
    }

    async gotologinpage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username , password){
        await this.page.locator(this.usernamelink).fill(username);
        await this.page.locator(this.passwordlink).fill(password);
        await this.page.locator(this.signinlink).click();
        await this.page.locator(this.mainmenulink).click();
        await this.page.locator(this.adminbutton).click();
    }

    async login2(username , password){
        await this.page.locator(this.usernamelink).fill(username);
        await this.page.locator(this.passwordlink).fill(password);
        await this.page.locator(this.signinlink).click();
        
    }


}