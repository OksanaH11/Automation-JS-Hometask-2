export class ProductDetails {
    
    btnAddtoWishList = '#add-to-wishlist-button-43';
    btnAddtoCart = '#add-to-cart-button-43';

    clickbtnAddtoWishList() {
        cy.get(this.btnAddtoWishList).click();
    };

    clickbtnAddtoCart() {
        cy.get(this.btnAddtoCart).click();
    };

}