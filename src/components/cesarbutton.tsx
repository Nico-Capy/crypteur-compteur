import { Link } from 'react-router-dom';
import '../assets/fonts.css';

function cesarButton() {
  return (
    <Link to="/cesar">
      <button className="shadow-md hover:shadow-lg dark:shadow-xl bg-indigo-700 dark:bg-indigo-900 hover:bg-indigo-800 text-white py-3 px-6 w-full transition-all duration-600" style={{ fontFamily: 'American Typewriter' }}>
        Je veux crypter mon texte
      </button>
    </Link>
  );
}

export default cesarButton;
