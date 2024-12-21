/**

 * Componentes:
 * - App: Componente principal de la aplicación.
 * - Ejemplo1: Componente de ejemplo 1: Uso de componentes con propiedades.
 * - Ejemplo2: Componente de ejemplo 2: Error al intentar renderizar un objeto en JSX.
 * - Ejemplo3: Componente de ejemplo 3: Solución al error del ejemplo2. Usando un array de objetos.
 * 
 * Nota: Solo se renderiza un componente a la vez. Descomenta el componente deseado para renderizarlo.
 */
import ReactDOM from 'react-dom/client'

import App from './App'
import Ejemplo from './Ejemplo1'
import Ejemplo2 from './Ejemplo2'
import Ejemplo3 from './Ejemplo3'

/* Ejemplos del capítulo 1 del curso
*/

//ReactDOM.createRoot(document.getElementById('root')).render(<App />)

//ReactDOM.createRoot(document.getElementById('root')).render(<Ejemplo1 />)
//ReactDOM.createRoot(document.getElementById('root')).render(<Ejemplo2 />)
ReactDOM.createRoot(document.getElementById('root')).render(<Ejemplo3 />)



