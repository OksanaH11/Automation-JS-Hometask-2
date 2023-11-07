export class Desktops {

    sortingList = 'select#products-orderby';
    selectedSortingItem = 'select#products-orderby option:selected';
    changeNumbersList ='#products-pagesize';
    selectedChangeNumbersItem ='#products-pagesize option:selected';
    gridProducts = '.product-grid';

    seletectSortingItem(n) {
        cy.get(this.sortingList).select(n);
    };
    
    getSelectedSortingItem() {
        return cy.get(this.selectedSortingItem);
    };

    selectChangeNumbersItem(n) {
        cy.get(this.changeNumbersList).select(n);
    };
    
    getSelectedChangeNumbersItem() {
        return cy.get(this.selectedChangeNumbersItem);
    };

    calcProductsViewNumber() {
        return cy.get(this.gridProducts).children().its('length');
    }; 

}