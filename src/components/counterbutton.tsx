import { Link } from 'react-router-dom';

function counterButton() {
  return (
    <Link to="/compteur">
      <button className="font-mono shadow-md hover:shadow-lg dark:shadow-white bg-indigo-700 dark:bg-indigo-950 hover:bg-indigo-800 text-white py-3 px-6 transition-all duration-600">
        Je veux compter les caractères de mon texte
      </button>
    </Link>
  );
}

export default counterButton;
