import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario visita la página de planificación", () => {
    cy.visit("/planner").wait(3500);
});

Then("debería ver el botón {string}", (buttonText: string) => {
    cy.contains("a,button", buttonText).should("be.visible").wait(3500);
});

Then("debería ver el formulario {string}", (legendText: string) => {
    cy.contains("legend", legendText).should("be.visible").wait(3500);
});

Then("debería ver el texto de advertencia {string}", (warningText: string) => {
    cy.contains(warningText).should("be.visible").wait(3500);
});

Then("debería ver el campo {string}", (labelText: string) => {
    cy.contains("label", labelText).should("be.visible").wait(3500);
});

When("el usuario activa el campo {string}", (labelText: string) => {
    cy.contains("label", labelText)
        .should("be.visible")
        .wait(5000)
        .click();
});

When("el usuario selecciona {string} en el campo {string}", (valor: string, labelText: string) => {
    cy.contains("label", labelText)
        .parent()
        .find("button, [role='combobox']")
        .wait(3500)
        .click();
    cy.contains("div[role='option'],div[role='listbox'] div", valor)
        .wait(5000)
        .click();
});

When("el usuario introduce {string} en el campo {string}", (valor: string, labelText: string) => {
    cy.contains("label", labelText)
        .parent()
        .find("input")
        .clear()
        .wait(5000)
        .type(valor);
});

When("el usuario desactiva el campo {string}", (labelText: string) => {
    cy.contains("label", labelText)
        .wait(5000)
        .click();
});


Then("el campo {string} debería estar vacío", (labelText: string) => {
    cy.contains("label", labelText)
        .parent()
        .find("input,button,[role='combobox']")
        .should("have.value", "")
        .wait(3500);
});

Then("el campo {string} debería mostrar {string}", (labelText: string, valorEsperado: string) => {
    cy.contains("label", labelText)
        .parent()
        .find("input")
        .should("have.value", valorEsperado)
        .wait(5000);
});

When("el usuario hace clic en el botón {string}", (buttonText: string) => {
    cy.contains("button", buttonText)
        .should("be.visible")
        .wait(5000)
        .click();
});