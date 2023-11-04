export class Login {

    linkLogIn = '[href="/login"]';
    linkLogOut = '[href="/logout"]';
    txtEmail = '#Email';
    txtPassword = '#Password';
    btnLogin = 'input.login-button';
    lblLoggedUser = '[href="/customer/info"]';

    openLoginForm (){
        cy.get(this.linkLogIn).click();
    };

    loginUser(email, password){

            cy.get(this.txtEmail).type(email);
            cy.get(this.txtPassword).type(password);
            cy.get(this.btnLogin).click();

    };

    getlblLoggedUser (){
        return cy.get(this.lblLoggedUser);
    };

    getlblLoggedUser (){
        return cy.get(this.lblLoggedUser);
    };

    getlinkLogIn (){
        return cy.get(this.linkLogIn);
    };
    
    getlinkLogOut (){
        return cy.get(this.linkLogOut)
    };

}