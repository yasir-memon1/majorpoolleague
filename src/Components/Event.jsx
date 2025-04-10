const Event = ({image, name, startDate,startTime, endDate, endTime, details})=>{
    return(
        <div className="flex flex-col gap-4 justify-center group rounded-2xl bg-white shadow-lg p-4 items-center border border-gray-300">
                <div className="flex justify-center  aspect-square overflow-hidden rounded-2xl items-center bg-gray-300">
                  <img
                    src={image}
                    className="group-hover:scale-105 duration-700 ease-in-out "
                  />
                </div>
                <div className="flex flex-col gap-3 justify-start items-start w-full px-2">
                  <h3 className="text-xl text-gray-900 font-semibold text-center w-full">{name}</h3>
                  {/* <h2 className="text-3xl font-bold text-gray-900">${price}</h2> */}
                  <hr className="w-full border-gray-300 "></hr>
                  <div className="flex flex-row justify-between w-full items-start">
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="text-sm font-semibold text-gray-600 italic leading-tight">Starting</h4>
                        <h4 className="text-lg font-semibold text-gray-600 leading-tight">{startDate}</h4>
                        <h4 className="text-base font-semibold text-gray-600 leading-tight">{startTime}</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="text-sm font-semibold text-gray-600 italic leading-tight">Ending</h4>
                        <h4 className="text-lg font-semibold text-gray-600 leading-tight">{endDate}</h4>
                        <h4 className="text-base font-semibold text-gray-600 leading-tight">{endTime}</h4>
                    </div>

                  </div>
                  <hr className="w-full border-gray-300 "></hr>
                    <div className="flex justify-center items-center w-full text-center text-base text-gray-600">
                        {details}

                    </div>
                 
                </div>
              </div>
    )
}
export default Event