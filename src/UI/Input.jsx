const Input = ({label, type, placeholder})=>{
    return(
        <div className="flex justify-start flex-col gap-">
            <label className="text-sm font-semibold text-gray-600">
              {label}
            </label>
            <div className="min-w-44   justify-center items-center border border-gray-400 group focus-within:border-blue transition-colors duration-200 rounded-sm ">
              <input
                type={type}
                className="outline-none px-2 py-2 bg-transparent w-full"
                placeholder={placeholder}
              />
            </div>
          </div>
    )
}
export default Input