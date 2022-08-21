import axios from "axios";
import key from "../utils/key";

export default axios.create({
    baseURL: "https://translation.googleapis.com/language/translate/v2",
    params: {
        key: key
    }
});