export type IMetadata = {
  test: ITestObj;
  unitundertest: IUnderTest;
  testequipment: ITestEquipment;
  measurements: IMeasurement;
  measurementquantity: IMeasurementQuantity;
  file: IFileObj[];
}
export type IMetadataBK = {
  test: ITestObj;
  unitundertest: IUnderTest[];
  testequipment: ITestEquipmentBK[];
  measurements: IMeasurement;
  measurementquantity: IMeasurementQuantity[];
  file: IFileObj[];
}
export interface ITestObj {
  id: string; //uuid
  name: string;
  comment: string;
  description: string;
  vehicleName: string;
  projectName: string;
  jobNumber: number;
  emissionStandard: string;
  department: string;
  costCenter: number;
  client: string;
  
}
export interface IUnderTest {
  id: string; //Vieene de algun lado...
  name: string;
  group: string;
  description: string;
  comment: string;
  ao_file_children: string;
}
export interface ITestEquipment {
  id: string;
  comment: string;
  description: string;
  name: string;
  serialnumber: string;
  type: string; //no se si son fijos o es un enumerable hay que preguntar
  ao_file_children: string;
}
export interface ITestEquipmentBK {
  id: string;
  comment: string;
  description: string;
  name: string;
  serialnumber: string;
  type: string; //no se si son fijos o es un enumerable hay que preguntar
  ao_file_children: string[];
}
export interface IMeasurement {
  id: string;
  name: string;
  comment: string;
  description: string;
  testequipmentid: string[];
  testid: string; //uuid anteriormente creado para la session!
  unitundertestid: string[];
}
export interface IMeasurementQuantity {
  id: string;
  name: string;
  description: string;
  comment: string;
  ao_file_children: string;
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
