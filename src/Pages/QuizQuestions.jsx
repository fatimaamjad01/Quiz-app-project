import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const QuizQuestions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions, category } = location.state || {};
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    if(timer>0 && !selectedAnswer){
      const countdown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(countdown);
    }else if (timer === 0) {
      handleNext();
    }


  }, [timer, selectedAnswer]);

  useEffect(() => {
    setTimer(30);
  }, [currentQuestion]);

  if (!questions) return <div className="text-center text-white">No quiz data!</div>;

  const currentQ = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQ.answer) setScore(score + 1);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      alert(`Quiz Complete! Score: ${score}/${questions.length} 
        feedback: ${score >= questions.length / 2 ? "Good Job!" : "Better luck next time!"}`);
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer("");
  };

  return (
    <div className=" bg-black text-white p-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl">{category} Quiz</h1>
        <div className="mt-4 text-center text-gray-400 rounded-2xl p-4">
          <p>Level: {currentQ.difficulty_level}</p>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <span>Score: {score}</span>
          <span className={timer <= 10 ? 'text-red-400' : ''}>⏰ {timer}s</span>
          <span>Q {currentQuestion + 1}/{questions.length}</span>
        </div>
      </div>
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded">
        <h2 className="text-xl mb-4">{currentQ.question}</h2>
        {currentQ.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            disabled={selectedAnswer !== ""}
            className={`block w-full text-left px-4 py-2 mb-2 rounded ${selectedAnswer === option
          ? option === currentQ.answer 
            ? 'bg-green-600' 
            : 'bg-red-600'
          : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            {option}
          </button>
        ))}
            </div>
            {selectedAnswer && selectedAnswer !== currentQ.answer && (
  <div className="mt-4 p-3 bg-green-700 rounded">
    <p className="text-green-100">✅ Correct Answer: {currentQ.answer}</p>
  </div>
)}
            <button
              onClick={handleNext}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              disabled={!selectedAnswer}
            >
              {isLastQuestion ? "Finish Quiz" : "Next Question"}
            </button>
        <div>
         <button 
              onClick={() => navigate('/')}
              className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded"
            >
              Back to Categories
            </button>
            </div>

          </div>
        
  );
}
export default QuizQuestions;
    

