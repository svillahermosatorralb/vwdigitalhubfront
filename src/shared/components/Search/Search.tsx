import { useState } from "react";
// import { searchAzure } from "../../services/azure-functions";
import { useTranslation } from "react-i18next";
import { searchAiCall } from "../../services/azure-functions";

export const Search = () => {
  const [searchBy, setSearchBy] = useState("");

  const searchByQuery = async () => {
    const searchBy_ = await searchAiCall(searchBy);
    let tmpObj = [];
    for await (const result of searchBy_.results) {
      tmpObj.push({        
        test: result.document.test,
        testequipment: result.document.testequipment,
        unitundertest: result.document.unitundertest,
        measurementquantity: result.document.measurementquantity,
        measurements: result.document.measurements,
        file: result.document.file,
      }) 
    }
    // tableData = tmpObj;
  };
  const [t] = useTranslation("global");
  return (
    <>
      <div className="w-full">
        <form className="max-w-sm">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              id="searchBy"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder={t("main.search.scope")}
              onChange={(e) => setSearchBy(e.target.value)}
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={searchByQuery}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
