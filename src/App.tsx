import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Search } from "./shared/components/Search/Search";
import { Table } from "./shared/components/Table/Table";
import { Forms } from "./shared/components/Forms/Forms";
import { MainChart } from "./shared/components/Charts/Chart";
import { searchAiCall } from "./shared/services/azure-functions";
import { IMetadata, IMetadataBK } from "./shared/models/metadata";
import "./App.css";
import { storeMetadataCall } from "./shared/services/metadata";
import { Modal } from "./shared/components/Modal/Modal";
import { Header } from "./shared/components/Header/Header";

export const App: React.FC = () => {
  const [t] = useTranslation("global");
  const [showModal, setShowModal] = useState(false);
  const [searchBy] = useState("");
  const [captureEvent, setCaptureEvent] = useState("");
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
    await storeMetadataCall(metadata).then((res) => {
      if (res.status === 201) {
        setShowModal(false);
      }
    });
  };

  return (
    <>
      <div className="container mx-auto mt-5">
        <Header />
        <div className="body">
          <div className="container flex flex-row flex-wrap justify-between items-end mt-6">
            <div>
              <Search storeSearchBy={storeTableData} searchBy={searchBy} />
            </div>
            <div>
              <input
                onClick={() => setShowModal(true)}
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                type="button"
                value={t("main.form")}
              />
            </div>
          </div>
          <div className="mt-6 mb-6">
            <Table
              type="search"
              subType="metadata"
              dataTable={tableData}
              emitAction={setCaptureEvent}
            />
          </div>
          {showModal ? (
            <>
              <Modal
                childrenComponent={
                  <Forms type="metadata" storedMetadata={storeMetadataToBack} />
                }
                emitClose={() => {
                  setShowModal(false);
                }}
              ></Modal>
            </>
          ) : (
            <></>
          )}
          {captureEvent !== "" ? (
            <>{/**temporalmente solo mostrara el modal, luego se implementara para actualizar y borrar */}
              <Modal
                childrenComponent={<MainChart />}
                emitClose={() => {
                  setCaptureEvent("");
                }}
              ></Modal>
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
