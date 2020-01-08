Instrucciones para cargar correctamente la aplicacion
-- Instalar EXPO
ejecutar en linea de comandos  npm install -g expo-cli

-- Instalar dependencias
ejecutar en linea de comandos: npm install

-- reeemplazar direccion IP en archivo src/Api/HotelApi por la PC en donde se ejecutará el código, de lo contrario, no cargará la base de datos

-- ejecutar en linea de comandos:
npm run knex migrate:latest
npm run knex seed:run

--- ejecutar node app.js en hotel_project (ingresar dir github)


-- Iniciar aplicación
ir a la carpeta react-native-example y ejecutar npm start

-- Instalar la aplicación EXPO en el celular y escanear el codigo QR que se abre en el navegador (o ejecutar android studio) 