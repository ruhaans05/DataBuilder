import React from 'react';

export default function Result({ data }) {
  const flagged = data.filter((d) => d.is_fraud === 1);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">🔍 Fraud Detection Results</h2>
      <p className="text-sm text-gray-600 mb-2">
        Flagged {flagged.length} out of {data.length} transactions.
      </p>
      <div className="overflow-auto max-h-[400px] border border-gray-200 rounded">
        <table className="table-auto w-full text-sm">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key} className="px-4 py-2 border">{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className={row.is_fraud ? "bg-red-50" : ""}>
                {Object.values(row).map((val, j) => (
                  <td key={j} className="px-4 py-1 border">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
