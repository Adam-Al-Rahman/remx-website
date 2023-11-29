"use client";

import React, { useState } from 'react';
import { gql, useMutation } from 'urql';
import { graphql } from "@/gql";

const UPLOAD_FILE = `
  mutation UploadFile($file: Upload!){
    readFile(file: $file) {
      image
      maxConfidenceCoordinate
    }
  }
`;

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [result, uploadFile] = useMutation(UPLOAD_FILE);

  const { data, fetching, error } = result;

  const handleFileUpload = () => {
    uploadFile({ file: selectedFile });
  };

  const handleFileChange = (event: { target: { files: any }; }) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      {fetching && <p>Loading...</p>}

      {error && <p>Oh no... {error.message}</p>}

      {data && data.uploadFile ? (
        <p>File uploaded to {data.uploadFile.filename}</p>
      ) : (
        <div>
          <input type="file" onChange={handleFileChange} />

          <button onClick={handleFileUpload}>Upload!</button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;