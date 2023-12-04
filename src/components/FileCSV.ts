"use client";


import { TypeResultData } from "@/lib/types";

const convertToCSV = (data: TypeResultData[]): string => {
  if (data.length === 0) {
    console.error('No data to convert.');
    return '';
  }

  const separator = ',';
  const headers = Object.keys(data[0]).join(separator);

  const rows = data.map(obj =>
    Object.values(obj)
      .map(value => (value instanceof Date ? value.toISOString() : value))
      .join(separator)
  );

  console.log(`${headers}\n${rows.join('\n')}`);

  return `${headers}\n${rows.join('\n')}`;
};

export const downloadCSV = (data: TypeResultData[], fileName: string) => {
  const csvContent = convertToCSV(data);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'diplay: none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } else {
    console.error('File download not supported in this browser.');
  }
};

