# Servicio de Autenticación

Este proyecto es un servicio web simple creado con Node.js y Express, que permite el registro y el inicio de sesión de usuarios. Se utiliza JWT (JSON Web Tokens) para manejar la autenticación de los usuarios. Este proyecto fue desarrollado como parte de una evidencia de formación en el SENA, en la tecnología en análisis y desarrollo de software.

## Endpoints

El servicio web expone dos endpoints principales:

### 1. Registro (`/register`)

- **Método HTTP:** POST
- **Descripción:** Permite a los usuarios registrarse en el sistema. Los usuarios deben proporcionar un nombre de usuario y una contraseña. Si el nombre de usuario ya existe, el registro no se completará.
- **Cuerpo de la solicitud (JSON):**
  ```json
  {
    "username": "usuario",
    "password": "contraseña"
  }
  ```
- **Respuestas:**
  - **201 Created:** Si el usuario se registra correctamente.
  - **400 Bad Request:** Si el nombre de usuario ya existe.

### 2. Inicio de sesión (`/login`)

- **Método HTTP:** POST
- **Descripción:** Permite a los usuarios iniciar sesión en el sistema. Los usuarios deben proporcionar su nombre de usuario y contraseña. Si las credenciales son correctas, se devuelve un token JWT.
- **Cuerpo de la solicitud (JSON):**
  ```json
  {
    "username": "usuario",
    "password": "contraseña"
  }
  ```
- **Respuestas:**
  - **200 OK:** Si la autenticación es exitosa, retorna un mensaje de autenticación satisfactoria junto con el token JWT.
  - **401 Unauthorized:** Si hay un error en la autenticación.

## Configuración y ejecución

Para ejecutar este proyecto, asegúrate de tener Node.js y npm instalados. Luego sigue estos pasos:

1. Clona el repositorio.
2. Navega al directorio del proyecto y ejecuta `npm install` para instalar las dependencias.
3. Inicia el servidor con `node index.js` (o el nombre de tu archivo principal).
4. El servidor estará corriendo en `http://localhost:3000`.

## Notas de desarrollo

Este proyecto es una simplificación y se utiliza para fines educativos en el SENA. En un entorno de producción, se deben considerar aspectos como la encriptación de contraseñas, la persistencia de datos en una base de datos y el manejo avanzado de errores.