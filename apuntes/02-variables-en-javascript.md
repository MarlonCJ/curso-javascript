# 02. Variables en JavaScript

## Objetivo de aprendizaje

Al terminar esta lección, podrás declarar variables con `const` y `let`, guardar datos en ellas y mostrar esos datos en la consola.

## 1. Conceptos fundamentales

Una **variable** es un nombre asociado a un dato que un programa puede utilizar. Por ejemplo, podemos guardar el nombre de una persona en `nombre` y consultar ese valor más adelante.

En JavaScript usamos principalmente estas dos palabras clave:

- `const` declara una variable que no se volverá a asignar.
- `let` declara una variable que puede recibir otro valor más adelante.

El símbolo `=` asigna un valor a una variable. En una declaración, se lee como «guarda el valor de la derecha bajo el nombre de la izquierda».

## 2. Explicación paso a paso

La forma general es:

```javascript
const nombreDeVariable = valor;
```

Por ejemplo, `const nombre = "Marlon";` crea una variable llamada `nombre` y guarda en ella el texto `"Marlon"`. Los textos se escriben entre comillas.

Usa `const` como opción predeterminada. Si necesitas reasignar el valor, declara la variable con `let`.

## 3. Sintaxis

```javascript
const nombre = "Marlon"; // No reasignaremos esta variable.
let objetivo = "Aprender JavaScript"; // Esta variable puede cambiar.

objetivo = "Crear aplicaciones web"; // Reasignación permitida con let.
```

## 4. Ejemplo básico

```javascript
// Guarda un nombre y lo muestra en la consola.
const nombre = "Marlon";
console.log(nombre);
```

`console.log(nombre)` muestra el valor guardado, no el nombre de la variable.

## 5. Ejemplo intermedio

```javascript
// Declaramos un objetivo que puede actualizarse.
let objetivo = "Aprender JavaScript";
console.log(objetivo);

// Reemplazamos el valor anterior por uno nuevo.
objetivo = "Crear aplicaciones web";
console.log(objetivo);
```

La consola mostrará primero `Aprender JavaScript` y después `Crear aplicaciones web`.

## 6. Ejemplo aplicado a un proyecto

En un sistema de registro, el programa podría guardar temporalmente algunos datos del usuario:

```javascript
// Datos de ejemplo; todavía no provienen de un formulario.
const nombreUsuario = "Marlon";
let edadUsuario = 20;

console.log("Usuario:", nombreUsuario);
console.log("Edad:", edadUsuario);
```

Los nombres `nombreUsuario` y `edadUsuario` describen qué representa cada dato. Más adelante aprenderemos a obtener esos valores de un formulario.

## 7. Resultado esperado

Al ejecutar los ejemplos en la consola del navegador, verás los valores guardados. En el ejemplo intermedio aparecerán dos valores para `objetivo`, uno por cada llamada a `console.log()`.

## 8. Buenas prácticas

- Usa `const` por defecto y `let` solo cuando necesites reasignar el valor.
- Elige nombres descriptivos, como `nombreUsuario`, en lugar de nombres ambiguos como `x`.
- En JavaScript se suele escribir en **camelCase**: la primera palabra empieza en minúscula y cada palabra siguiente comienza con mayúscula.

## 9. Errores comunes

- Intentar reasignar una variable declarada con `const`.
- Usar una variable antes de declararla.
- Olvidar las comillas alrededor de un texto.
- Declarar con `let` un valor que nunca se reasigna; en ese caso, `const` expresa mejor la intención.

## 10. Ejercicio

Modifica `script.js` para que:

1. Guarde tu nombre en una constante llamada `nombre`.
2. Guarde tu objetivo de aprendizaje en una constante llamada `objetivo`.
3. Muestre ambos valores en la consola usando `console.log()`.

Cuando termines, comparte el contenido de `script.js` para revisarlo antes de avanzar.

## 11. Reto avanzado (opcional)

Declara una variable `let progreso = 0`, muestra su valor, reasígnala a `1` y vuelve a mostrarla. Explica con tus palabras por qué aquí usamos `let`.
