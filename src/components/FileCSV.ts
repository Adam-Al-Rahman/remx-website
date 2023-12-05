"use client";


type TypeResultData = {
  Image: string;
  MaxConfidenceCoordinate: number[] | string;
};

const convertToCSV = (data: TypeResultData[]): string => {
  if (data.length === 0) {
    console.error('No data to convert.');
    return '';
  }

  const separator = ',';
  const headers = 'Image,MaxConfidenceCoordinate';

  const rows = data.map(obj => {

    let maxCC = obj.MaxConfidenceCoordinate;
    if (Array.isArray(maxCC)) {
      maxCC = maxCC.join(separator);
    }

    return `"${obj.Image}","${maxCC}"`;
  });

  const csvContent = `${headers}\n${rows.join('\n')}`;
  console.log(csvContent);

  return csvContent;
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

