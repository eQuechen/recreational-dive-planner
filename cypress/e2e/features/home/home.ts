import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario visita la página de inicio", () => {
    cy.visit("/")
        .wait(3500);
});

Then("debería ver el título {string}", (title: string) => {
    cy.title()
        .should("contain", title)
        .wait(3500);
});

Then("debería ver el encabezado {string}", (heading: string) => {
    cy.contains("h1", heading)
        .should("be.visible")
        .wait(3500);
});

Then("debería ver el texto {string}", (text: string) => {
    cy.contains(text)
        .should("be.visible")
        .wait(3500);
});

Then("debería ver el enlace {string}", (linkText: string) => {
    cy.contains("a", linkText)
        .should("be.visible")
        .wait(3500);
});

Then("debería ver el botón {string}", (buttonText: string) => {
    cy.contains("button", buttonText)
        .should("be.visible")
        .wait(3500);
});

When("hace clic en el enlace {string}", (linkText: string) => {
    cy.contains("a", linkText)
        .should("be.visible")
        .wait(5000)
        .click();
});

When("el usuario hace click en {string}", (text: string) => {
    cy.contains("button", text)
        .should("be.visible")
        .wait(5000)
        .click();
});

Then("la URL debería contener {string}", (path: string) => {
    cy.url()
        .should("include", path)
        .wait(3500);
});

Then("debería mostrarse el modal de la tabla RDP", () => {
    cy.contains("Tabla RDP (Métrica)")
        .should("be.visible")
        .wait(3500);
});

Then("debería mostrarse la imagen {string}", (altText: string) => {
    cy.get(`img[alt="${altText}"]`)
        .should("be.visible")
        .wait(3500);
});

When("el usuario avanza a la siguiente imagen del carrusel", () => {
    cy.get('[data-slot="carousel-next"]')
        .should("be.visible")
        .wait(5000)
        .click();
});


