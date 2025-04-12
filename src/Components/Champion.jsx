import { Link } from "react-router-dom"

const Champion = ({placeHolder, description, name})=>{
    return(
        <div className="border-2 border-gray-200 group hover:border-blue duration-200 ">
                <Link to="/championship/name">
                <img
                  src={placeHolder}
                  className="scale-95 group-hover:scale-100 duration-200"
                />
                </Link>
                <div className="p-3">
                  <h3 className=" font-semibold leading-snug text-2xl text-blue text-justify">
                    {name}
                  </h3>
                  <p className="text-gray-500 text-base text-justify mt-1 mb-2">
                    {description}
                  </p>
                  <Link
                    to="/championship/name"
                    className=" text-base text-gray-900 group-hover:text-blue duration-200 font-semibold"
                  >
                    View Championship Stats
                  </Link>
                </div>
              </div>
    )
}
export default Champion