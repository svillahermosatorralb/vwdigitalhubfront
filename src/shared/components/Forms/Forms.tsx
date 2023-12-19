import React from "react";
import { IMetadata, IMetadataBK } from "../../models/metadata";
import { uploadFileToBlobCall } from "../../services/azure-functions";
import { DEFAULT_METADATA_CONFIG } from "./config/constants";
import { v4 as uuidv4 } from "uuid";
import { TMP_FOLDER_NAME } from "../../../utils/constants/apis";
import { mapFromMetadataToBk } from "../../../utils/mappers/metadata";

interface IFormComunication{
  type: string,
  storedMetadata: (metadata: IMetadataBK) => void;
}
interface IFiles{
  id: string;
  name: string;
  mimeType: string;
}
export const Forms: React.FC<IFormComunication> = ({type, storedMetadata}) => {
  let storedFormValues: IMetadata = DEFAULT_METADATA_CONFIG;
  const testId: string = uuidv4();
  console.log(type);//not uset yet
  
  const unitundertestId: string = uuidv4();
  const testequipmentId: string = uuidv4();
  const measurementquantityId: string = uuidv4();
  const measurementsId: string = uuidv4();

  const acumOfFiles: IFiles[] = []

  const sendFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    storedFormValues = {
      ...storedFormValues,
      test: {
        ...storedFormValues.test,
        id: testId
      },
      unitundertest: {
        ...storedFormValues.unitundertest,
        id: unitundertestId
      },
      testequipment: {
        ...storedFormValues.testequipment,
        id: testequipmentId
      },
      measurements: {
        ...storedFormValues.measurements,
        id: measurementsId,
        testequipmentid: [testequipmentId],
        testid: testId,
        unitundertestid: [unitundertestId]
      },
      measurementquantity: {
        ...storedFormValues.measurementquantity,
        id: measurementquantityId,
        testequipmentid: testequipmentId
      }
    }
    storedFormValues = {
      ...storedFormValues,
      file: acumOfFiles.map(files => {
        return {
          id: `${TMP_FOLDER_NAME}/${testId}/${files.name}`,
          comment: `${(Object.values(storedFormValues).find((x: any) => x.id === files.id) as any).comment}`,
          description: `${(Object.values(storedFormValues).find((x: any) => x.id === files.id) as any).description}`,
          mimetype: files.mimeType,
          name: files.name
        }
      })
    }
    storedMetadata(mapFromMetadataToBk(storedFormValues));
  };

  const storedValue = (
    val: string | number,
    keyVal: string,
    typeVal: string
  ) => {
    switch (keyVal) {
      case "test":
        storedFormValues.test = {
          ...storedFormValues.test,
          [typeVal]: val,
        };
        break;
      case "unitundertest": {
        storedFormValues.unitundertest = {
          ...storedFormValues.unitundertest,
          [typeVal]: val,
        };
        break;
      }
      case "testequipment": {
        storedFormValues.testequipment = {
          ...storedFormValues.testequipment,
          [typeVal]: val,
        };
        break;
      }
      case "measurements": {
        storedFormValues.measurements = {
          ...storedFormValues.measurements,
          [typeVal]: val,
        };
        break;
      }
      case "measurementquantity": {
        storedFormValues.measurementquantity = {
          ...storedFormValues.measurementquantity,
          [typeVal]: val,
        };
        break;
      }
      case "file": {
        storedFormValues.file = {
          ...storedFormValues.file,
          [typeVal]: val,
        };
        break;
      }
      default:
        break;
    }
  };
  const uploadBlobStorage = async (e: FileList, typeVal: string, val: string) => {
    await uploadFileToBlobCall(testId, e[0]).then(_ => {
      storedValue(e[0].name, typeVal, val);
      switch (typeVal) {
        case 'measurementquantity':
          acumOfFiles.push({
            id: measurementquantityId,
            name: e[0].name,
            mimeType: e[0].type
          })
          break;
        case 'unitundertest':
          acumOfFiles.push({
            id: unitundertestId,
            name: e[0].name,
            mimeType: e[0].type
          })
          break;
        case 'testequipment':
          acumOfFiles.push({
            id: testequipmentId,
            name: e[0].name,
            mimeType: e[0].type
          })
          break;
        default:
          break;
      }

      
    }).catch(err => {
      console.error(err);      
    });
  };
  const clearFormValues = () => {
    storedFormValues = DEFAULT_METADATA_CONFIG;
  };

  return (
    <>
      <form onSubmit={sendFormData} onReset={clearFormValues}>
        <div className="relative w-full rounded-2xl rounded-tl-none">
          <div className="flex flex-col">
            <div className="bg-gray-200 text-center uppercase mb-1">Test</div>
            <div className="grid grid-cols-2 gap-4">
              <div>Name</div>
              <div>
                <input
                  type="text"
                  id="f_name"
                  placeholder="Name"
                  onChange={(e) => storedValue(e.target.value, "test", "name")}
                />
              </div>
              <div>Description</div>
              <div>
                <input
                  type="text"
                  id="f_description"
                  placeholder="Description"
                  onChange={(e) =>
                    storedValue(e.target.value, "test", "description")
                  }
                />
              </div>
              <div>Comment</div>
              <div>
                <input
                  type="text"
                  id="f_comment"
                  placeholder="Comment"
                  onChange={(e) =>
                    storedValue(e.target.value, "test", "comment")
                  }
                />
              </div>
              <div>Vehicle Name</div>
              <div>
                <input
                  type="text"
                  id="f_vehiclename"
                  placeholder="Vehicle Name"
                  onChange={(e) =>
                    storedValue(e.target.value, "test", "vehicleName")
                  }
                />
              </div>
              <div>Project Name</div>
              <div>
                <input
                  type="text"
                  id="f_projectname"
                  placeholder="Project Name"
                  onChange={(e) =>
                    storedValue(e.target.value, "test", "projectName")
                  }
                />
              </div>
              <div>Job Number</div>
              <div>
                <input
                  type="number"
                  id="f_jobnumber"
                  placeholder="1000000"
                  onChange={(e) =>
                    storedValue(e.target.value, "test", "jobNumber")
                  }
                  inputMode="numeric"
                  pattern="\d*"
                />
              </div>
              <div>Emission Standard</div>
              <div>
                <input
                  type="text"
                  id="f_emissionstandard"
                  placeholder="Emission Standard"
                  onChange={(e) =>
                    storedValue(e.target.value, "test", "emissionStandard")
                  }
                />
              </div>
              <div>Department</div>
              <div>
                <input
                  type="text"
                  id="f_department"
                  placeholder="Department"
                  onChange={(e) =>
                    storedValue(e.target.value, "test", "department")
                  }
                />
              </div>
              <div>Cost Center</div>
              <div>
                <input
                  type="text"
                  id="f_costcenter"
                  placeholder="Cost Center"
                  onChange={(e) =>
                    storedValue(e.target.value, "test", "costCenter")
                  }
                />
              </div>
              <div>Client</div>
              <div>
                <input
                  type="text"
                  id="f_client"
                  placeholder="Client"
                  onChange={(e) =>
                    storedValue(e.target.value, "test", "client")
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full rounded-2xl rounded-tl-none">
          <div className="flex flex-col">
            <div className="bg-gray-200 text-center uppercase mb-1">
              UnitunderTest
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>Name</div>
              <div>
                <input
                  type="text"
                  id="f_name"
                  placeholder="Name"
                  onChange={(e) =>
                    storedValue(e.target.value, "unitundertest", "name")
                  }
                />
              </div>
              {/*primera*/}
              <div>Group</div>
              <div>
                <input
                  type="text"
                  id="f_group"
                  placeholder="Group"
                  onChange={(e) =>
                    storedValue(e.target.value, "unitundertest", "group")
                  }
                />
              </div>
              <div>Comment</div>
              <div>
                <input
                  type="text"
                  id="f_comment"
                  placeholder="Comment"
                  onChange={(e) =>
                    storedValue(e.target.value, "unitundertest", "comment")
                  }
                />
              </div>
              <div>Description</div>
              <div>
                <input
                  type="text"
                  id="f_description"
                  placeholder="Description"
                  onChange={(e) =>
                    storedValue(e.target.value, "unitundertest", "description")
                  }
                />
              </div>
              <div>Children File</div>
              <div>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  type="file"
                  id="f_ao_file_children"
                  placeholder="Children File"
                  onChange={(e) =>
                    uploadBlobStorage(e.target.files as FileList, 'unitundertest', 'ao_file_children')
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full rounded-2xl rounded-tl-none">
          <div className="flex flex-col">
            <div className="bg-gray-200 text-center uppercase mb-1">
              testequipment
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>Comment</div>
              <div>
                <input
                  type="text"
                  id="f_comment"
                  placeholder="Comment"
                  onChange={(e) =>
                    storedValue(e.target.value, "testequipment", "comment")
                  }
                />
              </div>
              {/*primera*/}
              <div>Description</div>
              <div>
                <input
                  type="text"
                  id="f_description"
                  placeholder="Description"
                  onChange={(e) =>
                    storedValue(e.target.value, "testequipment", "description")
                  }
                />
              </div>
              <div>Name</div>
              <div>
                <input
                  type="text"
                  id="f_name"
                  placeholder="Name"
                  onChange={(e) =>
                    storedValue(e.target.value, "testequipment", "name")
                  }
                />
              </div>
              <div>Serial Number</div>
              <div>
                <input
                  type="text"
                  id="f_serialnumber"
                  placeholder="Serial Number"
                  onChange={(e) =>
                    storedValue(e.target.value, "testequipment", "serialnumber")
                  }
                />
              </div>
              <div>Type</div>
              <div>
                <input
                  type="text"
                  id="f_type"
                  placeholder="Type"
                  onChange={(e) =>
                    storedValue(e.target.value, "testequipment", "type")
                  }
                />
              </div>
              <div>Children File</div>
              <div>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  type="file"
                  id="f_ao_file_children"
                  placeholder="Children File"
                  onChange={(e) =>
                    uploadBlobStorage(e.target.files as FileList, 'testequipment', 'ao_file_children')
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full rounded-2xl rounded-tl-none">
          <div className="flex flex-col">
            <div className="bg-gray-200 text-center uppercase mb-1">
              measurements
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>Name</div>
              <div>
                <input
                  type="text"
                  id="f_name"
                  placeholder="Name"
                  onChange={(e) =>
                    storedValue(e.target.value, "measurements", "name")
                  }
                />
              </div>
              {/*primera*/}
              <div>Description</div>
              <div>
                <input
                  type="text"
                  id="f_description"
                  placeholder="Description"
                  onChange={(e) =>
                    storedValue(e.target.value, "measurements", "description")
                  }
                />
              </div>
              <div>Comment</div>
              <div>
                <input
                  type="text"
                  id="f_comment"
                  placeholder="Comment"
                  onChange={(e) =>
                    storedValue(e.target.value, "measurements", "comment")
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full rounded-2xl rounded-tl-none">
          <div className="flex flex-col">
            <div className="bg-gray-200 text-center uppercase mb-1">
              measurementquantity
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>Name</div>
              <div>
                <input
                  type="text"
                  id="f_name"
                  placeholder="Name"
                  onChange={(e) =>
                    storedValue(e.target.value, "measurementquantity", "name")
                  }
                />
              </div>
              {/*primera*/}
              <div>Description</div>
              <div>
                <input
                  type="text"
                  id="f_description"
                  placeholder="Description"
                  onChange={(e) =>
                    storedValue(
                      e.target.value,
                      "measurementquantity",
                      "description"
                    )
                  }
                />
              </div>
              <div>Comment</div>
              <div>
                <input
                  type="text"
                  id="f_comment"
                  placeholder="Comment"
                  onChange={(e) =>
                    storedValue(
                      e.target.value,
                      "measurementquantity",
                      "comment"
                    )
                  }
                />
              </div>
              <div>Children File</div>
              <div>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  type="file"
                  id="f_ao_file_children"
                  placeholder="Children File"
                  onChange={(e) =>
                    uploadBlobStorage(e.target.files as FileList, 'measurementquantity', 'ao_file_children')
                  }
                />
              </div>
              <div>Group</div>
              <div>
                <input
                  type="text"
                  id="f_group"
                  placeholder="Group"
                  onChange={(e) =>
                    storedValue(
                      e.target.value,
                      "measurementquantity",
                      "ProjectName"
                    )
                  }
                />
              </div>
              <div>Max</div>
              <div>
                <input
                  type="number"
                  id="f_max"
                  placeholder="1000000"
                  onChange={(e) =>
                    storedValue(e.target.value, "measurementquantity", "max")
                  }
                  inputMode="numeric"
                  pattern="\d*"
                />
              </div>
              <div>Min</div>
              <div>
                <input
                  type="number"
                  id="f_min"
                  placeholder="1000000"
                  onChange={(e) =>
                    storedValue(e.target.value, "measurementquantity", "min")
                  }
                  inputMode="numeric"
                  pattern="\d*"
                />
              </div>
              <div>Unit</div>
              <div>
                <input
                  type="text"
                  id="f_unit"
                  placeholder="Unit"
                  onChange={(e) =>
                    storedValue(e.target.value, "measurementquantity", "unit")
                  }
                />
              </div>
              <div>Value</div>
              <div>
                <input
                  type="text"
                  id="f_value"
                  placeholder="Value"
                  onChange={(e) => storedValue(e.target.value, "measurementquantity", "value")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          <div>
            <button
              type="reset"
              className="bg-gray-400 hover:bg-gray-400 text-white font-bold py-2 px-4 border border-black rounded"
            >
              Limpiar
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
