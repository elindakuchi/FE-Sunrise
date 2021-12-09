import axios from "axios";
const url = `/seedlings`;

export const getUsers = async () => {
    try {
        const res = await axios.get(url);
        const data = res.data;
        console.log("data in apiCall:", data);
        return data;
    } catch (error) {
        console.log("error in the getUsers function API call:", error);
        return null;
    }
};