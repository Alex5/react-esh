import axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: "https://intense-reef-89831.herokuapp.com",
    params: {
        mode: 1,
    },
    headers: localStorage.getItem("User-Identity") ? {
        "User-Identity": localStorage.getItem("User-Identity")
    } : {},
});

const setUUID = (res) => {
    const uuid = res.headers["user-identity"];
    localStorage.setItem("User-Identity", uuid)
}

export const searchAPI = {
    getIngredients(inputValue) {
        return instance.get(`getIngredients/?q=${inputValue}`).then(res => {
            setUUID(res);
            return res;
        });
    },
    getRecipes(newChipItems) {
        return instance.post(`getRecipes/`, newChipItems).then(res => {
            setUUID(res);
            return res;
        })
    },
    getRecipesOnInput(value) {
        return instance.get(`getRecipes/?q=${value}&count=5&offset=1`).then(res => {
            setUUID(res);
            return res;
        })
    },
    getIngAndRecipes(value) {
        return Promise.all([this.getIngredients(value), this.getRecipesOnInput(value)])
            .then( (results) => {
                setUUID(results);
                return [results[0], results[1]]
            });
    }
};


