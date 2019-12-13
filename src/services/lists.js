import axios from "axios";

function getLists() {
  return axios.get("../fakedata/lists.json");
}

export default getLists;
