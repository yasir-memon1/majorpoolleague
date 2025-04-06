import React from 'react';


const Table = ({tableHeaders, data}) => {
  console.log('Table props:', { tableHeaders, data }); 
  
  return (
    <div className="max-w-7xl mx-auto p-4 bg-white text-slate-900">
      <div  className="mb-8">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-600">
            <table className="w-full min-w-[640px] border-collapse relative ">
              <thead className="bg-white text-xs ">
                <tr className='border-b-2'>
                  {tableHeaders?.map((header, index) => (
                    <th key={index} className={`py-2 px-4  font-semibold ${index === 0 ? 'sticky left-0 bg-white  z-10 text-left' : ' relative group text-center'}`}>
                      {header.name}{header.desc && <div className='absolute top-7 z-30 flex justify-center items-center text-white font-semibold left-1/2 -translate-x-1/2 bg-blue p-2 rounded-lg pointer-events-none opacity-0 duration-100 ease-in-out group-hover:opacity-100'>{header.desc}</div>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='text-sm   '>
              
                {
                  data.map((item,index)=> (
                    <tr
                    key={index}
                    className={` bg-white group  hover:bg-gray-200 transition-colors duration-200 ease-in-out`}
                  >
                    {Object.entries(item).map(([key, value], index) => {
                      if (index === 0) {
                        return (
                          <td key={index} className="sticky left-0 py-2 px-4 text-left z-10 bg-white group-hover:bg-gray-200 duration-200 ease-in-out">
                            <a href="#" className=" hover:text-blue  bg-inherit">{value}</a></td>
                        );
                      }
                      else {
                        return (
                          <td key={index} className="py-2 px-4 text-center relative">{value}</td>
                        )
                      }
                    })}
                  </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
};

export default Table;