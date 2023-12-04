import { INFORMATION } from "@/lib/remx";

import { Table } from "@/components/Table";
import { TypeClassNameProps, TypeResultData } from "@/lib/types";

import { promises as fs } from 'fs';
import DownloadCSV from "./DownloadBtn";

interface TypeSideBarProps extends TypeClassNameProps {
  // resultData: TypeResultData[] | undefined;
}

const SideBar = async ({ className }: TypeSideBarProps) => {

  const file = await fs.readFile(process.cwd() + '/public/result.json', 'utf8');
  const resultData = JSON.parse(file);


  return (
    <div className={`${className} h - full container lg:flex lg: flex-col rounded-sm md:rounded-lg md:w-2/4 lg:w-1/4 lg:shrink-0 bg-rmx-grey-charcoal gap-2 px-2 py-2 overflow-hidden font-mono font-medium`} >
      <div className="navbar bg-rmx-baltic-sea text-neutral-content lg:rounded-lg object-center">
        <button className="btn btn-ghost text-xl">REMX</button>
      </div>
      <div className='h-full w-full overflow-y-clip lg:flex lg:flex-1 lg:flex-col rounded-sm text-center md:rounded-lg bg-rmx-baltic-sea gap-2 shrink-0'>
        <div className="lg:block w-full bg-rmx-dune transform  lg:-translate-y-[25%] lg:h-[200px] lg:rounded-[30%] lg:top-1/2  shrink-0">
          <div className="h-[100px] absolute w-full bg-rmx-dune rounded-[50%] bottom-0 transform translate-y-[10%] ">
            <div className="h-[32px] absolute w-full bg-rmx-dune top-0 transform translate-y-[70%]">
              {resultData ? (
                <div className="flex flex-col">
                  <p className="text-center text-2xl text-neutral-200 top-0 tranform -translate-y-[70%]">Result</p>
                  <div className="pb-4 pr-4 flex justify-end">
                    <DownloadCSV resultData={resultData} />
                  </div>
                </div>) : (<p className="text-center text-2xl text-neutral-200 top-0 tranform -translate-y-[70%]">Information</p>)}
            </div>
          </div>
        </div>
        <div className="px-2 py-2 flex h-full w-full rounded-lg overflow-auto">
          <div id="sidebarComponent" className="px-2  top transform -translate-y-4 text-rmx-white" >
            {resultData ? (<Table resultData={resultData} />) : (<p className="text-left text-lg text-neutral-300 mb-4"> {INFORMATION}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
};


export default SideBar;