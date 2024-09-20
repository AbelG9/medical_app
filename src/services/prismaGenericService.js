import axios from "axios";
const PRISMA_URL = import.meta.env.VITE_ENDPOINT_PRISMA;

const getLimitedRecords = async (entityName, page, perPage) => {
  try {
    const url = `${PRISMA_URL}/${entityName}?page=${page}&pageSize=${perPage}`;
    const options = {
      method: "get",
      data: null,
    };
    const response = await axios({ url, ...options });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

const getRecordsCount = async (entityName) => {
  try {
    const url = `${PRISMA_URL}/${entityName}/totalCount`;
    const options = {
      method: "get",
      data: null,
    };
    const response = await axios({ url, ...options });
    if (response.status === 200) {
      return response.data.count;
    }
  } catch (error) {
    throw error;
  }
};

const getRecordById = async (entityName, id) => {
  try {
    const url = `${PRISMA_URL}/${entityName}/${id}`;
    const options = {
      method: "get",
      data: null,
    };
    const response = await axios({ url, ...options });
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    throw error;
  }
};

const saveNewRecord = async (entityName, data) => {
  try {
    const url = `${PRISMA_URL}/${entityName}`;
    const options = {
      method: "post",
      data: data,
    };
    const response = await axios({ url, ...options });
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

const updateRecord = async (entityName, id, data) => {
  try {
    const url = `${PRISMA_URL}/${entityName}/${id}`;
    const options = {
      method: "put",
      data: data,
    };
    const response = await axios({ url, ...options });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

const deleteRecord = async (entityName, id) => {
  try {
    const url = `${PRISMA_URL}/${entityName}/${id}`;
    const options = {
      method: "delete",
      data: null,
    };
    const response = await axios({ url, ...options });
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    throw error;
  }
};

const findRecordbyNameOrLastname = async (entityName, title, value) => {
  console.log(value);
  
  try {
    const baseUrl = `${PRISMA_URL}/${entityName}/byNameOrLastname`;
    let params = new URLSearchParams();
    params.append(title, encodeURIComponent(value));
    const url = `${baseUrl}?${params.toString()}`;
    const options = {
      method: "get",
      data: null,
    };    
    const response = await axios({ url, ...options });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

export {
  getLimitedRecords,
  getRecordsCount,
  getRecordById,
  saveNewRecord,
  updateRecord,
  deleteRecord,
  findRecordbyNameOrLastname,
};
