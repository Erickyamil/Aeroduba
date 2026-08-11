# AeroDuba

Sitio web corporativo de AeroDuba, dedicado a soluciones industriales de torres de enfriamiento.

## Tecnologías

- React 19 y React DOM 19
- TypeScript
- Vite 8
- Tailwind CSS v4
- Figma Make

## Requisitos

- Node.js 22
- pnpm 10 (recomendado; las versiones se definen en `.mise.toml`)

## Desarrollo local

Instala las dependencias:

```bash
pnpm install
```

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

La aplicación estará disponible en el puerto `8443` de forma predeterminada.

## Scripts

```bash
pnpm dev       # Inicia Vite en modo desarrollo
pnpm build     # Genera la compilación de producción en dist/
pnpm preview   # Sirve la compilación de producción
pnpm format    # Formatea el proyecto con oxfmt
```

## Estructura principal

- `src/App.tsx`: interfaz principal del sitio.
- `src/main.tsx`: punto de entrada de React.
- `src/index.css`: estilos globales y configuración de Tailwind.
- `src/imports/`: imágenes y recursos usados por la aplicación.
- `vite.config.ts`: configuración de Vite y Figma Make.

## Figma Make

En Figma Make el servidor de desarrollo ya está administrado por el entorno. Al editar archivos en `src/`, la vista previa se actualiza automáticamente.
