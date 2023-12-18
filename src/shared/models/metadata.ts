export type IMetadata = {
  test: ITestObj;
  unitundertest: IUnderTest;
  testequipment: ITestEquipment;
  measurements: IMeasurement;
  measurementquantity: IMeasurementQuantity;
  file: IFileObj;
}
export interface ITestObj {
  id: string; //uuid
  name: string;
  comment: string;
  description: string;
  VehicleName: string;
  ProjectName: string;
  JobNumber: number;
  EmissionStandard: string;
  Department: string;
  CostCenter: number;
  Client: string;
  
}
export interface IUnderTest {
  id: string; //Vieene de algun lado...
  name: string;
  group: string;
  description: string;
  comment: string;
  ao_file_children: string; // nombre del archivo subido aqui!
}
export interface ITestEquipment {
  id: string;
  comment: string;
  description: string;
  name: string;
  serialnumber: string;
  type: string; //no se si son fijos o es un enumerable hay que preguntar
  ao_file_children: string; // nombre del archivo subido aqui!
}
export interface IMeasurement {
  id: string;
  name: string;
  comment: string;
  description: string;
  testequipmentid: string;
  testid: string; //uuid anteriormente creado para la session!
  unitundertestid: string;
}
export interface IMeasurementQuantity {
  id: string;
  name: string;
  description: string;
  comment: string;
  ao_file_children: string; // nombre del archivo subido aqui!
  group: string;
  max: number;
  min: number;
  testequipmentid: string;
  unit: string; //debe ser un enumerable con los tipos de unidad de medida
  value: string;
}
export interface IFileObj {
  id: string; //nombre del archivo
  name: string; //se repite el valor de id!
  comment: string;
  description: string;
  mimetype: string; //seria cuando cargas el archivo tienes que detectar la extension que sube
}
