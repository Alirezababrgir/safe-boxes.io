import axios from "axios";
const SERVER_URL = "https://www.safe-boxes.io/services";

export const PostToken = () => {
    const url = `${SERVER_URL}/authenticate/`;
    return axios.post(url);
}