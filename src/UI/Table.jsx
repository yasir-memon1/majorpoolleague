import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';


const Table = ({tableHeaders, data, noWidth=false}) => {
  // State to manage sort configuration
  console.log(data)
  const [sortConfig, setSortConfig] = useState({
    key: null, // Column key to sort by
    direction: 'asc', // 'asc' or 'desc'
  });

  // Function to handle sorting
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key, direction });
  };

  // Function to sort data
  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    // Handle different data types (numbers, strings, etc.)
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
    } else {
      // Convert to string for non-numeric comparison
      const aStr = aValue?.toString().toLowerCase() || '';
      const bStr = bValue?.toString().toLowerCase() || '';
      return sortConfig.direction === 'asc'
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    }
  });
  
  return (
    <div className="max-w-7xl mx-auto w-full p-4 bg-white text-slate-900">
      <div  className="mb-8">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-600">
            <table className={`w-full ${!noWidth && "min-w-[640px]"} border-collapse relative `}>
              <thead className="bg-white text-xs ">
                <tr className='border-b-2'>
                  {tableHeaders?.map((header, index) => (
                    <th onClick={() => handleSort(header.key)} key={index} className={`py-2 no-select cursor-pointer px-4 leading-none text-gray-700  font-semibold ${index === 0 ? 'sticky left-0 bg-white  z-10 text-left' : ' relative group text-center'}`}>
                      {header.name}
                      
                       <div className='absolute top-1/2 -translate-y-1/2 right-0 -translate-x-1/2 flex justify-center items-center gap-0 flex-col'>
                      <FontAwesomeIcon className={`h-3 relative top-[4px] duration-200 ${(sortConfig.key ===  header.key && sortConfig.direction === 'asc') ? "opacity-100" : "opacity-0"}`} icon={faCaretUp}/>
                      <FontAwesomeIcon className={`h-3 relative bottom-[4px] duration-200 ${(sortConfig.key ===  header.key && sortConfig.direction === 'desc') ? "opacity-100" : "opacity-0"}`} icon={faCaretDown}/>
                      </div>
                      
                      {header.desc && <div className='absolute top-auto z-30 flex justify-center items-center text-white font-semibold left-1/2 -translate-x-1/2 bg-blue p-2 rounded-lg pointer-events-none opacity-0 duration-100 ease-in-out group-hover:opacity-100'>{header.desc}</div>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='text-sm   '>
              
                {
                  sortedData.map((item,index)=> {
                    const {accolade, ...rest} = item;

                   
                    return<tr
                    key={index}
                    className={` bg-white group  hover:bg-gray-200 transition-colors duration-200 ease-in-out`}
                  >
                    {Object.entries(rest).map(([key, value], index) => {
                      if (index === 0) {
                        return (
                          <td key={index} className="sticky left-0 py-2 px-4 text-left z-10 bg-white group-hover:bg-gray-200 duration-200 ease-in-out">
                            <a href="#" className=" hover:text-blue  bg-inherit">{value}</a><span className='block leading-none text-sm  ml-2 text-gray-400'>{accolade}</span></td>
                        );
                      }
                      else {
                        return (
                          <td key={index} className="py-2 px-4 text-center relative">{value}</td>
                        )
                      }
                    })}
                  </tr>
})
                }

              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
};

export default Table;