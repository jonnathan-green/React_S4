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

# 40 Añadir estilos CSS

- 