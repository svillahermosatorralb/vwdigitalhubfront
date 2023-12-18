// import { IFormConfig } from "../../models/forms";
import { IFormConfig } from "../../models/forms";
import { IMetadata } from "../../models/metadata";
import { uploadFileToBlobCall } from "../../services/azure-functions";
import { DEFAULT_METADATA_CONFIG } from "./config/constants";
import { v4 as uuidv4 } from "uuid";

function Forms(props: IFormConfig) {
  let storedFormValues: IMetadata = DEFAULT_METADATA_CONFIG;
  const testId: string = uuidv4();
  console.log(props);
  
  // const unitundertestId: string = uuidv4();
  // const testequipmentId: string = uuidv4();

  const sendFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(storedFormValues);
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
  const uploadBlobStorage = async (e: FileList) => {
    await uploadFileToBlobCall(testId, e[0]);
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
              {/*primera*/}
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
                    storedValue(e.target.value, "test", "VehicleName")
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
                    storedValue(e.target.value, "test", "ProjectName")
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
                    storedValue(e.target.value, "test", "JobNumber")
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
                    storedValue(e.target.value, "test", "EmissionStandard")
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
                    storedValue(e.target.value, "test", "Department")
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
                    storedValue(e.target.value, "test", "CostCenter")
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
                    storedValue(e.target.value, "test", "Client")
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
                    uploadBlobStorage(e.target.files as FileList)
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
                    uploadBlobStorage(e.target.files as FileList)
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
                    uploadBlobStorage(e.target.files as FileList)
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
                  onChange={(e) => storedValue(e.target.value, "test", "value")}
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
export default Forms;
