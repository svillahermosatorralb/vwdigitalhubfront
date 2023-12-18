import { IMetadata } from "../../../models/metadata";

export const DEFAULT_METADATA_CONFIG: IMetadata = {
    file: {
        comment: '',
        description: '',
        id: '',
        mimetype: '',
        name: ''
    },
    measurementquantity: {
        ao_file_children: '',
        comment: '',
        description: '',
        group: '',
        id: '',
        max: 0,
        min: 0,
        name: '',
        testequipmentid: '',
        unit: '',
        value: ''
    },
    measurements: {
        comment: '',
        description: '',
        id: '',
        name: '',
        testequipmentid: '',
        testid: '',
        unitundertestid: ''
    },
    test: {
        Client: '',
        comment: '',
        CostCenter: 0,
        Department: '',
        description: '',
        EmissionStandard: '',
        id: '',
        JobNumber: 0,
        name: '',
        ProjectName: '',
        VehicleName: ''
    },
    testequipment: {
        ao_file_children: '',
        comment: '',
        description: '',
        id: '',
        name: '',
        serialnumber: '',
        type: ''
    },
    unitundertest: {
        ao_file_children: '',
        comment: '',
        description: '',
        group: '',
        id: '',
        name: ''
    }
}