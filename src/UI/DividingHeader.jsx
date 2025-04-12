const DividingHeader = ({header, size="text-3xl"})=>{
    return(<div className="flex-1 w-full mt-3 mb-2 md:mt-10 md:mb-4">
          <h2 className={`section-divider  ${size!=="text-3xl" ? ' section-divider-blue text-2xl sm:text-3xl text-blue' : "text-gray-500"} flex-1 md:${size} bg-white  font-semibold w-full flex  justify-center items-center relative`}><span className="bg-white z-[1] px-1 sm:px-4 text-center leading-none">{header}</span></h2>
        </div>)
}
export default DividingHeader