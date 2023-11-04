// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//for Cypress
///<refence types="Cypress" /> 

Cypress.Commands.add('addtoShoppingCart', () => {

    //navigate to Cell Phones group
    shopPage.clickElectronicsCategory();
    shopPage.clickCellPhones();

    //click on a phone image
    cellPhonesPage.clickImageCellPhone();

    //add a phone to shopping cart
    productDetailsPage.clickbtnAddtoCart();
    
}) 

Cypress.Commands.add('logUser', (user, password) => {

    cy.session([user, password], () => {
        cy.visit('/');
        loginForm.openLoginForm();    
        loginForm.loginUser(user, password);
    })
    cy.visit('/');

}) 

import { CellPhones } from "../pages/CellPhonesPage.cy.js"
import { Login } from "../pages/LoginPage.cy.js";
import { ProductDetails } from "../pages/ProductDetailsPage.cy.js"
import { MainPage } from "../pages/mainPage.cy.js"
const shopPage = new MainPage
const cellPhonesPage = new CellPhones
const productDetailsPage = new ProductDetails
const loginForm = new Login
