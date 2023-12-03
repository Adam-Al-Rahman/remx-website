function downloadCSV(data: any[], fileName: string) {
  const csvContent = convertToCSV(data);

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

function convertToCSV(data: any[]): string {
  const separator = ',';
  const headers = Object.keys(data[0]).join(separator);

  const rows = data.map(obj =>
    Object.values(obj)
      .map(value => (value instanceof Date ? value.toISOString() : value))
      .join(separator)
  );

  return `${headers}\n${rows.join('\n')}`;
}

