import React, { useState } from "react";
import { useForm } from "react-hook-form";

function PrintWordBank(props) {
  const testWordBank = [
    {
      id: 1,
      spanishWord: "mano",
      englishWord: "hand",
    },
    {
      id: 2,
      spanishWord: "pollo",
      englishWord: "chicken",
    },
    {
      id: 3,
      spanishWord: "cereal",
      englishWord: "cereal",
    },
  ];

  const [word, setWord] = useState(testWordBank);
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form>
        <input
          type="text"
          name="spanishWord"
          placeholder="Spanish"
          ref={register({ required: true })}
        />

        <input
          type="text"
          name="englishWord"
          placeholder="English"
          ref={register({ required: true })}
        />
      </form>

      {testWordBank.map((wordObj) => {
        return (
          <div key={wordObj.id}>
            <li>
              {wordObj.englishWord}: {wordObj.spanishWord}
            </li>
          </div>
        );
      })}

      <br />

      {props.bank.map((wordObj) => {
        return (
          <div key={wordObj.id}>
            <li>
              {wordObj.englishWord}: {wordObj.spanishWord}
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default PrintWordBank;
