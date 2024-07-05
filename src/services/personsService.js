import axios from "axios";
const URL = import.meta.env.VITE_ENDPOINT_BASE;

const getPersons = async (page, perPage) => {
  try {
    const url = `${URL}/persons?page=${page}&limit=${perPage}`;
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

const getPersonsCount = async () => {
  try {
    const url = `${URL}/persons`;
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

const getPersonById = async (id) => {
  try {
    const url = `${URL}/persons/${id}`;
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

const saveNewPerson = async (data) => {
  try {
    const url = `${URL}/persons`;
    const options = {
      method: "post",
      data: data,
    };
    const response = await axios({ url, ...options });
    if (response.statusText === "OK") {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

const updatePerson = async (id, data) => {
  try {
    const url = `${URL}/persons/${id}`;
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

const deletePerson = async (id) => {
  try {
    const url = `${URL}/persons/${id}`;
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
  getPersons,
  getPersonsCount,
  getPersonById,
  saveNewPerson,
  updatePerson,
  deletePerson,
};
