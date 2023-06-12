import CesarButton from '../components/cesarbutton';
import CounterButton from '../components/counterbutton';

function Home() {
  return (
    <div className="flex flex-col items-center justify-start mt-6 min-h-screen px-4 md:px-0">
      <h1 className="text-4xl font-bold mb-4 text-center mt-10 md:mt-16">Crypteur
        <br/>
        —
        <br/>
        Compteur
        <br/>
      </h1>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row space-y-4 sm:space-y-4 md:space-x-4 lg:space-x-4 xl:space-x-4 2xl:space-x-4 justify-center mt-10">
        <CesarButton />
        <CounterButton />
      </div>
    </div>
  );
}

export default Home;
