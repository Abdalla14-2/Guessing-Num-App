import { ArrowUpCircle, ArrowDownCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Card() {
  const [number, setNumber] = useState("");
  const [submittedNumber, setSubmittedNumber] = useState(null);
  const [randomNumber, setRandomNumber] = useState(
    () => Math.floor(Math.random() * 100) + 1
  );

  const handleSubmit = () => {
    if (number === "") return;
    setSubmittedNumber(Number(number));
  };

  const handleReset = () => {
    setNumber("");
    setSubmittedNumber(null);
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="bg-blue-600 w-72 mx-auto shadow-md py-7 px-5 rounded-xl space-y-4 text-center">
      <div className="header text-white text-center">
        <h1 className="text-2xl font-bold">Guess A Number</h1>
        <p className="text-sm text-blue-200 mt-1">
          Choose a number from 1 to 100
        </p>
      </div>

      <div className="content space-y-3">
        <input
          type="number"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-100 appearance-none"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 font-semibold"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {submittedNumber !== null && (
          <h2 className="text-white text-3xl font-bold">{submittedNumber}</h2>
        )}
      </div>

      <div className="alerts space-y-2">
        {submittedNumber !== null && submittedNumber < randomNumber && (
          <div className="flex items-center gap-2 justify-center bg-yellow-400 text-white py-2 px-3 rounded">
            <ArrowUpCircle size={20} />
            <span>The number is bigger</span>
          </div>
        )}

        {submittedNumber !== null && submittedNumber > randomNumber && (
          <div className="flex items-center gap-2 justify-center bg-red-500 text-white py-2 px-3 rounded">
            <ArrowDownCircle size={20} />
            <span>The number is smaller</span>
          </div>
        )}

        {submittedNumber !== null && submittedNumber === randomNumber && (
          <div className="flex items-center gap-2 justify-center bg-green-500 text-white py-2 px-3 rounded font-semibold">
            <CheckCircle size={20} />
            <span>Correct! You guessed it!</span>
          </div>
        )}
      </div>

      <button
        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 font-semibold mt-3"
        onClick={handleReset}
      >
        Again
      </button>
    </div>
  );
}
