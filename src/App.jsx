import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import QuizCategory from "./pages/QuizCategory.jsx";
import QuizQuestions from "./pages/QuizQuestions.jsx";
import QuizIntroScreen from "./pages/QuizIntroScreen.jsx";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<QuizIntroScreen />} />
          <Route path="/category" element={<QuizCategory />} />
          <Route
            path="/quiz/:category/:questions"
            element={<QuizQuestions />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
