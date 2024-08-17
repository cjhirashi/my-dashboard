# Dashboar (CJH) - NEXT JS

Dashboard de herramientas funcionales 

## Development
Pasos para levantar la app en desarrollo

1. levantar la base de datos
```
docker compose up -d
```

2. inicializar Prisma
```
npx prisma init
```

3. Crear una copia del archivo .env.template a .env
4. Asignar las variables de entorno
5. Activar el servidor ```npm run dev```

6. Se crea el primer modelo en schema.prisma y se ejecunta una migración
```
npx prisma migrate dev
```
7. Se crea el cliente de Prisma 
```
npx prisma generate
```
8. Ejecutar el SEED para [crear la base de datos local](http://localhost:3000/api/seed)

## Prisma
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

## Prod

## Stage
____________________________________________________________________________________________________________

## Librerias instaladas

### React Icons

Iconos propios de **React**, consulta de [documentación](https://react-icons.github.io/react-icons/)

```bash
npm install react-icons --save
```
### Tailwind

Propiedades CSS del proyecto, consulta de [documentación](https://tailwindcss.com/docs/installation)

### Redux Toolkit y React Redux

Gestor de almacenamiento interno en storage, consulta de [documentación](https://redux-toolkit.js.org/introduction/getting-started)

```bash
npm install @reduxjs/toolkit react-redux
```
### Prisma, gestor de base de datos

Gestor de base de datos con ***Postgres***

Prisma comandos

```
npx prisma init

npx prisma migrate dev
```

### Yup 

Esquemas de validación de datos para API

```
npm install yup
```
____________________________________________________________________________________________________________

Para ejecutar archivo de docker /docker-compose.yml para la creación de base de datos

```bash
docker composer up -d
```

____________________________________________________________________________________________________________

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
