import * as XLSX from 'xlsx';
// import { FILE_EXTENSION, FILE_TYPE } from '../../utils/constants/excel';

// interface IExportData {
//     title: string;
// }
const fileName = `vwdigital-${new Date().getTime()}.xlsx`;
export const excelExport = () => {
    const testData = [['name', 'age'], ['felipe', 25]]
    const ws = XLSX.utils.aoa_to_sheet(testData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'TEST_DATA');
    XLSX.writeFile(wb, fileName);
}