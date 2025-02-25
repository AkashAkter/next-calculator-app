/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleButtonClick = (value: string) => {
    if (isCalculating) return;
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setHistory([`${input} = ${result}`, ...history]);
      setInput(result.toString());
      setIsCalculating(true);
      setTimeout(() => setIsCalculating(false), 2000); // Reset calculating state after 2 seconds
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-80">
        {/* Display */}
        <div className="text-white text-3xl mb-4">
          <input
            type="text"
            value={input}
            onChange={() => {}}
            className={`w-full bg-transparent border-b-2 text-center text-4xl outline-none focus:border-blue-500 transition-all ${
              isCalculating ? "bg-green-500" : "bg-transparent"
            }`}
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={() => handleButtonClick("7")}
            className="bg-purple-600 text-white py-3 rounded-lg text-xl hover:bg-purple-500 transition-all transform hover:scale-105"
          >
            7
          </button>
          <button
            onClick={() => handleButtonClick("8")}
            className="bg-purple-600 text-white py-3 rounded-lg text-xl hover:bg-purple-500 transition-all transform hover:scale-105"
          >
            8
          </button>
          <button
            onClick={() => handleButtonClick("9")}
            className="bg-purple-600 text-white py-3 rounded-lg text-xl hover:bg-purple-500 transition-all transform hover:scale-105"
          >
            9
          </button>
          <button
            onClick={() => handleButtonClick("/")}
            className="bg-blue-500 text-white py-3 rounded-lg text-xl hover:bg-blue-400 transition-all transform hover:scale-105"
          >
            /
          </button>

          <button
            onClick={() => handleButtonClick("4")}
            className="bg-purple-600 text-white py-3 rounded-lg text-xl hover:bg-purple-500 transition-all transform hover:scale-105"
          >
            4
          </button>
          <button
            onClick={() => handleButtonClick("5")}
            className="bg-purple-600 text-white py-3 rounded-lg text-xl hover:bg-purple-500 transition-all transform hover:scale-105"
          >
            5
          </button>
          <button
            onClick={() => handleButtonClick("6")}
            className="bg-purple-600 text-white py-3 rounded-lg text-xl hover:bg-purple-500 transition-all transform hover:scale-105"
          >
            6
          </button>
          <button
            onClick={() => handleButtonClick("*")}
            className="bg-blue-500 text-white py-3 rounded-lg text-xl hover:bg-blue-400 transition-all transform hover:scale-105"
          >
            *
          </button>

          <button
            onClick={() => handleButtonClick("1")}
            className="bg-purple-600 text-white py-3 rounded-lg text-xl hover:bg-purple-500 transition-all transform hover:scale-105"
          >
            1
          </button>
          <button
            onClick={() => handleButtonClick("2")}
            className="bg-purple-600 text-white py-3 rounded-lg text-xl hover:bg-purple-500 transition-all transform hover:scale-105"
          >
            2
          </button>
          <button
            onClick={() => handleButtonClick("3")}
            className="bg-purple-600 text-white py-3 rounded-lg text-xl hover:bg-purple-500 transition-all transform hover:scale-105"
          >
            3
          </button>
          <button
            onClick={() => handleButtonClick("-")}
            className="bg-blue-500 text-white py-3 rounded-lg text-xl hover:bg-blue-400 transition-all transform hover:scale-105"
          >
            -
          </button>

          <button
            onClick={() => handleButtonClick("0")}
            className="bg-purple-600 text-white py-3 rounded-lg text-xl hover:bg-purple-500 transition-all transform hover:scale-105"
          >
            0
          </button>
          <button
            onClick={handleClear}
            className="bg-red-500 text-white py-3 rounded-lg text-xl hover:bg-red-400 transition-all transform hover:scale-105"
          >
            C
          </button>
          <button
            onClick={handleCalculate}
            className="bg-green-600 text-white py-3 rounded-lg text-xl hover:bg-green-500 transition-all transform hover:scale-105"
          >
            =
          </button>
          <button
            onClick={() => handleButtonClick("+")}
            className="bg-blue-500 text-white py-3 rounded-lg text-xl hover:bg-blue-400 transition-all transform hover:scale-105"
          >
            +
          </button>
        </div>

        {/* Calculation History */}
        <div className="mt-6 text-white text-sm max-h-40 overflow-y-auto opacity-75 transition-opacity duration-500">
          {history.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2 text-lg">History</h3>
              <ul>
                {history.map((entry, index) => (
                  <li key={index} className="text-gray-400 mb-1">{entry}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
