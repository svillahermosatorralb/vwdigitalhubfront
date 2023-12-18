import { IMeasurement, IMeasurementQuantity, ITestEquipment, ITestObj } from "./metadata";

export interface ISearchVal {
    value: ISValues[];
}
interface ISValues {
    id: string;
    file: IFilesDet[];
    test: ITestObj;
    testequipment: ITestEquipment;
    measurements: IMeasurement;
    measurementquantity: IMeasurementQuantity;
}
interface IFilesDet {
    name: string; 
    id: string; 
    description: string; 
    comment: string; 
    mimetype: string; 
}