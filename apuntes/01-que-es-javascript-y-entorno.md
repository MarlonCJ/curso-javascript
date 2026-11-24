# 01. ¿Qué es JavaScript y cómo funciona?

## Objetivo de aprendizaje

Al terminar esta clase, podrás explicar para qué sirve JavaScript, cómo se ejecuta en un navegador y cómo preparar una página sencilla para probarlo.

## 1. Conceptos fundamentales

**JavaScript** es un lenguaje de programación. Un lenguaje de programación permite dar instrucciones a una computadora.

En una página web, suele encargarse de la **interactividad**: responder a un clic, validar un formulario o actualizar contenido sin recargar toda la página.

Una página web suele combinar tres tecnologías:

- **HTML** define la estructura y el contenido.
- **CSS** define la apariencia.
- **JavaScript** define el comportamiento.

## 2. ¿Cómo funciona JavaScript en el navegador?

Cuando visitas una página, el navegador recibe sus archivos y los interpreta:

1. Lee el HTML para construir la estructura de la página.
2. Aplica el CSS para mostrar colores, tamaños y distribución.
3. Ejecuta JavaScript para habilitar acciones e interacciones.

El navegador incluye un **motor de JavaScript**, que lee y ejecuta las instrucciones del lenguaje. Por ahora, usaremos el navegador para practicar; más adelante conocerás otras formas de ejecutar JavaScript.

## 3. Preparar el entorno

1. Abre la carpeta del proyecto `D:\DESARROLLO WEB\curso-javascript` en tu editor de código.
2. Crea un archivo llamado `index.html`.
3. Crea otro llamado `script.js`.
4. Abre `index.html` en un navegador. Cada vez que hagas cambios, guarda el archivo y recarga la página.

## 4. Primera práctica

En `index.html`, escribe:

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi primera práctica</title>
</head>
<body>
  <h1>Mi primera práctica con JavaScript</h1>

  <!-- El navegador carga el archivo JavaScript después del contenido HTML. -->
  <script src="script.js"></script>
</body>
</html>
```

En `script.js`, escribe:

```javascript
// Muestra un mensaje en la consola del navegador.
console.log("¡Hola, JavaScript!");
```

`console.log(...)` muestra información en la consola, una herramienta del navegador que sirve para observar lo que hace el programa. Para abrirla, normalmente puedes hacer clic derecho en la página, seleccionar **Inspeccionar** y luego abrir la pestaña **Consola**.

## 5. Resultado esperado

La página mostrará el título “Mi primera práctica con JavaScript”. En la consola aparecerá:

```text
¡Hola, JavaScript!
```

Si no aparece, revisa que los archivos estén en la misma carpeta, que se llamen exactamente `index.html` y `script.js`, y que la etiqueta `script` tenga el nombre correcto.

## 6. Buenas prácticas

- Usa nombres de archivo sencillos y descriptivos.
- Guarda los archivos antes de recargar la página.
- Lee los mensajes de la consola: suelen ayudar a detectar errores.
- Mantén el JavaScript en un archivo separado mientras aprendes. Así es más fácil encontrarlo y mantenerlo.

## 7. Errores comunes

- Escribir `Script.js` en la etiqueta y `script.js` como nombre del archivo. En algunos entornos las mayúsculas importan.
- Guardar accidentalmente un archivo como `script.js.txt`.
- Mirar el contenido de la página, pero no la consola, donde aparece el mensaje de JavaScript.
- Olvidar guardar el archivo antes de recargar.

## 8. Ejercicio

Sin copiar otro ejemplo, modifica `script.js` para que la consola muestre:

1. Tu nombre.
2. Una frase sobre algo que te gustaría crear con JavaScript.

Luego recarga la página y comprueba que ambos mensajes aparecen en la consola. Cuando termines, comparte el contenido de `script.js` y lo revisaremos antes de avanzar al siguiente tema.
