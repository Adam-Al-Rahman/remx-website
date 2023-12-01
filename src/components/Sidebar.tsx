
interface typeSideBarProps {
  className?: string
}

const SideBar = ({ className }: typeSideBarProps) => {

  const information = `
  Machine Learning or automatic learning is a scientific field,
  and more specifically a subcategory of artificial intelligence.
  t consists of letting algorithms discover “patterns”, namely
  recurring patterns, in data sets. This data can be numbers, words,
  images, statistics...
  Anything that can be stored digitally can serve as data for Machine Learning.
  By detecting patterns in this data, algorithms learn and improve their
  performance in performing a specific task.`;

  return (
    <>
      <div className={`${className} h-full container lg:flex lg:flex-col rounded-sm md:rounded-lg md:2/4 lg:w-1/4 lg:shrink-0 bg-rmx-grey-charcoal gap-2 px-2 py-2 overflow-hidden font-mono font-medium`} >
        <div className="navbar bg-rmx-baltic-sea text-neutral-content lg:rounded-lg object-center">
          <button className="btn btn-ghost text-xl">REMX</button>
        </div>
        <div className='h-full w-full overflow-auto lg:flex lg:flex-1 lg:flex-col rounded-sm text-center md:rounded-lg bg-rmx-baltic-sea gap-2 shrink-0'>
          <div className="lg:block w-full bg-rmx-dune transform  lg:-translate-y-[25%] lg:h-[200px] lg:rounded-[30%] lg:top-1/2  shrink-0">
            <div className="h-[100px] absolute w-full bg-rmx-dune rounded-[50%] bottom-0 transform translate-y-[10%] ">
              <div className="h-[32px] absolute w-full bg-rmx-dune top-0 transform translate-y-[70%]">
                <p className="text-center text-2xl text-neutral-200 top-0 tranform -translate-y-[70%]">Information</p>
              </div>
            </div>
          </div>
          <div className="px-2 py-2 flex h-full w-full overflow-auto rounded-lg">
            <div id="sidebar-component" className="px-2  top transform -translate-y-4" >
              <p className="text-left text-lg text-neutral-300 mb-4">
                {information}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default SideBar;