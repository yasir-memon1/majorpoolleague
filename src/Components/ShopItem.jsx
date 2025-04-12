const ShopItem = ({image, name, price})=>{
    return(
        <div className="flex flex-col gap-4 justify-center group rounded-2xl bg-white shadow-lg p-4 items-center border border-gray-300">
                <div className="flex justify-center  aspect-square overflow-hidden rounded-2xl items-center bg-gray-300">
                  <img
                    src={image}
                    className="group-hover:scale-105 duration-700 ease-in-out "
                  />
                </div>
                <div className="flex flex-col gap-0 sm:gap-2 justify-start items-start w-full px-2">
                  <h3 className="text-lg md:text-xl text-gray-900">{name}</h3>
                  <h2 className=" text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">${price}</h2>
                  <a
                    href="#"
                    className="mt-1 flex items-center justify-center rounded-md bg-blue w-full px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-700 duration-300  focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    
                  </a>
                </div>
              </div>
    )
}
export default ShopItem