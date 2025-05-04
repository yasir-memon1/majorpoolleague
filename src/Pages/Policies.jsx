import DividingHeader from "../UI/DividingHeader";
import Page from "../UI/Page";
import placeholder from "../assets/placeholder.pdf";

const Policies = () => {
  return (
    <Page>
      <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
        <div className="flex flex-col w-full gap-3  md:gap-6">
          <DividingHeader header={"MLP League Policies"} />

          <object
            data={placeholder}
            type="application/pdf"
            width="100%"
            height="600px"
          >
            <p>
              Your browser does not support PDFs.{" "}
              <a href={placeholder}>Download the PDF</a>.
            </p>
          </object>
          <div className="ml-auto ">
              <a href={placeholder} download className="px-4 py-2 text-lg font-semibold text-white bg-blue  rounded mx-auto border-blue border-2 hover:bg-white hover:text-blue duration-200">
                Download
              </a>
            </div>

          <div>
            
          </div>
        </div>
      </div>
    </Page>
  );
};
export default Policies;
