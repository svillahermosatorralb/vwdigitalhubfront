import { TMP_FOLDER_NAME } from "../../../../../utils/constants/apis";
import { IMetadata } from "../../../../models/metadata";
import { IFiles } from "../models/files";

export const mapToMetadata = (
  data: any,
  testId: string,
  unitundertestId: string,
  testequipmentId: string,
  measurementquantityId: string,
  measurementsId: string,
  acumOfFiles: IFiles[]
): IMetadata => {
  let storedFormValues = {
    ...data,
    test: {
      ...data.test,
      id: testId,
    },
    unitundertest: {
      ...data.unitundertest,
      id: unitundertestId,
    },
    testequipment: {
      ...data.testequipment,
      id: testequipmentId,
    },
    measurements: {
      ...data.measurements,
      id: measurementsId,
      testequipmentid: [testequipmentId],
      testid: testId,
      unitundertestid: [unitundertestId],
    },
    measurementquantity: {
      ...data.measurementquantity,
      id: measurementquantityId,
      testequipmentid: testequipmentId,
    },
  };
  storedFormValues = {
    ...data,
    file: acumOfFiles.map((files) => {
      return {
        id: `${TMP_FOLDER_NAME}/${testId}/${files.name}`,
        comment: `${
          (Object.values(data).find((x: any) => x.id === files.id) as any)
            .comment
        }`,
        description: `${
          (Object.values(data).find((x: any) => x.id === files.id) as any)
            .description
        }`,
        mimetype: files.mimeType,
        name: files.name,
      };
    }),
  };
  return storedFormValues;
};
