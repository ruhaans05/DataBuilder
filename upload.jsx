import React, { useState } from 'react';
import { scoreData } from './api';
import Result from './result';

export default function Upload() {
  const [file, setFile] = useState(null);
  const [scored, setScored] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async () => {
    try {
      setIsLoading(true);
      const res = await scoreData(file);
      setScored(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">💡 DataBuilder</h1>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 w-full text-sm text-gray-600"
      />
      <button
        onClick={handleUpload}
        disabled={!file}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Upload & Score for Fraud
      </button>
      {isLoading && <p className="mt-4 text-center text-sm">Processing... 🔍</p>}
      {scored && <Result data={scored} />}
    </div>
  );
}
