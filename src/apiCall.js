import axios from "axios";
export const apiUrl = `https://sunrise-backend-2021.herokuapp.com/seedlings`;

export const getUsers = async () => {
    try {
        const res = await axios.get(apiUrl);
        const data = res.data;
        return data;
    } catch (error) {
        console.log("error in the getUsers function API call:", error);
        return error;
    }
};
