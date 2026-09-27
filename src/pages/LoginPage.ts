import { Locator, Page } from "@playwright/test";
import {BasePage} from "./BasePage";
export class LoginPage extends BasePage {

private readonly emailId:Locator;
private readonly password:Locator;
private readonly loginBtn:Locator;
private readonly forgottenPasswordLink:Locator;
private readonly loginErrorMessage:Locator;
constructor (page:Page){
    super(page);
    this.emailId=page.getByRole('textbox',{name:'E-Mail Address'});
    this.password=page.getByRole('textbox',{name:'Password'});
    this.loginBtn=page.getByRole('button',{name:'Login'});
    this.forgottenPasswordLink=page.getByRole('link',{name:'Forgotten Password'}).first();
    this.loginErrorMessage=page.locator('.alert.alert-danger.alert-dismissible');
}    

//actions or behavoir
    async goToLoginPage():Promise<void>{
    // use a leading slash so Playwright resolves this against `baseURL`
    try{
        await this.page.goto('/opencart/index.php?route=account/login', { waitUntil: 'load', timeout: 60000 });
    }catch(err){
        throw new Error(`Navigation to login page failed: ${err}`);
    }
    //await this.page.waitForLoadState('networkidle');
    //await this.emailId.waitFor({ state: 'visible', timeout: 10000 });
    }

    async getLoginPageTitle():Promise<string>{
        return await this.page.title();
    }
    async isForgottenPwdLinkExist():Promise<boolean>{
        return await this.forgottenPasswordLink.isVisible();
    }

    async doLogin(username:string, password:string):Promise<void> {
        console.log(`user credentials:${username}-${password}`);
        await this.emailId.fill(username);
        await this.password.fill(password);
         await this.loginBtn.click();

    }
    async isInvalidLoginErrorDisplayed(): Promise<boolean> {// coPromise<boolean>{
        return await this.loginErrorMessage.isVisible();
    }
}