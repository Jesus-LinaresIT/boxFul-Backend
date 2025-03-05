# 📦 Boxful - API Backend (NestJS)

Este repositorio contiene el código fuente de la **API REST** de **Boxful**, desarrollada con **NestJS** y **Prisma**.

## Tecnologías Utilizadas
- **NestJS** (Framework de Node.js)
- **TypeScript**
- **Prisma** (ORM para base de datos)
- **MongoDB**
- **JWT** (Autenticación)

## Instalación y Configuración

### Requisitos Previos
Antes de iniciar, asegúrate de tener instalado:
- **Node.js** (versión 16 o superior)
- **npm** o **yarn**

### Pasos para Instalar y Ejecutar
1. **Clonar el repositorio**:
    ```sh
    git clone https://github.com/Jesus-LinaresIT/boxFul-Backend.git
    cd boxful-backend
    git fetch -v
    git checkout dev
    git pull


2. **Instalar dependencias:**:
    ```sh
    npm install
    yarn install

3. **Configurar variables de entorno: Crea un archivo .env.local en la raíz del proyecto y agrega:**
    ```sh
    DATABASE_URL="mongodb+srv://user:password@localhost:3306/boxful?retryWrites=true&w=majority&appName=nameCluster"
    JWT_SECRET="tu_secreto"

4. **Ejecutar la sincronización a la base de datos con los modelos de schema.prisma**:
    ```sh
    npx prisma generate
    npx prisma db push

4. **Iniciar el servidor de desarrollo**:
    ```sh
    npm run start:dev
    # o si usas yarn
    yarn dev:dev
