export class ShoppingCart {
    
    chkRemove = 'table.cart > tbody tr:nth-child(1) input[name="removefromcart"]';
    btnUpdateCart = '.update-cart-button';
    lblBlankShopCart = '.shopping-cart-page .order-summary-content';
    chkIagreeTermtoService = 'input#termsofservice';
    btnCheckout = 'button#checkout';

    checkchkRemove() {
        cy.get(this.chkRemove).check();
    };

    clickbtnUpdateCart() {
        cy.get(this.btnUpdateCart).click();
    }

    getlblTextBlankShopCart() {
        return cy.get(this.lblBlankShopCart)
            .invoke('text')
            .then(text => text.trim());
    };

    clickchkIagreeTermtoService() {
        cy.get(this.chkIagreeTermtoService).click();
    };

    clickbtnCheckout() {
        cy.get(this.btnCheckout).click();
    };

}