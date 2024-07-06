import axios from "axios";
const URL = import.meta.env.VITE_ENDPOINT_BASE;
const ALT_URL = import.meta.env.VITE_ENDPOINT_ALT_BASE;

const getLimitedRecords = async (entityName, page, perPage, useAltURL = false) => {
  const mainURL = useAltURL ? ALT_URL : URL;
  try {
    const url = `${mainURL}/${entityName}?page=${page}&limit=${perPage}`;
    const options = {
      method: "get",
      data: null,
    };
    const response = await axios({ url, ...options });
    if (response.statusText === "OK") {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

const getRecordsCount = async (entityName, useAltURL = false) => {
  const mainURL = useAltURL ? ALT_URL : URL;
  try {
    const url = `${mainURL}/${entityName}`;
    const options = {
      method: "get",
      data: null,
    };
    const response = await axios({ url, ...options });
    if (response.statusText === "OK") {
      return response.data.length;
    }
  } catch (error) {
    throw error;
  }
};

const getRecordById = async (entityName, id, useAltURL = false) => {
  const mainURL = useAltURL ? ALT_URL : URL;
  try {
    const url = `${mainURL}/${entityName}/${id}`;
    const options = {
      method: "get",
      data: null,
    };
    const response = await axios({ url, ...options });
    if (response.statusText === "OK") {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

const saveNewRecord = async (entityName, data, useAltURL = false) => {
  const mainURL = useAltURL ? ALT_URL : URL;
  try {
    const url = `${mainURL}/${entityName}`;
    const options = {
      method: "post",
      data: data,
    };
    const response = await axios({ url, ...options });
    if (response.statusText === "Created") {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

const updateRecord = async (entityName, id, data, useAltURL = false) => {
  const mainURL = useAltURL ? ALT_URL : URL;
  try {
    const url = `${mainURL}/${entityName}/${id}`;
    const options = {
      method: "put",
      data: data,
    };
    const response = await axios({ url, ...options });
    if (response.statusText === "OK") {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

const deleteRecord = async (entityName, id, useAltURL = false) => {
  const mainURL = useAltURL ? ALT_URL : URL;
  try {
    const url = `${mainURL}/${entityName}/${id}`;
    const options = {
      method: "delete",
      data: null,
    };
    const response = await axios({ url, ...options });
    if (response.statusText === "OK") {
      return true;
    }
  } catch (error) {
    throw error;
  }
};

export {
  getLimitedRecords,
  getRecordsCount,
  getRecordById,
  saveNewRecord,
  updateRecord,
  deleteRecord,
};
