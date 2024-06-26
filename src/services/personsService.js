import axios from "axios";
const URL = import.meta.env.VITE_ENDPOINT_BASE;

const getPersons = async () => {
  try {
    const url = `${URL}/persons`;
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

const deletePersons = async (id) => {
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

export { getPersons, getPersonById, deletePersons };
