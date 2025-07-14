import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const QuizIntroScreen = () => {
  const [quote, setQuote] = useState("");
  
  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data); // Set the quote and author
      })
      .catch((error) => console.error("Error fetching quote:", error));
  }, []);
  
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/03/72/52/73/240_F_372527316_yFACBKtjrQkejBIonuxUGiCGlBOq9i7y.webp')",
      }}
    >
      <div className="text-center px-6 sm:px-8 md:px-16 lg:px-24">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6">
          Welcome to the Quiz App
        </p>
        
        <div className="mt-8 p-6 bg-white bg-opacity-80 rounded-lg shadow-xl max-w-xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-black leading-relaxed">
            {quote.quote ? `"${quote.quote}"` : "Loading quote..."} <br />
            {quote.author && `- ${quote.author}`}
          </p>
        </div>
        <br />

        <Link to="/category" className="mt-10">
          <button className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default QuizIntroScreen;
