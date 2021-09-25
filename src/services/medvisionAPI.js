import axios from "axios";

const baseUrl = "http://hiring.medvision.com.co/api";
const options = {
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_BEARER_TOKEN,
  },
};

const getAllHouses = () => {
  const res = axios.get(`${baseUrl}/House/GetAllHouses`, options);
  return res;
};
const getAllPeople = () => {
  const res = axios.get(`${baseUrl}/Person/GetAllPeople`, options);
  return res;
};
const addPerson = (personData) => {
  const res = axios.post(`${baseUrl}/Person/AddPerson`, personData, options);
  return res;
};
const addHouse = (houseData) => {
  const res = axios.post(`${baseUrl}/Person/AddPerson`, houseData, options);
  return res;
};
const medvisionAPI = {
  getAllHouses,
  getAllPeople,
  addPerson,
  addHouse,
};

export default medvisionAPI;
