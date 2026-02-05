Feature: Página de inicio

  COMO usuario
  QUIERO ver la página principal de la aplicación
  PARA entender qué hace y poder navegar al planificador

  Scenario: El usuario carga correctamente la página de inicio
    Given el usuario visita la página de inicio
    Then debería ver el título "Recreational Dive Planner"
    And debería ver el encabezado "Recreational Dive Planner Web App"
    And debería ver el texto "Cómo usar la app"
    And debería ver el enlace "Ir a planificación"
    And debería ver el enlace "Ver tabla RDP"

  Scenario: El usuario puede navegar al planificador
    Given el usuario visita la página de inicio
    When hace clic en el enlace "Ir a planificación"
    Then la URL debería contener "/planner"

  Scenario: El usuario puede abrir la tabla RDP en una nueva pestaña
    Given el usuario visita la página de inicio
    Then el enlace "Ver tabla RDP" debería tener href "/rdp_table/rdp-metric-front.png"
    And el enlace "Ver tabla RDP" debería tener target "_blank"