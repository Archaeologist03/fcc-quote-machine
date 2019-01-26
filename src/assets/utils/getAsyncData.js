const axios = require("axios");

const baseUrl = "https://goodquotesapi.herokuapp.com";

async function getAsyncData(searchedTerm, searchedBy) {
  let data = [];

  if (searchedBy === "tag") {
    data = await axios.get(`${baseUrl}/tag/${searchedTerm}`);
  }
  if (searchedBy === "title") {
    data = await axios.get(`${baseUrl}/title/${searchedTerm}`);
  }
  if (searchedBy === "author") {
    data = await axios.get(`${baseUrl}/author/${searchedTerm}`);
  }

  return data;
}

export default getAsyncData;
