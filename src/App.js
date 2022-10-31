import "./App.css";
import React from "react";
import { useState, useEffect} from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [rerender, setRerender] = useState(false);

  const updateQuestions = () => {
    const updatedQuestions = questions.map((question) => {
      const updatedAnswers = answers.filter((answer) => {
        return answer.questionId === question.id;
      });
      question.answers = updatedAnswers;
      return question;
    });
    setQuestions(updatedQuestions);
    setRerender(!rerender);
  };

  const addQuestion = () => {
    let question = [
      ...questions,
      {
        questionID: questions.length,
        questionData: "",
        answers: answers?.filter(
          (answerItem) => answerItem.questionID === questions.length
        ),
      },
    ];
    setQuestions(question);
  };

  const addAnswer = (questionItem) => {
    var answer = [
      ...answers,
      {
        answerID: answers.length,
        answerData: "",
        questionID: questionItem.questionID,
      },
    ];
    setAnswers(answer);
    questionItem.answers = answers.filter(
      (answerItem) => answerItem.questionID === questionItem.questionID
    );
  };


  const handleDelete = (answerItem) => {
    setAnswers(
      answers.filter(
        (a) => a !== answerItem
      )
    );
    updateQuestions();
  }

  const handleAddAnswer = (questionItem) => {
    addAnswer(questionItem);
    updateQuestions();

  }
  return (
    <div className="bg-gray-900 text-white h-screen block flex flex-col items-center">
      <button
        id="btn-add-question"
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          addQuestion();
        }}
      >
        Add Question
      </button>
      <div>
        {questions.map((questionItem) => (
          <div className="" key={questionItem.questionID}>
            <div className="questionContainer border border-solid border-white p-4 mb-5 mt-5">
              <div className="flex items-center">
                <h1>Question: </h1>
                <input
                  className="shadowborder ml-5 rounded w-full text-gray-900"
                  type="text"
                  name = "questionContent"
                  id="questionContent"
                  placeholder="Enter question content..."
                />
                <button
                  id="btn-add-answer"
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-48 h-10 ml-5"
                  onClick={(e) => {
                    handleAddAnswer(questionItem);
                    console.log(e.target.value)
                  }}
                >
                  Add answer
                </button>
              </div>
              {questionItem.answers?.map((answerItem) => (
                <div key={answerItem.answerID} className="flex items-center">
                  <h1>Şık: </h1>
                  <input
                    className="shadowborder rounded w-full ml-5 mb-1 mt-2 text-black"
                    type="text"
                    name="answerContent"
                    id="answerContent"
                    placeholder="Enter an answer..."
                  />
                  <button
                    className=" ml-5 border w-16"
                    onClick={() => {
                      handleDelete(answerItem);
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
