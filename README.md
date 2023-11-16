# V 35 Primer archivo 

-Jsx es porque el codigo es xml mas javascript es decir React
- Importar react y ReactDOM para renderizar la App
- Siempre se inicia con un componente, es decir una funcion
(FuntionalComponnet)
- Se aconseja trabajar con react.Strictmode

# V 36 Primer componente 

- Implementar la estructura de carpetas como se quiera, lo recomenable es con buenas practicas

- Rafc crea automaticamente nuestro componente

# 38 Fragment - retornar elementos en el componente 

- Fragment: utilizado a menudo mediante <>...</>sintaxis, le permite agrupar elementos sin un nodo contenedor.

Envuelva elementos para <Fragment>agruparlos en situaciones en las que necesite un solo elemento. Agrupar elementos Fragment no tiene ningún efecto en el DOM resultante; es lo mismo que si los elementos no estuvieran agrupados. La etiqueta JSX vacía <></>es una abreviatura de <Fragment></Fragment>en la mayoría de los casos.

# 39 Impresion de variables en HTML

- {} Añadir una expresion permitida de javascript que no sea un objeto. Para poder lograrlo, utilizamos evaluando la expresion de react con JSON.stringfy
- React no hace un reproceso al tener una variable fuera de nuestro componente 
- Si lo hacemos con una promesa arrojaria error ya que en pocas palabras seria un objeto
- Recomendable poner nuestras funciones fuera de nuestros componentes, siempore y cuandoi no tengamos ninguna dependencia

# 41 Comunicacion entre componentes

- Las propiedades (Proops) Me pérmiten establecer comunicacion con el padre, y es un objeto 

# 42 Proptypes

- Obligar a otra persona que usea mis componentes a enviar nuestra propieda, titulo subtitulo etc

- Puedes definir static propTypes junto con la biblioteca prop-types para declarar los tipos de las props aceptadas por tu componente. Estos tipos se comprobarán durante el renderizado y sólo en el desarrollo.

*NOTA*: Recomendamos utilizar TypeScript en lugar de comprobar los tipos de prop en tiempo de ejecución.

# 43 Default props

- Mecanismo que tiene React para establecer un valor por default a las propiedades que no fueron definidas en la creación del componente, de esta forma, podemos establecer un valor y no dejar la propiedad en null.

# 45 Eventos click 

- onclick= {}es un expresion de javascript, esto nos ayuda a crear funciones o que regrese funciones dentro de la misma

# 46 Hooks

- te permiten usar diferentes funciones de React de tus componentes. Puedes usar los Hooks incorporados o combinarlos para construir los tuyos propios.