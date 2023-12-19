export interface IExcelHeaders{
    id: string;
    values: string[];
}
export const SHEET_HEADERS_METADATA: IExcelHeaders[] = [
    {
        id: 'test',
        values: [
            "Name",
            "Description",
            "Comment",
            "ProjectName",
            "Emission Standard",
            "Vehicle Name",
            "Client",
            "Job Number",
            "Cost Center",
            "Department",
        ]
    },{
        id: "testequipment",
        values: [
            "Name",
            "Description",
            "Comment",
            "File",
            "Type",
            "Serial Number"
        ]
    },{
        id: "unitundertest",
        values: [
            "Name",
            "Id",
            "Description",
            "Comment",
            "File",
            "Group",
        ]
    }, {
        id: "measurements",
        values: [
            "name",
            "description",
            "comment",
        ]
    }, {
        id: "measurementquantity",
        values: [
            "Name",
            "Description",
            "Comment",
            "File",
            "Value",
            "Unit",
            "Group",
            "Min",
            "Max",
        ]
    }
]