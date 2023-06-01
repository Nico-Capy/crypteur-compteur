import unicodeProperties, { getPropertyValue } from 'unicode-properties';
import { useState } from "react";

function Compteur() {
  const [inputText, setInputText] = useState("");

  const alphanumericChars = unicodeProperties.getAllCodepoints()
    .filter((codePoint: number) => {
      const generalCategory = unicodeProperties.getPropertyValue(codePoint, "General_Category");
      return generalCategory.startsWith('L') || generalCategory === 'Nd';
    })
    .map((codePoint: number) => String.fromCodePoint(codePoint));

  console.log(alphanumericChars);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    const charCounts: { [char: string]: number } = {};

    // Compter les caractères dans le texte
    for (const char of inputText) {
      if (charCounts[char]) {
        charCounts[char] += 1;
      } else {
        charCounts[char] = 1;
      }
    }

    // Afficher les caractères et leurs nombres
    for (const char in charCounts) {
      console.log(`Caractère: ${char}, Nombre: ${charCounts[char]}`);
    }
  };

  const handleClear = () => {
    setInputText("");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-6">
        <div className="w-full max-w-md mx-4 h-fit">
          <label
            className="font-mono text-indigo-700 dark:text-white bg-white dark:bg-sky-950 border border-indigo-600 ml-3 px-6 py-2 mb-3 transform -translate-y-3 pointer-events-none transition-all duration-600"
            htmlFor="text-input"
          >
            Texte
          </label>
          <textarea
            id="text-input"
            className="font-mono w-full h-40 shadow-xl dark:shadow-md dark:shadow-white px-6 py-4 dark:bg-sky-950 border border-indigo-600 focus:ring-3 focus:ring-blue-600 focus:border-blue-300 resize-none transition-all duration-600"
            placeholder="Écris ton texte ici"
            value={inputText}
            onChange={handleChange}
          />
        </div>
        <br/>
        <br/>
        <button className="font-mono shadow-sm hover:shadow-md dark:shadow-white bg-sky-600 dark:bg-sky-950 hover:bg-sky-700 dark:hover:bg-sky-900 text-white py-3 px-6 transition-all duration-600" onClick={handleClick}>
          Compter
        </button>
        <br/>
        <br/>
        <button className="font-mono shadow-sm hover:shadow-md dark:shadow-white bg-red-600 dark:bg-red-900 hover:bg-red-700 dark:hover:bg-red-800 text-white py-2 px-6 m-6 transition-all duration-600" onClick={handleClear}>
          Effacer le texte
        </button>
        <br/>
        <br/>
      </div>
    </>
  );
}

export default Compteur;
