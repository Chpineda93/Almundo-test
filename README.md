Instrucciones para cargar correctamente la aplicacion


-- Instalar EXPO
ejecutar en linea de comandos:  npm install -g expo-cli

-- Instalar dependencias en carpeta principal Almundo test ((https://github.com/Chpineda93/Almundo-test)
ejecutar en linea de comandos: npm install

-- Instalar dependencias en carpeta react-native-example
ejecutar en linea de comandos: npm install

-- reemplazar direccion IP en archivo react-native-example/src/Api/HotelApi por la direccion IP de la pc donde se encuentran descargados los archivos (el archivo es https://github.com/Chpineda93/Almundo-test/blob/master/react-native-example/src/Api/HotelApi.ts, el puerto es 3000)

-- ejecutar en linea de comandos desde la carpeta Almundo-test (https://github.com/Chpineda93/Almundo-test):
npm run knex migrate:latest
npm run knex seed:run
node app.js

-- Iniciar aplicación de react native:
en linea de comandos, ir a la carpeta react-native-example (https://github.com/Chpineda93/Almundo-test/tree/master/react-native-example) y ejecutar npm start

-- Instalar la aplicación EXPO en el celular y escanear el codigo QR que se abre en el navegador (o en su defecto usar Android Studio) 
