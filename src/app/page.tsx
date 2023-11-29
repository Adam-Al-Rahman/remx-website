import type { NextPage } from "next"

import SideBar from '@/components/Sidebar'
import Main from '@/components/Main'


const Home: NextPage = () => {
  return (
    <div className='flex w-screen h-screen bg-rmx-mirage  gap-5 px-5 py-5 '>
      <SideBar />
      <Main />
    </div>
  )
}

export default Home;
