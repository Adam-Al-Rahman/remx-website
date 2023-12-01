
import { NextPage } from 'next';

import SideBar from '@/components/Sidebar'
import Main from '@/components/Main'

const Home: NextPage = () => {
  return (
    <>
      <div className="lg:hidden w-screen h-screen bg-rmx-mirage flex items-center justify-center  font-mono font-medium text-rmx-white ">
        <div className="container bg-rmx-baltic-sea rounded-lg  p-2 gap-2 flex flex-1 flex-col m-6">
          <div role="alert" className="w-full flex gap-2 text-blue-400 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current  w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Mobile Version</span>
          </div>
          <div className="h-full bg-rmx-dune rounded-md p-2 overflow-auto flex justify-center items-center">
            <p>Apologies for any inconvenience caused.
              Please be informed that the mobile version of the site is currently undergoing development and optimization.
              We appreciate your patience and understanding during this process.</p>
          </div>
        </div>
      </div>
      <div className='flex w-screen h-screen bg-rmx-mirage  gap-5 px-5 py-5 '>
        <SideBar className="hidden" />
        <Main className="hidden" />
      </div>
    </>
  )
}

export default Home;
