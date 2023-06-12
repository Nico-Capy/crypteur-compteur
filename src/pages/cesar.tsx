import { SetStateAction, useState } from "react";
import { Link } from 'react-router-dom';
import '../assets/fonts.css';

function Cesar() {
  const [inputText, setInputText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [resultText, setResultText] = useState(""); // Add resultText state

  const handleClick = () => {
    const shift = 3; // Le décalage utilisé pour le chiffre de César

    // Fonction pour crypter le texte
    const encryptText = (text: string) => {
      let normalizedText = text.normalize("NFD"); // Normalize text to separate diacritical marks
      let encryptedText = "";
      for (let i = 0; i < normalizedText.length; i++) {
        let charCode = normalizedText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
          // Uppercase letters
          charCode = ((charCode - 65 + shift) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
          // Lowercase letters
          charCode = ((charCode - 97 + shift) % 26) + 97;
        }

        encryptedText += String.fromCharCode(charCode);
      }
      return encryptedText;
    };

    const encryptedText = encryptText(inputText);
    setEncryptedText(encryptedText);
    setResultText(encryptedText); // Set the resultText
  };

  const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
    setInputText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(resultText);
  };

  const handleClear = () => {
    setInputText("");
    setEncryptedText("");
    setResultText(""); // Clear the resultText
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-6 h-screen p-3">
        <div className='mt-5 ml-2 self-start'>
          <Link to="/">
            <button style={{ fontFamily: 'American Typewriter' }} className="font-mono shadow-none hover:shadow-lg bg-transparent dark:hover:underline text-indigo-700 dark:text-white py-3 px-6 transition-all duration-600">
              ← Retour
            </button>
          </Link>
        </div>
        <h1 className="font-mono text-indigo-700 dark:text-white text-2xl m-6" style={{ fontFamily: 'American Typewriter' }}>Crypteur</h1>
        <div className="w-11/12 max-w-md mx-auto">
          <label
            className="font-mono text-indigo-700 dark:text-white bg-white dark:bg-indigo-950 border border-indigo-600 ml-3 px-6 py-2 mb-3 transform -translate-y-3 pointer-events-none transition-all duration-600"
            htmlFor="text-input"
            style={{ fontFamily: 'American Typewriter' }}
          >
            Texte
          </label>
          <textarea
            style={{ fontFamily: 'American Typewriter' }}
            id="text-input"
            className="font-mono w-full h-40 shadow-xl dark:shadow-md px-6 py-4 dark:bg-sky-950 border border-indigo-600 focus:ring-3 focus:ring-blue-600 focus:border-blue-300 resize-none transition-all duration-600"
            placeholder="Écris ton texte ici"
            value={inputText}
            onChange={handleChange}
          />
        </div>
        <button className="font-mono shadow-sm hover:shadow-md bg-indigo-600 dark:bg-indigo-950 hover:bg-indigo-700 dark:hover:bg-indigo-900 text-white my-6 py-3 px-6 transition-all duration-600" style={{ fontFamily: 'American Typewriter' }} onClick={handleClick}>
          Crypter
        </button>
        <div className="w-11/12 max-w-md mx-auto">
          <label
            className="font-mono text-indigo-700 dark:text-white bg-white dark:bg-sky-950 border border-indigo-600 ml-3 px-6 py-2 mb-3 transform -translate-y-3 pointer-events-none transition-all duration-600"
            htmlFor="encrypted-text"
            style={{ fontFamily: 'American Typewriter' }}
          >
            Texte crypté
          </label>
          <textarea
            id="encrypted-text"
            className="font-mono w-full h-40 shadow-xl dark:shadow-md px-6 py-4 dark:bg-sky-950 border border-indigo-600 focus:ring-3 focus:ring-blue-600 focus:border-blue-300 resize-none transition-all duration-600"
            value={encryptedText}
            placeholder="Résultat"
            readOnly
            style={{ fontFamily: 'American Typewriter' }}
          />
        </div>
        <button className="font-mono shadow-sm hover:shadow-md bg-indigo-600 dark:bg-indigo-950 hover:bg-sky-700 dark:hover:bg-sky-900 text-white py-2 px-6 m-6 transition-all duration-600" onClick={handleCopy} style={{ fontFamily: 'American Typewriter' }}>
          Copier le résultat
        </button>
        <button className="font-mono shadow-sm hover:shadow-md bg-red-600 dark:bg-red-900 hover:bg-red-700 dark:hover:bg-red-800 text-white py-2 px-6 m-6 transition-all duration-600" onClick={handleClear} style={{ fontFamily: 'American Typewriter' }}>
          Effacer le texte
        </button>
      </div>
    </>
  );  
}

export default Cesar;
