# Fires Catalanes

Aplicacion web en Angular para explorar ferias en Cataluna, con filtros por comarca, poblacion y fecha, ademas de sistema de favoritos en `localStorage`.

## Requisitos

- Node.js 22 LTS (recomendado)
- npm 11.8.0

## Clonar y arrancar en local

```bash
git clone <URL_DEL_REPO>
cd firesCatalanes
npm install
npm start
```

La app quedara disponible en:

`http://localhost:4200/`

## Rutas principales

- `/` inicio con ferias de los proximos 10 dias
- `/comarca` filtro por comarca
- `/poblacio` filtro por localidad
- `/data` filtro por fecha
- `/preferides` listado de favoritos guardados en el navegador

## Scripts utiles

```bash
npm start      # levanta el servidor de desarrollo
npm run build  # build de produccion en dist/firesCatalanes
npm test       # tests unitarios
```

## Estado actual de tests

En el estado actual del repositorio, `npm test` falla por imports desactualizados en varios `*.spec.ts` (nombres de clases no coinciden con los componentes actuales).  
El build de produccion (`npm run build`) si compila correctamente.
