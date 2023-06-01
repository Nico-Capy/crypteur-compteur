import { SetStateAction, useState } from "react";

function Cesar() {
  const [inputText, setInputText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");

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
  };

  const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
    setInputText(event.target.value);
  };

  const handleClear = () => {
    setInputText("");
    setEncryptedText("");
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
          Crypter
        </button>
        <br/>
        <br/>
        <div className="w-full max-w-md mx-4 font-mono">
          <label
            className="text-indigo-700 dark:text-white bg-white dark:bg-sky-950 border border-indigo-600 ml-3 px-6 py-2 mb-3 transform -translate-y-3 pointer-events-none transition-all duration-600"
            htmlFor="encrypted-text"
          >
            Texte crypté
          </label>
          <textarea
            id="encrypted-text"
            className="font-mono w-full h-40 shadow-xl dark:shadow-md dark:shadow-white px-6 py-4 dark:bg-sky-950 border border-indigo-600 focus:ring-3 focus:ring-blue-600 focus:border-blue-300 resize-none transition-all duration-600"
            value={encryptedText}
            readOnly
          />
        </div>
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

export default Cesar;
