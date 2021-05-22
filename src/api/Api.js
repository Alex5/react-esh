import axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: "https://intense-reef-89831.herokuapp.com",
    params: {
        mode: 1,
    }
});

export const searchAPI = {
    getIngredients(inputValue) {
        return instance.get(`getIngredients/?q=${inputValue}`);
    },
    getRecipes(newChipItems) {
        return instance.post(`getRecipes/`, newChipItems)
    },
    getRecipesOnInput(value) {
        return instance.get(`getRecipes/?q=${value}&count=5&offset=1`)
    },
    getIngAndRecipes(value) {
        return Promise.all([this.getIngredients(value), this.getRecipesOnInput(value)])
            .then( (results) => {
                return [results[0], results[1]]
            });
    }
};


