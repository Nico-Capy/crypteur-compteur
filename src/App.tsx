import './App.css'
import DarkModeToggle from '../src/components/DarkModeToggle';
import Footer from './components/footer';
import Cesar from './pages/cesar';
import Compteur from './pages/compteur';

function App() {

  return (
    <>
    <h1 className='m-3 p-3 text-xl font-mono text-sky-500'>
      Crypto Compteur de Texte
    </h1>
    <DarkModeToggle />
      <Cesar/>
   // <Compteur/>
      <Footer/>
    </>
  )
}

export default App
