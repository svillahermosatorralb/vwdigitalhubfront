import axios from "axios";
import { IMetadataBK } from "../models/metadata";
const API_URL = "https://vwgs-backend.azurewebsites.net/api/v1"; //debe ser cambiado por la variable de entorno: BACKEND_URL

export const storeMetadataCall = (metadata: IMetadataBK): Promise<any> => {
  return axios.post(`${API_URL}/testdata/save`, metadata, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
