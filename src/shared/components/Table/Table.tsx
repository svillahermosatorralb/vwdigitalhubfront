import { mapFromMetadataToBk } from "../../../utils/mappers/metadata";
import { IMetadata } from "../../models/metadata";
import { excelExport } from "../../services/excel";
import { HEADER_TABLES } from "./config/config";
interface ITableComunication {
  type: string;
  dataTable: IMetadata[];
  subType: string;
  emitAction: (type: string) => void;
}

export const Table: React.FC<ITableComunication> = ({
  type,
  subType,
  dataTable,
  emitAction,
}) => {
  const headers = (): any[] => {
    let fHeader: string[] = [];
    switch (type) {
      case "search": //cambiar por enumerable
        fHeader = HEADER_TABLES;
        break;
      //para mas cabeceras
      default:
        break;
    }
    return fHeader;
  };
  const exportToExcelSheet = () => {
    switch (subType) {
      case "metadata":
        return excelExport(
          dataTable.map((e) => mapFromMetadataToBk(e)),
          subType
        );
      default:
        break;
    }
  };
  return (
    <>
      <table
        id="f-metadata-tab"
        className="table-fixed mb-5 mt-7 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 "
          id="f-metadata-tab-hd"
        >
          <tr id="f-metadata-tab-tr">
            {headers().map((data) => {
              return (
                <th id={data} className="w-1/11">
                  {data}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody id="f-metadata-tab-bd">
          {dataTable.length <= 0 ? (
            <tr>
              <td>No content for this search</td>
            </tr>
          ) : (
            dataTable.map((dt) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  id="f-metadata-tab-tr-bd"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {dt.test.name}
                  </th>
                  <td className="px-6">{dt.test.comment}</td>
                  <td className="px-6">{dt.test.description}</td>
                  <td className="px-6">{dt.test.client}</td>
                  <td className="px-6">{dt.test.costCenter}</td>
                  <td className="px-6">{dt.test.department}</td>
                  <td className="px-6">{dt.test.emissionStandard}</td>
                  <td className="px-6">{dt.test.jobNumber}</td>
                  <td className="px-6">{dt.test.projectName}</td>
                  <td className="px-6">{dt.test.vehicleName}</td>
                  <td className="px-6">
                    <div className="flex justify-between">
                      <button onClick={() => emitAction("charts")}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          data-slot="icon"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                          />
                        </svg>
                      </button>
                      <button onClick={() => emitAction("update")}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          data-slot="icon"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        </svg>
                      </button>
                      <button onClick={() => emitAction("delete")}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          data-slot="icon"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <div className="flex flex-row-reverse">{/**Esto es temporal hasta que implementemos la paginación */}
        
        <button
          className="text-white font-bold py-2 px-4 border border-blue-700 rounded"
          type="button"
          onClick={exportToExcelSheet}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            {" "}
            <path d="M 12 3 L 2 5 L 2 19 L 12 21 L 12 3 z M 14 5 L 14 7 L 16 7 L 16 9 L 14 9 L 14 11 L 16 11 L 16 13 L 14 13 L 14 15 L 16 15 L 16 17 L 14 17 L 14 19 L 22 19 L 22 5 L 14 5 z M 18 7 L 20 7 L 20 9 L 18 9 L 18 7 z M 4.1757812 8.296875 L 5.953125 8.296875 L 6.8769531 10.511719 C 6.9519531 10.692719 7.0084063 10.902625 7.0664062 11.140625 L 7.0917969 11.140625 C 7.1247969 10.997625 7.1919688 10.779141 7.2929688 10.494141 L 8.3222656 8.296875 L 9.9433594 8.296875 L 8.0078125 11.966797 L 10 15.703125 L 8.2714844 15.703125 L 7.1582031 13.289062 C 7.1162031 13.204062 7.0663906 13.032922 7.0253906 12.794922 L 7.0097656 12.794922 C 6.9847656 12.908922 6.934375 13.079594 6.859375 13.308594 L 5.7363281 15.703125 L 4 15.703125 L 6.0605469 11.996094 L 4.1757812 8.296875 z M 18 11 L 20 11 L 20 13 L 18 13 L 18 11 z M 18 15 L 20 15 L 20 17 L 18 17 L 18 15 z" />
          </svg>
        </button>
      </div>
    </>
  );
};
