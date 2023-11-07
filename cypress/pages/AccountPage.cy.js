export class Account {

    linkMyAccount = '.my-account > ul li:nth-child(1) > a';
    subitemAddress = '.block-account-navigation .list li:nth-child(2) > a';
    pnlAddresses = '.page-body';
    btnDelete = '.button-2.delete-address-button';

    clearUserAddress(){
       
        //navidate to My Account > Addresses
        cy.get(this.linkMyAccount).click();
        cy.get(this.subitemAddress).click();

        //delete address
        cy.get(this.pnlAddresses).then(($el) => {

            if ($el.find(this.btnDelete).length > 0) {

                $el.find('.button-2.delete-address-button').click();
        
                //confirm promt to delete an item and reload the page
                cy.on('window:confirm', () => {
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000);
                    
                });    

            }

        })

    }


}