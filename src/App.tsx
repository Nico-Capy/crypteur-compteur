import './App.css'
import Input from './pages/input'
import DarkModeToggle from '../src/components/DarkModeToggle';

function App() {

  return (
    <>
    <DarkModeToggle />
      <h1>(Dé)Cryptomètre</h1>
      <br />
      <br />
      <Input/>
    </>
  )
}

export default App
