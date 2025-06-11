import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioTareas from './components/formularioTareas';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <main className='container my-3'>
        <h1 className='text-center'>Lista de Tareas</h1>
        <FormularioTareas></FormularioTareas>
      </main>
      <footer className='bg-dark text-light text-center py-4'>&copy; Todos los derechos reservados</footer>
    </>
  )
}

export default App

