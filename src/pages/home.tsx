import CesarButton from '../components/cesarbutton';
import CounterButton from '../components/counterbutton';
import '../assets/fonts.css';

function Home() {
  return (
    <div className="flex flex-col items-center justify-start mt-6 min-h-screen px-4 md:px-0">
      <h1 className="text-4xl font-bold mb-4 text-center mt-10 md:mt-16">
        Crypteur
        <br/>
        —
        <br/>
        Compteur
        <br/>
      </h1>
        <br/>
        <br/>
      <CesarButton />
        <br/>
        <br/>
      <CounterButton />
    </div>
  );
}

export default Home;
