export class CellPhones {

    imageCellPhone = '.product-grid > div:first-child .picture';
    
    clickImageCellPhone() {
        cy.get(this.imageCellPhone).click();
    };

}