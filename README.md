


INTERVIEW TEST
=============

Prueba técnica para backend
Proyecto desarrollado con la versión <abbr title="Hyper Text Markup Language">16.13.2</abbr> de node.js

Instrucciones para ejecutar el proyecto: 

> npm install

Se debe copiar el .env.examplee y reenombrar a .env y agregar los parametros de conexión:

>PORT=3150
DB_USER=''
DB_PASSWORD=''
DB_HOST=''
DB_NAME=''
DB_PORT=''

Luego se ejecuta el proyecto de la siguiente forma: 
> npm run serve

La api disponible es la siguiente: 

> http://localhost:3150/api/v1/users

Recibe un body con la siguiente estructura: 

>{
	"username":"admin",
	"password":"admin"
}

retorna un objeto con la siguiente estructura: 

>{
	"fullname": "Juan Perez"
}
