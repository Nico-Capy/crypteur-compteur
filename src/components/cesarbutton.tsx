import { Link } from 'react-router-dom';

function cesarButton() {
  return (
    <Link to="/cesar">
      <button className="font-mono shadow-md hover:shadow-lg dark:shadow-white bg-indigo-700 dark:bg-indigo-950 hover:bg-indigo-800 text-white py-3 px-6 w-full transition-all duration-600">
        Je veux crypter mon texte
      </button>
    </Link>
  );
}

export default cesarButton;
