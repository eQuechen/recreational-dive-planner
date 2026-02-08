Feature: Página de planificación

    COMO usuario
    QUIERO acceder a la página de planificación de inmersiones
    PARA poder calcular los parámetros de seguridad de mis inmersiones

    Scenario: El usuario carga correctamente la página de planificación
        Given el usuario visita la página de planificación
        Then debería ver el botón "Volver"
        And debería ver el formulario "RDP digital"
        And debería ver el texto de advertencia "⚠️ NO válida para planificación real de inmersiones."
        And debería ver el campo "Inmersión sucesiva"
        And debería ver el campo "Profundidad máxima (m)"
        And debería ver el campo "Límite de no descompresión (NDL)"
        And debería ver el campo "Tiempo de fondo (min)"
        And debería ver el campo "Grupo de presión post-inmersión"
        And debería ver el botón "Calcular grupo"
        And debería ver el botón "Borrar"

    Scenario: El usuario activa la opción de inmersión sucesiva y ve los campos correspondientes
        Given el usuario visita la página de planificación
        When el usuario activa el campo "Inmersión sucesiva"
        Then debería ver el campo "Grupo de presión actual"
        And debería ver el campo "Intervalo en superficie (min)"
        And debería ver el campo "Grupo de presión pre-inmersión"

    Scenario: El usuario desactiva la opción de inmersión sucesiva y se limpian los campos
        Given el usuario visita la página de planificación
        When el usuario activa el campo "Inmersión sucesiva"
        And el usuario selecciona "B" en el campo "Grupo de presión actual"
        And el usuario introduce "60" en el campo "Intervalo en superficie (min)"
        And el usuario desactiva el campo "Inmersión sucesiva"
        And el usuario activa el campo "Inmersión sucesiva"
        Then el campo "Grupo de presión actual" debería estar vacío
        And el campo "Intervalo en superficie (min)" debería estar vacío
        And el campo "Grupo de presión pre-inmersión" debería mostrar "-"

    Scenario: El usuario rellena los campos, calcula el grupo y luego borra los datos
        Given el usuario visita la página de planificación
        When el usuario introduce "18" en el campo "Profundidad máxima (m)"
        Then el campo "Límite de no descompresión (NDL)" debería mostrar "56"
        And el usuario introduce "30" en el campo "Tiempo de fondo (min)"
        And el usuario hace clic en el botón "Calcular grupo"
        Then el campo "Grupo de presión post-inmersión" debería mostrar "K"
        When el usuario hace clic en el botón "Borrar"
        Then el campo "Profundidad máxima (m)" debería estar vacío
        And el campo "Tiempo de fondo (min)" debería estar vacío
        And el campo "Grupo de presión post-inmersión" debería mostrar "-"

    Scenario: El usuario realiza una inmersión sucesiva y calcula el grupo
        Given el usuario visita la página de planificación
        When el usuario activa el campo "Inmersión sucesiva"
        And el usuario selecciona "K" en el campo "Grupo de presión actual"
        And el usuario introduce "45" en el campo "Intervalo en superficie (min)"
        Then el campo "Grupo de presión pre-inmersión" debería mostrar "E"
        And el usuario introduce "16" en el campo "Profundidad máxima (m)"
        Then el campo "Límite de no descompresión (NDL)" debería mostrar "51"
        And el usuario introduce "45" en el campo "Tiempo de fondo (min)"
        And el usuario hace clic en el botón "Calcular grupo"
        Then el campo "Grupo de presión post-inmersión" debería mostrar "V"