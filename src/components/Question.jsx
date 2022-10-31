import React from "react";

const Question = (props) => {
  return (
    <div className="questionContainer">
      <h1>Soru: </h1>
      <input
        type="text"
        name="questionContent"
        id="questionContent"
        placeholder="Soru içeriğini girin..."
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick = {() => {
          props.addAnswer(props.question)
          console.log(props.question);
        }}
      >
        Cevap Ekle
      </button>
    </div>
  );
};
export default Question;
