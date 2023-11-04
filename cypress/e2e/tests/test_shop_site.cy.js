import { Account } from "../../pages/AccountPage.cy.js"
import { CellPhones } from "../../pages/CellPhonesPage.cy.js"
import { Checkout } from "../../pages/CheckoutPage.cy.js"
import { Desktops } from "../../pages/DesktopsPage.cy.js"
import { Login } from "../../pages/LoginPage.cy.js"
import { ProductDetails } from "../../pages/ProductDetailsPage.cy.js"
import {Register} from "../../pages/RegisterPage.cy.js"
import { ShoppingCart } from "../../pages/ShoppingCartPage.cy.js"
import { WishList } from "../../pages/WishListPage.cy.js"
import { MainPage } from "../../pages/mainPage.cy.js"
const registerForm = new Register
const loginForm = new Login
const shopPage = new MainPage
const desktopsPage = new Desktops
const cellPhonesPage = new CellPhones
const productDetailsPage = new ProductDetails
const shoppingCartPage = new ShoppingCart
const checkoutPage =new Checkout
const accountPage = new Account
const wishListPage = new WishList

/*describe('e-shop user registration and login', () => {

    beforeEach(() => {
        
        cy.visit("/");
        cy.viewport('macbook-13');                                        //set dimension 1280 x 800
        cy.on('uncaught:exception', (err, runnable) => {                  //turn off uncaught exceptions to prevent test failing
            return false            
        });
    });
        
    it('should Register a user', () => {
        
        registerForm.openRegisterForm();

        //populate Register form and click Register button
        registerForm.registerUser('Mary','Smith', '@example1.com','asdf0102');

        //verify 'Your registration completed' label for successfull registration
        registerForm.getLblUserRegistered().should('contain', 'Your registration completed');
 
    });  
    
    it('should Log in a user', () => {
        
        loginForm.openLoginForm();
       
        loginForm.loginUser('shop_test@example.com','asdf0102');
        
        //verify entered email label is displayed at the top for logged user
        loginForm.getlblLoggedUser().should('contain', 'shop_test@example.com');

        //verify Log in button is replaced with Log out button
        loginForm.getlinkLogIn().should('not.exist');
        loginForm.getlinkLogOut().should('exist').should('be.visible');        
        
    });

});  
*/
describe('e-shop product tests ', () => {

    after(() => {
        cy.logUser('shop_test@example.com','asdf0102');
        accountPage.clearUserAddress();           //clear user address 
        wishListPage.clearWishList();             //clear WishList
    })   

    beforeEach(() => {
        
        cy.logUser('shop_test@example.com','asdf0102');
        cy.viewport('macbook-13');                           //  set dimension 1280 x 800
        cy.on('uncaught:exception', (err, runnable) => {     //turn off uncaught exceptions to prevent test failing
            return false           
        });
    })

    it('should verify items in Computer group', () => {
        
        shopPage.clickComputersCategory();

        //verify 3 items and names in Computers group 
        shopPage.getsublistComputer().within(() => {

            shopPage.getsublistItemDesktops().should('be.visible').should('contain', 'Desktops');
            shopPage.getsublistItemNotebooks().should('be.visible').should('contain', 'Notebooks');
            shopPage.getsublistItemAccessories().should('be.visible').should('contain', 'Accessories');

        })  
        
    });

    it('should verify sorting list items', () => {

        //navigate to Desktops group
        shopPage.clickComputersCategory();
        shopPage.clickDesktops();

        //verify default selection in Sorting list
        desktopsPage.getSelectedSortingItem().should('have.text', 'Position');
        
        //verify 2nd selection in Sorting list
        desktopsPage.seletectSortingItem(1);
        desktopsPage.getSelectedSortingItem().should('have.text', 'Name: A to Z');
        
        //verify 3rd selection in Sorting list
        desktopsPage.seletectSortingItem(2);
        desktopsPage.getSelectedSortingItem().should('have.text', 'Name: Z to A');
        
        //verify 4rh selection in Sorting list
        desktopsPage.seletectSortingItem(3);
        desktopsPage.getSelectedSortingItem().should('have.text', 'Price: Low to High');
       
        //verify 5th selection in Sorting list
        desktopsPage.seletectSortingItem(4);
        desktopsPage.getSelectedSortingItem().should('have.text', 'Price: High to Low');

        //verify 6th selection in Sorting list
        desktopsPage.seletectSortingItem(5);
        desktopsPage.getSelectedSortingItem().should('have.text', 'Created on');      
        
    });

    it('should verify changing number of items', () => {

        //navigate to Desktops group
        shopPage.clickComputersCategory();
        shopPage.clickDesktops();

        //verify default item in change number list is eq to 8
        desktopsPage.getSelectedChangeNumbersItem().should('have.text', 8);

        //verify that number of displayed products is <= 8
        desktopsPage.calcProductsViewNumber().should('be.lte', 8);

        //verify 1st item in change number list is eq to 4
        desktopsPage.selectChangeNumbersItem(0);
        desktopsPage.getSelectedChangeNumbersItem().should('have.text', 4);

        //verify that number of displayed products is <= 8
        desktopsPage.calcProductsViewNumber().should('be.lte', 4);

        //verify last item in change number list is eq to 12
        desktopsPage.selectChangeNumbersItem(2);
        desktopsPage.getSelectedChangeNumbersItem().should('have.text', 12);

        //verify that number of displayed products is <= 12
        desktopsPage.calcProductsViewNumber().should('be.lte', 12);

    });

    it('should add an item to the Wishlist', () => {

        //navigate to Cell Phones group
        shopPage.clickElectronicsCategory();
        shopPage.clickCellPhones();

        //click on a phone image
        cellPhonesPage.clickImageCellPhone();

        //add a phone to Wishlist
        productDetailsPage.clickbtnAddtoWishList();     

        //verify 'The product has been added to your wishlist' hint displaying
        shopPage.getNotification().should('be.visible').should('have.text', 'The product has been added to your wishlist')

        //verify Wisjhlist count number
        shopPage.getTextfromWishListCounter().should('be.equal', '1');

    });

    it('should add a product to the card', () => {

        //navigate to Cell Phones group
        shopPage.clickElectronicsCategory();
        shopPage.clickCellPhones();

        //click on a phone image
        cellPhonesPage.clickImageCellPhone();

        //add a phone to shopping cart
        productDetailsPage.clickbtnAddtoCart();

        //verify 'The product has been added to your wishlist' hint displaying
        shopPage.getNotification().should('be.visible').should('have.text', 'The product has been added to your shopping cart')

       //verify Cart count number
        shopPage.getTextfromCartCounter().should('be.equal', '1');

    });

    it('should remove a product from the shopping cart', () => {

        //add a product to Shopping Cart
        cy.addtoShoppingCart();

        //navigate to Shopping cart
        shopPage.clicklinkCartCounter();

        //check Remove checkbox and Update button
        shoppingCartPage.checkchkRemove();
        shoppingCartPage.clickbtnUpdateCart();

        //verify shopping cart is blank statement
        shoppingCartPage.getlblTextBlankShopCart().should('eq', 'Your Shopping Cart is empty!')
        
        //verify Cart count number is 0
        shopPage.getTextfromCartCounter().should('be.equal', '0');

    });

    it('should checkout a product in the shopping cart', () => {

        //add a product to Shopping Cart
        cy.addtoShoppingCart();

        //navigate to Shopping cart
        shopPage.clicklinkCartCounter();

        //check 'I agree...' checkbox and click Checkout button
        shoppingCartPage.clickchkIagreeTermtoService();
        shoppingCartPage.clickbtnCheckout();

        //populate Billing Address
        checkoutPage.populateBillingAddress('United States', 'Alaska', 'Fairbanks' , '456 Elm Street', '99701', '+14841111111')
        
        //leave default values and go to Confirm Order
        checkoutPage.clickContinueOnAllSteps();

        //confirm Checkout
        checkoutPage.clickbtnConfirnCheckout();

        //verify order successfully processed statement
        checkoutPage.getlblTextOrderProcessed().should('eq', 'Your order has been successfully processed!')

        //verify Cart count number is 0
        shopPage.getTextfromCartCounter().should('be.equal', '0');
        
    }); 

})  