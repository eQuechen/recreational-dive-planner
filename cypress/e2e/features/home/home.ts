import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario visita la página de inicio", () => {
    cy.visit("/");
});

Then("debería ver el título {string}", (title: string) => {
    cy.title().should("contain", title).wait(3000);
});

Then("debería ver el encabezado {string}", (heading: string) => {
    cy.contains("h1", heading).should("be.visible").wait(3000);
});

Then("debería ver el texto {string}", (text: string) => {
    cy.contains(text).should("be.visible").wait(3000);
});

Then("debería ver el enlace {string}", (linkText: string) => {
    cy.contains("a", linkText).should("be.visible").wait(3000);
});

When("hace clic en el enlace {string}", (linkText: string) => {
    cy.contains("a", linkText).click().wait(5000);
});

Then("la URL debería contener {string}", (path: string) => {
    cy.url().should("include", path).wait(3000);
});

Then(
    "el enlace {string} debería tener href {string}",
    (linkText: string, href: string) => {
        cy.contains("a", linkText)
            .should("have.attr", "href")
            .and("include", href).wait(3000);
    }
);

Then(
    "el enlace {string} debería tener target {string}",
    (linkText: string, target: string) => {
        cy.contains("a", linkText).should("have.attr", "target", target).wait(3000);
    }
);