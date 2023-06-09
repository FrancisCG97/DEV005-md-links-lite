# mdLinks Lite

### ¿Qué es mdLinks Lite?

mdLinks Lite es una librería de NodeJS que permite al usuario buscar links en archivos con extensión .md (markdown),
además los valida, identificando a qué extensión corresponden. Si tiene extensión .md retorna en la
consola la información del estado actual de cada link, en cambio, si tiene otra extensión, retornaría un mensaje comentando que es una ruta inválida.

***

### Diagrama de flujo

[Diagrama de flujo](https://res.cloudinary.com/ddps8p6x2/image/upload/v1686325199/Diagrama_de_flujo_epioyz.png)

***

### mdLinks Lite consta de:

mdLinks(path, options)

Argumentos:

* path: Ruta absoluta o relativa al archivo. Si la ruta entregada es relativa, se convierte en absoluta.

* options: Objeto que consiste en la propiedad validate.

* validate: Comando que determina si se desea validar los links encontrados.

***

#### Valores de retorno

Con validate:true :

* href: URL encontrada.
* text: Texto que aparecía dentro del link (<a>).
* file: Ruta del archivo donde se encontró el link.
* status: Código de respuesta HTTP.
* ok: Mensaje fail en caso de fallo u ok en caso de éxito.

[Ejemplo validate:true](https://res.cloudinary.com/ddps8p6x2/image/upload/v1686325876/Validate_true_lrm8on.png) 

Con validate:false :

* href: URL encontrada.
* text: Texto que aparecía dentro del link (<a>).
* file: Ruta del archivo donde se encontró el link.

[Ejemplo validate:false](https://res.cloudinary.com/ddps8p6x2/image/upload/v1686325875/Validate_false_qzjp3q.png)

Ruta inválida: En caso de que se ingrese un ruta que no corresponda a un archivo con extensión .md, retorna el mensaje "No es una ruta válida".

[Ejemplo ruta inválida](https://res.cloudinary.com/ddps8p6x2/image/upload/v1686325875/Ruta_invalida_o7lsqo.png)

***
