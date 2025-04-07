const DividingHeader = ({header})=>{
    return(<div>
          <h2 className="section-divider flex-1 text-3xl bg-white text-gray-500 font-semibold w-full flex  justify-center items-center relative"><span className="bg-white z-[1] px-4">{header}</span></h2>
        </div>)
}
export default DividingHeader