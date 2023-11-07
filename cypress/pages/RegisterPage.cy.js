export class Register {

    linkRegister = '[href="/register"]';
    txtFirstName = '#FirstName';
    txtLastName = '#LastName';
    radiobthFemale = '#gender-female';
    txtEmail = '#Email';
    txtPassword = '#Password';
    txtConfirmPassword = '#ConfirmPassword';
    btnRegister = '#register-button';
    lblUserRegistered = '.registration-result-page > div >.result';

    openRegisterForm (){
        cy.get(this.linkRegister).click();
    };

    registerUser(firstName, lastName, email, password,){

        cy.get(this.radiobthFemale).check();
        cy.get(this.txtFirstName).type(firstName);
        cy.get(this.txtLastName).type(lastName);
        
        //generate random email 
        const randomEl= Math.floor(Math.random()*10000);
        cy.get(this.txtEmail).type(`${randomEl}${email}`);

        cy.get(this.txtPassword).type(password);
        cy.get(this.txtConfirmPassword).type(password);

        cy.get(this.btnRegister).click();

    };
       
    getLblUserRegistered (){
        return cy.get(this.lblUserRegistered)
    };


}