import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import FormularioTareas from './components/FormularioTareas';

function App() {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
      <main className='container my-3'>
        <h1 className='text-center text-light mb-4'>Lista de Tareas</h1>
        <FormularioTareas></FormularioTareas>
      </main>
      <footer className='bg-dark text-light text-center py-4'>&copy; Todos los derechos reservados</footer>
    </>
  )
}

export default App

