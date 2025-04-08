const DividingHeader = ({header, size="text-3xl"})=>{
    return(<div className="flex-1 w-full">
          <h2 className={`section-divider  ${size!=="text-3xl" ? 'section-divider-blue text-blue' : "text-gray-500"} flex-1 ${size} bg-white  font-semibold w-full flex  justify-center items-center relative`}><span className="bg-white z-[1] px-4">{header}</span></h2>
        </div>)
}
export default DividingHeader