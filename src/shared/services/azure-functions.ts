import { BlobServiceClient } from "@azure/storage-blob";
import { AzureKeyCredential, SearchClient } from "@azure/search-documents";
import {
  BASE_CONTAINER_BLOB,
  KEY_QUERY_INDEX,
  SASS_TOKEN_BLOB,
  SASS_URL_BLOB_ACCOUNT,
  SEARCH_BASE_URL,
  SEARCH_INDEX_COSMOS,
  TMP_FOLDER_NAME,
} from "../../utils/constants/apis";

export const searchAiCall = (searchBy: string): Promise<any> => {
  const searchClient = new SearchClient(
    SEARCH_BASE_URL,
    SEARCH_INDEX_COSMOS,
    new AzureKeyCredential(KEY_QUERY_INDEX)
  );
  return searchClient.search(searchBy);
};

export const uploadFileToBlobCall = async (
  containerName: string,
  file: File
) => {
  const containerClient =
    blobServiceClientStore().getContainerClient(BASE_CONTAINER_BLOB);
  const blockBlobClient = containerClient.getBlockBlobClient(
    `${TMP_FOLDER_NAME}/${containerName}/${file.name}`
  );
  try {
    await blockBlobClient.uploadData(file);
    console.log(`Folder ${containerName}/${file.name} created successfully`);
  } catch (error: any) {
    console.error(`Error creating folder: ${error.message}`);
  }
};

const blobServiceClientStore = (): BlobServiceClient => {
  return new BlobServiceClient(`${SASS_URL_BLOB_ACCOUNT}?${SASS_TOKEN_BLOB}`);
};
