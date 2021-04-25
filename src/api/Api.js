import axios from "axios";

const instance = axios.create({
  // withCredentials: true,
  baseURL: "https://intense-reef-89831.herokuapp.com",
});

export const searchAPI = {
  getIngredients(inputValue) {
    return instance.get(`getIngredients/?q=${inputValue}`);
  },
};
