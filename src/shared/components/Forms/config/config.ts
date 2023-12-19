export const METADATA_CONFIG = [
  {
    test: {
      id: {
        type: "none",
      },
      name: {
        type: "text",
      },
      comment: {
        type: "text",
      },
      vehicleName: {
        type: "text",
      },
      projectName: {
        type: "text",
      },
      jobNumber: {
        type: "number",
      },
      emissionStandard: {
        type: "text",
      },
      department: {
        type: "text",
      },
      costCenter: {
        type: "number",
      },
      client: {
        type: "text",
      },
    },
    unitundertest: {
      id: {
        type: "none",
      },
      name: {
        type: "text",
      },
      group: {
        type: "text",
      },
      description: {
        type: "text",
      },
      comment: {
        type: "text",
      },
      ao_file_children: {
        type: "text",
      },
    },
    testequipment: {
      ao_file_children: {
        type: "text",
      },
      comment: {
        type: "text",
      },
      description: {
        type: "text",
      },
      id: {
        type: "none",
      },
      name: {
        type: "text",
      },
      serialnumber: {
        type: "number",
      },
      type: {
        type: "text",
      },
    },
    measurements: {
      comment: {
        type: "text",
      },
      description: {
        type: "text",
      },
      id: {
        type: "none",
      },
      name: {
        type: "text",
      },
      testequipmentid: {
        type: "none",
      },
      testid: {
        type: "none",
      },
      unitundertestid: {
        type: "none",
      },
    },
    measurementquantity: {
      ao_file_children: {
        type: "text",
      },
      comment: {
        type: "text",
      },
      description: {
        type: "text",
      },
      group: {
        type: "text",
      },
      id: {
        type: "none",
      },
      max: {
        type: "number",
      },
      min: {
        type: "number",
      },
      name: {
        type: "text",
      },
      testequipmentid: {
        type: "none",
      },
      unit: {
        type: "text",
      },
      value: {
        type: "text",
      },
    },
    file: {
      comment: {
        type: "text",
      },
      description: {
        type: "text",
      },
      id: {
        type: "none",
      },
      mimetype: {
        type: "text",
      },
      name: {
        type: "text",
      },
    },
  },
];
