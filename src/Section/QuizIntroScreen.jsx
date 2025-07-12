import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
const QuizIntroScreen = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
              setQuote(data); // Set the quote and author
        } 
      )
      .catch((error) => console.error("Error fetching quote:", error));
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/03/72/52/73/240_F_372527316_yFACBKtjrQkejBIonuxUGiCGlBOq9i7y.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-4xl font-bold mb-4 text-black">Welcome to the Quiz App</p>
       <div className="mt-10 p-6  rounded-lg shadow-xl">
      <p className="text-md font-bold text-black leading-relaxed">
        {quote.quote} <br />
        {quote.author}
      
      </p>
     
      </div>
      <Link to="/QuizCategory">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Start Quiz
        </button> 
      </Link>
    </div>
  );

}
export default QuizIntroScreen;
