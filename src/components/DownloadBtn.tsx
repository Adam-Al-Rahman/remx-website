"use client";

import { downloadCSV } from "./FileCSV";


const DownloadCSV = ({ resultData }: any) => {
  const handleDownloadCsv = () => {
    console.log("Handling CSV download...");

    downloadCSV(resultData, "remx-version.csv");
  };

  return (
    <button onClick={handleDownloadCsv} id="dataDownloadBtn" className="btn btn-square btn-sm" >
      <svg className="w-5 h-5" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 17V22.3333C25 23.0406 24.719 23.7189 24.219 24.219C23.7189 24.719 23.0406 25 22.3333 25H3.66667C2.95942 25 2.28115 24.719 1.78105 24.219C1.28095 23.7189 1 23.0406 1 22.3333V17" stroke="#3CC95D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.33337 10.3335L13 17.0002L19.6667 10.3335" stroke="#3CC95D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 17V1" stroke="#3CC95D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

export default DownloadCSV;