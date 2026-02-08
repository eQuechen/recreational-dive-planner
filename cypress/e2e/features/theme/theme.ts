import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario visita la página de inicio", () => {
    cy.visit("/")
        .wait(3500);
});

When("el usuario cambia el tema a {string}", (tema: string) => {
    // Abre el dropdown del ThemeToggle (Radix/shadcn)
    cy.get('button[data-slot="dropdown-menu-trigger"]')
        .should("be.visible")
        .wait(5000)
        .click();

    if (tema === "oscuro") {
        cy.contains('[role="menuitem"]', /oscuro|dark/i)
            .should("be.visible")
            .wait(5000)
            .click();
    } else if (tema === "claro") {
        cy.contains('[role="menuitem"]', /claro|light/i)
            .should("be.visible")
            .wait(5000)
            .click();
    } else if (tema === "sistema") {
        cy.contains('[role="menuitem"]', /sistema|system/i)
            .should("be.visible")
            .wait(5000)
            .click();
    } else {
        throw new Error(`Tema no soportado: ${tema}`);
    }
});

Then("el sitio debería estar en modo {string}", (tema: string) => {
    if (tema === "oscuro") {
        cy.get("html")
            .should("have.class", "dark")
            .wait(3500);
    } else if (tema === "claro") {
        cy.get("html")
            .should("not.have.class", "dark")
            .wait(3500);
    } else if (tema === "sistema") {
        cy.window().then((win) => {
            const isDark = win.matchMedia("(prefers-color-scheme: dark)").matches;

            if (isDark) {
                cy.get("html")
                    .should("have.class", "dark")
                    .wait(3500);
            } else {
                cy.get("html")
                    .should("not.have.class", "dark")
                    .wait(3500);
            }
        });
    } else {
        throw new Error(`Tema no soportado: ${tema}`);
    }
});
