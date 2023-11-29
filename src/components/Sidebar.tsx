

const SideBar = () => {

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
      <div className='h-full container lg:flex lg:flex-col hidden rounded-sm md:rounded-lg bg-slate-50 w-1/4 lg:shrink-0 bg-rmx-grey-charcoal gap-2 px-2 py-2 overflow-hidden' >
        <div className="navbar bg-rmx-baltic-sea text-neutral-content lg:rounded-lg object-center">
          <button className="btn btn-ghost text-xl">REMX</button>
        </div>
        <div className='h-full w-full overflow-hidden lg:flex lg:flex-1 lg:flex-col rounded-sm text-center md:rounded-lg bg-slate-50 lg:shrink-0 bg-rmx-baltic-sea gap-2'>
          <div className="h-[200px] w-full bg-rmx-dune rounded-[30%] top-1/2 transform -translate-y-[25%] ">
            <div className="h-[100px] absolute w-full bg-rmx-dune rounded-[50%] bottom-0 transform translate-y-[10%] ">
              <div className="h-[32px] absolute w-full bg-rmx-dune top-0 transform translate-y-[70%] ">
                <p className="text-center text-2xl text-neutral-200 top-0 tranform -translate-y-[70%]">Information</p>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div id="sidebar-component" className="px-2">
              <p className="text-justify text-neutral-300">
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