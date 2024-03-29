import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import "../assets/fonts.css";

function Compteur() {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");

  const alphabetsLowercase = "abcdefghijklmnopqrstuvwxyz";
  const alphabetsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const punctuation = ".,;:?!'\"`~@#$%^&*()-—=_+[]{}\\|<>/";
  const specialChars = "àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ©œ";
  const space = " ";
  const lineBreak = "\n";
  const diacriticalMarks = "´`¨ˆ~";
  const currencySymbols = "¢£¤¥€₹₽";
  const mathematicalSymbols = "≈∞≤≥±∑∏π√∫≠≡∂‰Ω";
  const musicalSymbols = "♩♪♫♬";

  const allCharacters =
    alphabetsLowercase +
    alphabetsUppercase +
    digits +
    punctuation +
    specialChars +
    space +
    lineBreak +
    diacriticalMarks +
    currencySymbols +
    mathematicalSymbols +
    musicalSymbols;

  const handleCopy = () => {
    navigator.clipboard.writeText(resultText);
  };

  const handleClick = () => {
    let countMap: { [key: string]: number } = {};

    for (let char of inputText) {
      if (allCharacters.includes(char)) {
        countMap[char] = (countMap[char] || 0) + 1;
      }
    }

    let result = Object.entries(countMap)
      .map(([char, count]) => `${char}: ${count}`)
      .join("\n");
    setResultText(result);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleClear = () => {
    setInputText("");
    setResultText("");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-6 h-10/12 mb-3 p-6">
        <div className="mt-5 ml-2 self-start">
          <Link to="/">
            <button
              className="font-mono shadow-none hover:shadow-lg bg-transparent dark:hover:underline text-indigo-700 dark:text-white pt-0 px-6 transition-all duration-600"
              style={{ fontFamily: "American Typewriter" }}
            >
              ← Retour
            </button>
          </Link>
        </div>
        <h1
          className="font-mono text-indigo-700 dark:text-white text-2xl m-6"
          style={{ fontFamily: "American Typewriter" }}
        >
          Compteur de caractères
        </h1>
        <div className="w-11/12 max-w-md mx-auto">
          <label
            className="font-mono text-indigo-700 dark:text-white bg-white dark:bg-indigo-950 border border-indigo-600 ml-3 px-6 py-2 mb-3 transform -translate-y-3 pointer-events-none transition-all duration-600"
            htmlFor="text-input"
            style={{ fontFamily: "American Typewriter" }}
          >
            Texte
          </label>
          <textarea
            style={{ fontFamily: "American Typewriter" }}
            id="text-input"
            className="font-mono w-full h-40 shadow-xl dark:shadow-lg px-6 py-4 dark:bg-indigo-950 border border-indigo-600 focus:ring-3 focus:ring-blue-600 focus:border-blue-300 resize-none transition-all duration-600"
            placeholder="Écris ton texte ici"
            value={inputText}
            onChange={handleChange}
          />
        </div>
        <button
          className="font-mono shadow-sm hover:shadow-md bg-indigo-600 dark:bg-indigo-900 hover:bg-indigo-700 dark:hover:bg-indigo-700 text-white my-6 py-3 px-6 transition-all duration-600"
          onClick={handleClick}
          style={{ fontFamily: "American Typewriter" }}
        >
          Compter
        </button>
        <div className="w-11/12 max-w-md mx-auto">
          <label
            className="font-mono text-indigo-700 dark:text-white bg-white dark:bg-indigo-950 border border-indigo-600 ml-3 px-6 py-2 mb-3 transform -translate-y-3 pointer-events-none transition-all duration-600"
            htmlFor="result-text"
            style={{ fontFamily: "American Typewriter" }}
          >
            Résultat
          </label>
          <textarea
            style={{ fontFamily: "American Typewriter" }}
            id="result-text"
            className="font-mono w-full h-40 shadow-xl dark:shadow-md px-6 py-4 dark:bg-indigo-950 border border-indigo-600 focus:ring-3 focus:ring-blue-600 focus:border-blue-300 overflow-auto transition-all duration-600"
            value={resultText}
            placeholder="Nombre de caractères"
            readOnly
          />
        </div>
        <button
          className="font-mono shadow-sm hover:shadow-md bg-indigo-600 dark:bg-indigo-900 hover:bg-indigo-700 dark:hover:bg-indigo-700 text-white my-6 py-3 px-6 transition-all duration-600"
          onClick={handleCopy}
          style={{ fontFamily: "American Typewriter" }}
        >
          Copier le résultat
        </button>
        <button
          className="font-mono shadow-sm hover:shadow-md bg-red-600 dark:bg-red-900 hover:bg-red-700 dark:hover:bg-red-800 text-white py-2 px-6 m-6 transition-all duration-600"
          onClick={handleClear}
          style={{ fontFamily: "American Typewriter" }}
        >
          Effacer le texte
        </button>
      </div>
    </>
  );
}

export default Compteur;
