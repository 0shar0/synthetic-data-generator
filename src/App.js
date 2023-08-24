// src/App.js

import React from 'react';
import { generateDatasets } from './dataGenerator';
import Papa from 'papaparse';

function App() {
  const handleGenerateData = () => {
    const { titles, credits } = generateDatasets();

    const blobTitles = new Blob([Papa.unparse(titles)], { type: 'text/csv' });
    const blobCredits = new Blob([Papa.unparse(credits)], { type: 'text/csv' });

    const linkTitles = document.createElement('a');
    linkTitles.href = URL.createObjectURL(blobTitles);
    linkTitles.download = 'titles.csv';
    linkTitles.click();

    const linkCredits = document.createElement('a');
    linkCredits.href = URL.createObjectURL(blobCredits);
    linkCredits.download = 'credits.csv';
    linkCredits.click();
  }

  return (
      <div className="App">
        <button onClick={handleGenerateData}>Generate Data</button>
      </div>
  );
}

export default App;
