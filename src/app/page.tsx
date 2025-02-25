/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-80">
        {/* Display */}
        <div className="text-white text-3xl mb-4">
          <input
            type="text"
            value={input}
            onChange={() => {}}
            className="w-full bg-transparent border-b-2 border-gray-600 text-center text-4xl outline-none focus:border-blue-500"
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={() => handleButtonClick("7")}
            className="bg-gray-700 text-white py-3 rounded-lg text-xl hover:bg-gray-600 transition"
          >
            7
          </button>
          <button
            onClick={() => handleButtonClick("8")}
            className="bg-gray-700 text-white py-3 rounded-lg text-xl hover:bg-gray-600 transition"
          >
            8
          </button>
          <button
            onClick={() => handleButtonClick("9")}
            className="bg-gray-700 text-white py-3 rounded-lg text-xl hover:bg-gray-600 transition"
          >
            9
          </button>
          <button
            onClick={() => handleButtonClick("/")}
            className="bg-blue-500 text-white py-3 rounded-lg text-xl hover:bg-blue-400 transition"
          >
            /
          </button>

          <button
            onClick={() => handleButtonClick("4")}
            className="bg-gray-700 text-white py-3 rounded-lg text-xl hover:bg-gray-600 transition"
          >
            4
          </button>
          <button
            onClick={() => handleButtonClick("5")}
            className="bg-gray-700 text-white py-3 rounded-lg text-xl hover:bg-gray-600 transition"
          >
            5
          </button>
          <button
            onClick={() => handleButtonClick("6")}
            className="bg-gray-700 text-white py-3 rounded-lg text-xl hover:bg-gray-600 transition"
          >
            6
          </button>
          <button
            onClick={() => handleButtonClick("*")}
            className="bg-blue-500 text-white py-3 rounded-lg text-xl hover:bg-blue-400 transition"
          >
            *
          </button>

          <button
            onClick={() => handleButtonClick("1")}
            className="bg-gray-700 text-white py-3 rounded-lg text-xl hover:bg-gray-600 transition"
          >
            1
          </button>
          <button
            onClick={() => handleButtonClick("2")}
            className="bg-gray-700 text-white py-3 rounded-lg text-xl hover:bg-gray-600 transition"
          >
            2
          </button>
          <button
            onClick={() => handleButtonClick("3")}
            className="bg-gray-700 text-white py-3 rounded-lg text-xl hover:bg-gray-600 transition"
          >
            3
          </button>
          <button
            onClick={() => handleButtonClick("-")}
            className="bg-blue-500 text-white py-3 rounded-lg text-xl hover:bg-blue-400 transition"
          >
            -
          </button>

          <button
            onClick={() => handleButtonClick("0")}
            className="bg-gray-700 text-white py-3 rounded-lg text-xl hover:bg-gray-600 transition"
          >
            0
          </button>
          <button
            onClick={() => handleClear()}
            className="bg-red-500 text-white py-3 rounded-lg text-xl hover:bg-red-400 transition"
          >
            C
          </button>
          <button
            onClick={() => handleCalculate()}
            className="bg-green-500 text-white py-3 rounded-lg text-xl hover:bg-green-400 transition"
          >
            =
          </button>
          <button
            onClick={() => handleButtonClick("+")}
            className="bg-blue-500 text-white py-3 rounded-lg text-xl hover:bg-blue-400 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
