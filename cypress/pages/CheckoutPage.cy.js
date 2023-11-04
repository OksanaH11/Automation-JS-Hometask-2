export class Checkout {
    
    listCountries = 'select#BillingNewAddress_CountryId';
    listStates = 'select#BillingNewAddress_StateProvinceId';
    txtCity ='#BillingNewAddress_City';
    txtAdress ='#BillingNewAddress_Address1';
    txtZip = '#BillingNewAddress_ZipPostalCode';
    txtPhone = '#BillingNewAddress_PhoneNumber';
    btnContinueBillingAddress = '#billing-buttons-container [type="button"]';
    btnContinueShippingAddress = '#shipping-buttons-container [type="button"]';
    btnContinueShippingMethod = '#shipping-method-buttons-container [type="button"]';
    btnContinuePaymentMethod = '#payment-method-buttons-container [type="button"]';
    btnContinuePaymentInfo = '#payment-info-buttons-container [type="button"]';
    pnlBillingInfo ='.billing-info';
    btnConfirmCheckout ='#confirm-order-buttons-container [type="button"]';
    lblTextOrderProcessed = '.order-completed strong';

    populateBillingAddress(country, state, city, adress, zip, phone){

        cy.get(this.listCountries).select(country);
        cy.get(this.listStates).select(state);
        cy.get(this.txtCity).type(city);
        cy.get(this.txtAdress).type(adress);
        cy.get(this.txtZip).type(zip);
        cy.get(this.txtPhone).type(phone);

        cy.get(this.btnContinueBillingAddress).click();

    }

    clickContinueOnAllSteps() {

        cy.get(this.btnContinueShippingAddress).click();
        cy.get(this.btnContinueShippingMethod).click();
        cy.get(this.btnContinuePaymentMethod).click();  
        cy.get(this.btnContinuePaymentInfo).click();
        cy.get(this.pnlBillingInfo).should('be.visible');

    }

    clickbtnConfirnCheckout(){
        cy.get(this.btnConfirmCheckout).click();
    }

    getlblTextOrderProcessed() {
        return cy.get(this.lblTextOrderProcessed).invoke('text').then(text => text.trim());   
    }

}