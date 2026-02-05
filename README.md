# RDP Planner web app

## Descripción
Este proyecto es una **aplicación web** desarrollada con **Next.js** que digitaliza parte de la **tabla RDP (Recreational Dive Planner)** utilizada en buceo recreativo.

La **tabla RDP** es una herramienta utilizada para calcular los **límites de no descompresión (NDL)** en función de la **profundidad máxima** y el **tiempo de fondo**, permitiendo planificar inmersiones recreativas dentro de márgenes de seguridad.

> ⚠️ **AVISO**: Implementación técnica basada en tablas RDP con fines demostrativos.  
> **NO válida para planificación real de inmersiones.**

---

## Tecnologías utilizadas

El proyecto se está desarrollando con las siguientes tecnologías y versiones:

### Lenguaje
- **JavaScript**

### Runtime
- **Node.js**: v24.x (LTS activa)

### Frameworks y librerías
- **Next.js**: v16.1.6 (instalada mediante `create-next-app`)
- **React**: v19.2.3 (incluida con Next.js)

### Herramientas de desarrollo
- **npm**: v11.6.2
- **npx**: v11.6.2
- **ESLint**: v9.39.2 (incluida con Next.js)

### Entorno de desarrollo
- Sistema operativo: **macOS**
- Ejecución en local mediante:
  ```bash
  npm run dev
  ```
  
---

## Componentes reutilizables

Se han implementado componentes reutilizables para mejorar la modularidad y escalabilidad del proyecto:

- **ThemeProvider (next-themes)**: gestión global del tema (light / dark / system) mediante clase `dark` en el HTML.
- **Componentes UI (shadcn/ui)**: uso de componentes reutilizables preconstruidos como `Button` y `DropdownMenu` para implementar el selector de tema.

---

---

## Testing

El proyecto incluye **tests End-to-End (E2E)** utilizando **Cypress** junto con **Cucumber (BDD)**.

### Herramientas
- **Cypress**: framework de testing E2E.
- **Cucumber Preprocessor**: permite escribir escenarios en formato `.feature` usando sintaxis Gherkin.

### Estructura de tests

Los tests se organizan por dominio/feature:

```txt
cypress/
  feature/
    example1/
      example1.feature
      example1.ts
    example2/
      example2.feature
      example2.ts
```

### Ejecutar los tests (Cypress + Cucumber)

Para ejecutar los tests E2E es necesario levantar primero el servidor de desarrollo de Next.js y después lanzar Cypress.

#### 1 Iniciar el servidor de desarrollo (Next.js)

Este comando arranca la aplicación en modo desarrollo en `http://localhost:3000`.

```bash
npm run dev
```

#### 2-A Ejecutar Cypress en modo interactivo (UI)

Abre la interfaz gráfica de Cypress, permitiendo ejecutar los tests manualmente y visualizar el navegador.
```bash
npx cypress open
```

1. En la UI selecciona:
`E2E Testing`
2. Elige navegador:
`Chrome (recomendado)`
3. Start E2E Testing in Chrome
4. En la lista de specs haz clic en los archivos .feature:
`cypress/feature/example/example.feature`

#### 2-B Ejecutar Cypress en modo headless (CLI)

Ejecuta todos los tests automáticamente desde terminal, sin interfaz gráfica.
```bash
npx cypress run
```