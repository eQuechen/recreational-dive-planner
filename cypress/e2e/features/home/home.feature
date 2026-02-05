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
    And debería ver el botón "Ver tabla RDP"

  Scenario: El usuario puede abrir la tabla RDP y ver las dos imágenes
    Given el usuario visita la página de inicio
    When el usuario hace click en "Ver tabla RDP"
    Then debería mostrarse el modal de la tabla RDP
    And debería mostrarse la imagen "Tabla RDP frontal"
    When el usuario avanza a la siguiente imagen del carrusel
    Then debería mostrarse la imagen "Tabla RDP trasera"



  Scenario: El usuario puede navegar al planificador
    Given el usuario visita la página de inicio
    When hace clic en el enlace "Ir a planificación"
    Then la URL debería contener "/planner"