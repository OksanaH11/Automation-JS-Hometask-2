export class MainPage {

    categoryComputers = '.block-category-navigation ul.list > li:nth-child(2) > a';
    sublistComputers = '.block-category-navigation ul.list > li:nth-child(2)';
    sublistItemDesktops = 'ul li:first-child > a';
    sublistItemNotebooks = 'ul li:nth-child(2) > a';
    sublistItemAccessories = 'ul li:last-child > a';

    categoryElectronics = '.block-category-navigation ul.list > li:nth-child(3) > a';
    sublistElectronics = '.block-category-navigation ul.list > li:nth-child(3)';
    sublistItemCellPhones = 'ul li:nth-child(2) > a';

    notificationBar = '#bar-notification .content';
    linkWishListCounter = '#topcartlink + li > a span:nth-child(2)';
    linkCartCounter = '#topcartlink > a span:nth-child(2)';

    clickComputersCategory (){
        cy.get(this.categoryComputers).click();
    };

    getsublistComputer (){
        return cy.get(this.sublistComputers);
    };
  
    getsublistItemDesktops (){
        return cy.get(this.sublistItemDesktops);
    };

    getsublistItemNotebooks (){
        return cy.get(this.sublistItemNotebooks);
    };

    getsublistItemAccessories (){
        return cy.get(this.sublistItemAccessories);
    };

    clickDesktops(){
        cy.get(this.sublistComputers).within(() => {
            cy.get(this.sublistItemDesktops).should('be.visible').click();
        })
    }
    
    clickElectronicsCategory (){
        cy.get(this.categoryElectronics).click();
    };
  
    clickCellPhones (){
        cy.get(this.sublistElectronics).within(() => {
            cy.get(this.sublistItemCellPhones).should('be.visible').click();
        })
    }

    getNotification() {
        return cy.get(this.notificationBar);
    };
    
    trimBrackets(text) {
        return text.replace(/[\(\)]/g,'');
    };

    getTextfromWishListCounter() {
        return cy.get(this.linkWishListCounter).invoke('text').then($el => {
                return this.trimBrackets($el)
        })
    };

    getTextfromCartCounter() {
        return cy.get(this.linkCartCounter).invoke('text').then($el => {
                return this.trimBrackets($el)
        })
    };

    clicklinkCartCounter() {
        cy.get(this.linkCartCounter).should('be.visible').click();
    };


}