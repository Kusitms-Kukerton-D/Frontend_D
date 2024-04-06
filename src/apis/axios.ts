import axios from "axios";

const Axios = axios.create({
  baseURL: "http://3.39.118.1:8080/",
});
export default Axios;
