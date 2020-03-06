# Restaurante Backend
<img alt="logo" width="80px" src="public/favicon.png"> 
Este repositorio aloja el backend del proyecto "Restaurante Full Stack".
Este backend consiste en una API REST desarrollada con NodeJS. Esta API trabaja sobre una base de datos MongoDB, donde podremos realizar operaciones sobre dos colecciones: una de platos, y otra de cocineros.

Este backend está alojado en la siguiente dirección: http://restaurantebackend.herokuapp.com/

Las operaciones de esta API disponibles son:

---

## Operaciones sobre los platos

|RUTA	                        |MÉTODO HTTP	      |ACCIÓN                             |
|-----------------------------|-------------------|-----------------------------------|
|/api/platos	                |POST	              |Insertar plato                     |
|/api/platos	                |GET ALL            |Obtener todos los platos      |
|/api/platos/{nombre}	        |GET	              |Obtener un plato                   |
|/api/platos/{nombre}	        |UPDATE	            |Actualizar plato por nombre        |
|/api/platos/{nombre}	        |DELETE	            |Eliminar plato por nombre          |

---

## Operaciones sobre los cocineros

|RUTA	                        |MÉTODO HTTP	      |ACCIÓN                             |
|-----------------------------|-------------------|-----------------------------------|
|/api/cocineros	              |POST	              |Insertar cocinero                  |
|/api/cocineros	              |GET ALL            |Obtener todos los cocineros        |
|/api/cocineros/{nombre}	    |GET	              |Obtener un cocinero                |
|/api/cocineros/{nombre}	    |UPDATE	            |Actualizar cocinero por nombre     |
|/api/cocineros/{nombre}	    |DELETE	            |Eliminar cocinero por nombre       |


---

## Formato de los JSON
A la hora de realizar operaciones de POST y UPDATE, debemos tener en cuenta el siguiente formato de JSON:


**Para los platos**
```json
{
	"nombre":"Patatas pravas",
	"tipo":"Tapa",
	"minutosElaboracion": 15,
	"precio" : 3.5
}
```

**Para los cocineros**
```json
{
	"nombre":"Nombre",
	"apellidos":"Apellidos",
	"edad": 25,
	"especialidad" : "Repostería"
}
```




