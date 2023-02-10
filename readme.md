# CONFIGURACION Y ESTRUCTURA
1. Configuracion

    - Copiar el archivo *.env.template* y reemplazarlo por con el nombre *.env* agregar sus variables de entorno en este archivo
    - Correr ```npm install``` para instalacion de los paquetes de node
    - Ejecutar ```npm run dev``` para la ejecucion del programa
2. Estructura

    ```bash
    ├── src # Contiene los resources del proyectos
        ├── components # Entidades separadas con su operaciones con la base de datos y controladores
        ├── middleware # clase para el manejo de errores de rutas
        ├── models # clase server para el uso de express
        ├── routes # rutas del sistema
        ├── services # configuracion de servicios como base de datos
        ├── app.ts # iniciador
    ├── .env.template # template de las variables de entorno
    ├── .env # variables de entorno
    ```
