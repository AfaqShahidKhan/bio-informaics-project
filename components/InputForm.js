import React, { useState } from "react";

const InputForm = () => {
  const [dnaSequence1, setDnaSequence1] = useState("");
  const [dnaSequence2, setDnaSequence2] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform your calculation and update the output
    setOutput("Your output here");
  };

  return (
    <div className="mt-10 p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label
            htmlFor="dna1"
            className="block text-gray-700 font-medium mb-2"
          >
            DNA Sequence 1:
          </label>
          <input
            className="w-full p-2 border border-gray-400 rounded-lg"
            type="text"
            id="dna1"
            value={dnaSequence1}
            onChange={(e) => setDnaSequence1(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dna2"
            className="block text-gray-700 font-medium mb-2"
          >
            DNA Sequence 2:
          </label>
          <input
            className="w-full p-2 border border-gray-400 rounded-lg"
            type="text"
            id="dna2"
            value={dnaSequence2}
            onChange={(e) => setDnaSequence2(e.target.value)}
          />
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          type="submit"
        >
          Get Output
        </button>
      </form>
      {output && (
        <div className="p-4 bg-gray-200 rounded-lg shadow-md">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Output:</h2>
          <p className="text-gray-600">{output}</p>
        </div>
      )}
    </div>
  );
};

export default InputForm;
