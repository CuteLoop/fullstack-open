

**[solución ejercicio 0.4](../part-0/ejercicio-0.4.mmd) **
** [solución ejercicio 0.5](../part-0/ejercicio-0.5.mmd) **
** [solución ejercicio 0.6](../part-0/ejercicio-0.6.mmd) **






## Instrucciones para la tarea de la parte 0 
  <h4>0.1: HTML</h4>

Revisa los conceptos básicos de HTML leyendo este tutorial de Mozilla: [tutorial de HTML](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics).

<i>Este ejercicio no se envía a GitHub, leer el tutorial es suficiente</i>

  <h4>0.2: CSS</h4>

Revisa los conceptos básicos de CSS leyendo este tutorial de Mozilla: [tutorial de CSS](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics).

<i>Este ejercicio no se envía a GitHub, leer el tutorial es suficiente</i>

  <h4>0.3: Formularios HTML</h4>

Aprende sobre los conceptos básicos de los formularios HTML leyendo el tutorial de Mozilla [Mi primer formulario HTML](https://developer.mozilla.org/es/docs/Learn/Forms/Your_first_form).

<i>Este ejercicio no se envía a GitHub, leer el tutorial es suficiente</i>

  <h4>0.4: Nuevo diagrama de nota</h4>

En el capítulo [Cargando una página que contiene JavaScript - revisión](/es/part0/fundamentos_de_las_aplicaciones_web#cargando-una-pagina-que-contiene-java-script-revisada) la cadena de eventos causada al abrir la página <https://studies.cs.helsinki.fi/exampleapp/notes> se representa como un [diagrama de secuencia](https://www.geeksforgeeks.org/unified-modeling-language-uml-sequence-diagrams/)

El diagrama se hizo como un archivo Markdown de Github usando la sintaxis [Mermaid](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams), de la siguiente manera:

```text
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```

**Crea un diagrama similar** que describa la situación en la que el usuario crea una nueva nota en la página <https://studies.cs.helsinki.fi/exampleapp/notes> escribiendo algo en el campo de texto y haciendo clic en el botón <i>Save</i>.

Si es necesario, muestra las operaciones en el navegador o en el servidor como comentarios en el diagrama.

El diagrama no tiene por qué ser un diagrama de secuencia. Cualquier forma sensata de presentar los eventos está bien.

Toda la información necesaria para hacer esto, y los dos ejercicios siguientes, se pueden encontrar en el texto de [esta parte](/es/part0/fundamentos_de_las_aplicaciones_web#formularios-y-http-post).
La idea de estos ejercicios es leer el texto una vez más y pensar en lo que está sucediendo allí. No es necesario leer el [código](https://github.com/mluukkai/example_app) de la aplicación pero, por supuesto, es posible.

Puedes crear los diagramas con cualquier programa, pero quizás la mejor y más fácil forma de hacer diagramas es utilizando la sintaxis de [Mermaid](https://github.com/mermaid-js/mermaid#sequence-diagram-docs---live-editor) que ahora está implementada en las páginas de Markdown de [GitHub](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/).

  <h4>0.5: Diagrama de aplicación de una sola página</h4>

Crea un diagrama que describa la situación en la que el usuario accede a la versión de [aplicación de una sola página](/es/part0/fundamentos_de_las_aplicaciones_web#aplicacion-de-una-sola-pagina) de la aplicación de notas en <https://studies.cs.helsinki.fi/exampleapp/spa>.

<h4>0.6: Nueva nota en diagrama de aplicación de una sola pagina</h4>

Crea un diagrama que represente la situación en la que el usuario crea una nueva nota utilizando la versión de una sola página de la aplicación.

Este fue el último ejercicio, y es hora de enviar tus respuestas a GitHub y marcar los ejercicios como hechos en el [sistema de envío de ejercicios](https://studies.cs.helsinki.fi/stats/courses/fullstackopen).

</div>
