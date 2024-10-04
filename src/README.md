# Product API

Una API sencilla para gestionar productos utilizando Node.js, Express y Zod.

## Endpoints

- **POST /api/products**: Crear un producto.
  - **Body**: 
    ```json
    {
      "name": "Product 1",
      "description": "Description of Product 1",
      "price": 100,
      "quantity": 10
    }
    ```
- **GET /api/products**: Obtener todos los productos.
- **GET /api/products/:id**: Obtener un producto por ID.
- **PUT /api/products/:id**: Actualizar un producto por ID.
- **DELETE /api/products/:id**: Eliminar un producto por ID.

## Ejecutar la aplicación

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm start` para iniciar el servidor.

La API estará disponible en `http://localhost:3000`.

## Decisiones

- **Express**: Elegido por su simplicidad y flexibilidad.
- **Zod**: Para la
