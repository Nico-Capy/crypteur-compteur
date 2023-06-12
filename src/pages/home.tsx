import CesarButton from '../components/cesarbutton';
import CounterButton from '../components/counterbutton';
import '../assets/fonts.css';

function Home() {
  return (
    <div className="flex flex-col items-center justify-start mt-6 h-full px-4 md:px-0" style={{ fontFamily: 'American Typewriter' }}>
      <h1 className="text-4xl p-6 font-bold mb-4 text-center mt-10 md:mt-16 font-normal tracking-wide text-indigo-700 dark:text-white dark:bg-indigo-900 dark:shadow-xl">
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
