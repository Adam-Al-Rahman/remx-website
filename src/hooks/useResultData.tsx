"use client"
import React, { createContext, useState, useContext } from 'react';

// Create a context
const ResultDataContext = createContext<any>([]);

// Create a provider component
export const ResultDataProvider = ({ children }: any) => {
  const [resultData, setResultData] = useState();

  return (
    <ResultDataContext.Provider value={{ resultData, setResultData }
    }>
      {children}
    </ResultDataContext.Provider>
  );
};

// Custom hook to consume the context
export const useResultData = () => {
  const context = useContext(ResultDataContext);
  if (!context) {
    throw new Error('useResultData must be used within a ResultDataProvider');
  }
  return context;
};
