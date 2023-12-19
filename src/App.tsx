import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Search } from "./shared/components/Search/Search";
import { Table } from "./shared/components/Table/Table";
import { Forms } from "./shared/components/Forms/Forms";
import { searchAiCall } from "./shared/services/azure-functions";
import { IMetadata, IMetadataBK } from "./shared/models/metadata";
import "./App.css";
import { storeMetadataCall } from "./shared/services/metadata";

export const App: React.FC = () => {
  const [t, i18n] = useTranslation("global");
  const [showModal, setShowModal] = useState(false);
  const [searchBy] = useState("");
  const [tableData, setTableData] = useState<IMetadata[]>([]);

  const storeTableData = async (searchBy: string) => {
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
      });
    }
    setTableData(tmpObj);
  };
  const storeMetadataToBack = async (metadata: IMetadataBK) => {
    await storeMetadataCall(metadata).then(res => {
      if(res.length > 0){

      }
    });
  }

  return (
    <>
      <div className="container mx-auto mt-5">
        <div className="header">
          <h1 className="text-4xl font-bold">{t("main.title")}</h1>
          <img src="./assets/react.svg" alt="" />
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          <button onClick={() => i18n.changeLanguage("de")}>DE</button>
        </div>
        <div className="body">
          <div className="flex mt-6">
            <div className="w-3/4">
              <Search storeSearchBy={storeTableData} searchBy={searchBy} />
            </div>
            <div className="w-1/4">
              <input
                onClick={() => setShowModal(true)}
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                type="button"
                value={t("main.form")}
              />
            </div>
          </div>
          <div className="mt-6 mb-6">
            <Table type="search" subType="metadata" dataTable={tableData} />
          </div>
          {showModal ? (
            <>
              <div
                className="relative z-10"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-gray-200 px-4 py-1 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          className="m-3"
                          onClick={() => setShowModal(false)}
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <Forms type="metadata" storedMetadata={storeMetadataToBack} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>

        <footer>@ Deloitte STE</footer>
      </div>
    </>
  );
};
