"use client";
import { handleFileUpload } from '@/components/ServerActions';
import { NextPage } from 'next';
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';


const initialState = {
  progress_status: '',
  message: '',
}


const SubmitButton = () => {

  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary" id="submitBtn" type='submit' aria-disabled={pending}>
      Upload
    </button>
  )
}

const ImagesUpload: NextPage = () => {
  const [state, formAction] = useFormState(handleFileUpload, initialState);
  const [fileCount, setFileCount] = useState(0);
  const [enableButton, setEnableButton] = useState(0);


  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setFileCount(files.length);
      setEnableButton(1);

    }
  };

  const [progressStatus, setResultStatus] = useState(false);

  const handleUpload = () => {
    setFileCount(0);
  }

  return (
    <>
      <div className="flex items-center justify-center w-full h-2/4 font-mono " >

        <form
          action={formAction}
          onSubmit={handleUpload}
        >
          {
            progressStatus ? (
              <div className='flex flex-col  h-full item-center justify-center'>
                <p className='font-mono font-semibold  text-center text-lg text-rmx-white px-3'>Loading</p>
                <progress className="progress"></progress>
              </div>
            ) : (
              <>
                <label htmlFor="dropzone-file" className="indicator flex w-full h-full item-center cursor-pointer border-2 border-gray-500 border-dashed rounded-lg  bg-rmx-baltic-sea  hover:bg-rmx-tamahagane">
                  <div className='flex items-center justify-center p-8  gap-4'>
                    {fileCount > 0 ? (<p className="text-sm text-rmx-white font-semibold" >Click Upload</p>) : (
                      <>
                        <svg className="w-8 h-8 text-rmx-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <div className=''>
                          {fileCount > 0 ? (<p className="text-sm text-rmx-white font-semibold" >Click Upload</p>) : (<p className="text-sm text-rmx-white font-semibold" >Choose Images</p>)}
                        </div>
                      </>
                    )}
                  </div>
                  <input onChange={handleFileInputChange} multiple type="file" id="dropzone-file" accept="image/*" name='imagesInput' className="hidden" />
                  {fileCount > 0 && enableButton == 1 && (
                    <div className="indicator-item indicator-bottom">
                      <SubmitButton />
                    </div>
                  )}
                </label>
              </>
            )}
        </form>
      </div >
    </>
  );

}

export default ImagesUpload;