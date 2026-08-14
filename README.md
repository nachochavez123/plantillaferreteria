# 🛠️ Ferretería Industrial Santa Cruz - Plataforma Web E-Commerce & Portal Mayorista

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.style=for-the-badge)

Plataforma e-commerce e industrial desarrollada para **Ferretería Industrial Santa Cruz** (*Patagonia Industrial*), diseñada para brindar atención integral a consumidores finales (minoristas) y empresas constructoras / contratistas (portal mayorista B2B).

---

## 🌟 Características Principales

- 🌓 **Modos Claro y Oscuro Dynamico:** Alternador instantáneo entre *Patagonia Industrial Light* (superficies limpias, acento naranja industrial) y *Patagonia Industrial Dark* (fondo carbón `#051424`, acento azul eléctrico `#60a5fa`).
- 🏷️ **Tarifario Dinámico Minorista / Mayorista:** Cambio global de precios en catálogo con aplicación de descuentos del 15% para clientes mayoristas registrados.
- 🔍 **Buscador & Filtros en Tiempo Real:** Búsqueda rápida por nombre/rubro y filtros por categorías (*Herramientas*, *Materiales*, *Electricidad*, *Seguridad*) y estado de stock.
- 📦 **Gestión de Stock por Depósito:** Ficha técnica de productos con disponibilidad física detallada por sucursal (*Río Gallegos*, *El Calafate*).
- 🛒 **Carrito & Checkout Interactivo:** Suma automática de ítems, cálculo de IVA (21%), aplicación de código promocional (`MAYORISTA2026`) y modal de finalización de compra.
- 💼 **Portal Mayorista B2B:** Control de línea de crédito activa ($1.850.000 disponible sobre $2.500.000 límite), formulario de cómputo de obra express y descarga de listas de precios.
- 📱 **Diseño 100% Adaptable (Responsive):** Menú lateral para computadoras de escritorio y barra de navegación inferior (*Bottom Bar*) para dispositivos móviles.

---

## 📂 Estructura del Repositorio

```text
ferreteria-santa-cruz-app/
├── index.html          # Estructura Single-Page Application (SPA) con vistas y modales
├── app.js              # Lógica del cliente, estado del carrito, temas y filtros
├── server.ps1          # Servidor de prueba local en PowerShell
├── package.json        # Configuración del proyecto y scripts
├── README.md           # Documentación del proyecto
└── .gitignore          # Archivos excluidos del control de versiones
```

---

## 🚀 Instalación y Ejecución Local

### Opción A: Usando Node.js / Vite (Recomendado)

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/ferreteria-santa-cruz-app.git

# 2. Entrar al directorio
cd ferreteria-santa-cruz-app

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`.

### Opción B: Ejecución Directa en Windows (Sin Node.js)

Podés iniciar el servidor incorporado en PowerShell ejecutando:

```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```

---

## 🌐 Publicación en GitHub Pages

Para publicar este proyecto de forma gratuita en **GitHub Pages**:

1. Crea un nuevo repositorio en GitHub (ej: `ferreteria-santa-cruz-app`).
2. Ejecuta los siguientes comandos en la terminal:

```bash
git remote add origin https://github.com/TU_USUARIO/ferreteria-santa-cruz-app.git
git branch -M main
git push -u origin main
```

3. En GitHub, ve a **Settings > Pages**.
4. En **Source**, selecciona `Deploy from a branch` y elige la rama `main` (root `/`).
5. ¡Listo! Tu página estará publicada en `https://TU_USUARIO.github.io/ferreteria-santa-cruz-app/`.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
