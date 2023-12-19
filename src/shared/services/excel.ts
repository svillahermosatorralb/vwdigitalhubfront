import * as XLSX from "xlsx";
import {
  IExcelHeaders,
  SHEET_HEADERS_METADATA,
} from "../../utils/constants/excel";
import { IMetadataBK } from "../models/metadata";
const fileName = `vwdigital-${new Date().getTime()}.xlsx`;
export const excelExport = (dataToExport: IMetadataBK[], type: string) => {
  let sheetHeaders: IExcelHeaders[] = [];
  switch (type) {
    case "metadata":
      sheetHeaders = SHEET_HEADERS_METADATA;
      break;
    default:
      break;
  }
  const wb = XLSX.utils.book_new();
  sheetHeaders.forEach((sheets) => {
    const transformedData = dataToExport.map(dtE => {
        const result = Object.entries(dtE).find(entV => entV[0] === sheets.id);
        return !result ? [] : result[1];
      })
    const ws = XLSX.utils.json_to_sheet(transformedData);
    XLSX.utils.book_append_sheet(wb, ws, sheets.id);
  });
  XLSX.writeFile(wb, fileName);
};
