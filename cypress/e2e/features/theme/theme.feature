Feature: Tema (claro, oscuro y sistema)

  COMO usuario
  QUIERO poder cambiar entre tema claro, oscuro y el del sistema operativo
  PARA visualizar la aplicación con el estilo que prefiera

  Background:
    Given el usuario visita la página de inicio

  Scenario: El usuario puede activar el modo oscuro
    When el usuario cambia el tema a "oscuro"
    Then el sitio debería estar en modo "oscuro"

  Scenario: El usuario puede activar el modo claro
    When el usuario cambia el tema a "claro"
    Then el sitio debería estar en modo "claro"

  Scenario: El usuario puede usar el tema del sistema operativo
    When el usuario cambia el tema a "sistema"
    Then el sitio debería estar en modo "sistema"
