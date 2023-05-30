function Input() {
  return (
    <div className="flex justify-center items-center w-screen">
      <div className="w-max">
        <label
          className="absolute text-green-600 bg-white dark:bg-gray-600 border border-green-600 ml-3 px-6 transform -translate-y-3 pointer-events-none transition-all duration-600"
          htmlFor="text-input"
        >
          Texte
        </label>
        <textarea
          id="text-input"
          className="w-96 h-64 shadow-xl px-6 py-6 dark:bg-gray-600 border border-green-600 focus:ring-3 focus:ring-blue-600 focus:border-blue-300 resize-none transition-all duration-600"
          placeholder="Écris ton texte ici"
        />
      </div>
    </div>
  );
}

export default Input;
