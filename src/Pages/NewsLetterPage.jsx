import { Link } from "react-router-dom"
import MailInput from "../UI/MailInput"
import Page from "../UI/Page"
import PageHeader from "../UI/PageHeader"
import DividingHeader from "../UI/DividingHeader"

const NewsLetterPage = ()=>{
    return(
      <div className="bg-gray-100 py-10 h-full min-h-screen flex justify-center items-center">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900 flex justify-start items-center flex-col gap-10">
          <div className="text-left flex flex-col gap-4">
            <div>
              <DividingHeader header={"News Letter"} />
            </div>
            <p className="text-gray-500 text-base text-center">
              Subscribe to out Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi earum suscipit magni beatae corrupti consequatur, deserunt ullam dicta eveniet reiciendis incidunt, odio ex possimus ipsa, ipsam iusto? Corrupti, ab et!
            </p>
          </div>
          
         
          <div className="flex  justify-center items-center flex-1 w-full gap-4 max-w-2/3">
          <MailInput />
            <button
              className=" text-lg text-white bg-blue px-4 h-[42px] flex justify-center  items-center rounded-md border-2 border-blue  hover:text-blue hover:bg-white duration-200 font-semibold"
            >
              Cast Vote
            </button>
          </div>
        </div>
      </div>
    )
}
export default NewsLetterPage