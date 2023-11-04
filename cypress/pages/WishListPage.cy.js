export class WishList {

    linkWishListCounter = '#topcartlink + li > a'; //span:nth-child(2)';
    chkRemove = 'table.cart > tbody tr:nth-child(1) input[type="checkbox"]';
    btnUpdateWishList = '.update-wishlist-button';

    clearWishList(){

        cy.get(this.linkWishListCounter).should('be.visible').click();
        cy.get(this.chkRemove).check();
        cy.get(this.btnUpdateWishList).click();

    };

}