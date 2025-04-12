import { useState } from "react";
import Page from "../UI/Page";
import PageHeader from "../UI/PageHeader";
import DividingHeader from "../UI/DividingHeader";
import placeHolder from "../assets/pool-placeholder.jpg";
import ShopItem from "../Components/ShopItem";

const Shop = () => {
  const [selected, setSelected] = useState("men");
  return (
    <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
          <div className="flex flex-col w-full gap-1">
            <DividingHeader header={"Shop"} />
            <div className="flex justify-center items-center text-lg sm:text-xl text-center   border-b-[1px] ">
              <button
                onClick={() => setSelected("men")}
                className={`${
                  selected === "men"
                    ? "border-blue "
                    : "border-transparent hover:border-blue"
                } text-gray-900 flex-1 py-3 hover:text-blue border-b-4  cursor-pointer  duration-200 ease-in-out`}
              >
                <h2>Men</h2>
              </button>
              <button
                onClick={() => setSelected("women")}
                className={`${
                  selected === "women"
                    ? "border-blue "
                    : "border-transparent hover:border-blue"
                } text-gray-900 flex-1 py-3 hover:text-blue border-b-4  cursor-pointer  duration-200 ease-in-out`}
              >
                <h2>Women</h2>
              </button>
              <button
                onClick={() => setSelected("kids")}
                className={`${
                  selected === "kids"
                    ? "border-blue "
                    : "border-transparent hover:border-blue"
                } text-gray-900 flex-1 py-3 hover:text-blue border-b-4  cursor-pointer  duration-200 ease-in-out`}
              >
                <h2>Kids</h2>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 md:gap-12">
              <ShopItem name={"Pool Shirt Black"} price={"34.99"} image={placeHolder}/>
              <ShopItem name={"Pool Shirt Black"} price={"34.99"} image={placeHolder}/>
              <ShopItem name={"Pool Shirt Black"} price={"34.99"} image={placeHolder}/>
              <ShopItem name={"Pool Shirt Black"} price={"34.99"} image={placeHolder}/>
              <ShopItem name={"Pool Shirt Black"} price={"34.99"} image={placeHolder}/>
              <ShopItem name={"Pool Shirt Black"} price={"34.99"} image={placeHolder}/>
              <ShopItem name={"Pool Shirt Black"} price={"34.99"} image={placeHolder}/>
              <ShopItem name={"Pool Shirt Black"} price={"34.99"} image={placeHolder}/>
              <ShopItem name={"Pool Shirt Black"} price={"34.99"} image={placeHolder}/>
              <ShopItem name={"Pool Shirt Black"} price={"34.99"} image={placeHolder}/>
              <ShopItem name={"Pool Shirt Black"} price={"34.99"} image={placeHolder}/>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default Shop;
