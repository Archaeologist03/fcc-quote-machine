const axios = require("axios");

const page = 1;
const author = "nietzsche";
const baseUrl = "https://goodquotesapi.herokuapp.com";
let quotes = [];

async function getAsyncData() {
  let data = await axios
    .get(`${baseUrl}/author/${author}?page=${page}`)
    .then(res => res.data.quotes)
    .catch(err => console.log(err));

    return data;
  }

export default getAsyncData;