import { IMetadata, IMetadataBK } from "../../shared/models/metadata";

export const mapFromMetadataToBk = (data: IMetadata): IMetadataBK => {
    return {
        file: data.file,
        measurementquantity: [data.measurementquantity],
        measurements: data.measurements,
        test: data.test,
        testequipment: [{...data.testequipment, ao_file_children: [data.testequipment.ao_file_children]}],
        unitundertest: [data.unitundertest]
    }
}