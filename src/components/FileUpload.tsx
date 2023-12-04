"use client";
import { handleFileUpload } from '@/components/ServerActions';
import React from 'react';
import { useFormStatus } from 'react-dom';




const ImagesUpload = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <div className="flex items-center justify-center w-full h-2/4 font-mono " >
        <form
          action={handleFileUpload}
        >
          <label htmlFor="dropzone-file" className="indicator flex w-full h-full item-center cursor-pointer border-2 border-gray-500 border-dashed rounded-lg  bg-rmx-baltic-sea  hover:bg-rmx-tamahagane">
            <div className='flex flex-col items-center justify-center  pl-8 pb-12 pt-8 pr-8 '>
              <svg className="w-8 h-8 mb-4 text-rmx-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              {
                pending ? (
                  <p>Loading</p>
                ) : (

                  <p className="text-sm text-rmx-white font-semibold">Choose Images</p>
                )
              }
            </div>
            <input multiple type="file" id="dropzone-file" accept="image/*" name='imagesInput' className="hidden" />
            <div className="indicator-item indicator-bottom">
              <button className="btn btn-primary" id="submitBtn">Upload</button>
            </div>
          </label>
        </form >
      </div >
    </>
  );

}

export default ImagesUpload;