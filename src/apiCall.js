import axios from "axios";
const url = `https://sunrise-backend-2021.herokuapp.com/seedlings`;

export const getUsers = async () => {
    try {
        const res = await axios.get(url);
        const data = res.data;
        return data;
    } catch (error) {
        console.log("error in the getUsers function API call:", error);
        return null;
    }
};
