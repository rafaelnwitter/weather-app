require("dotenv").config();

const axios = require("axios");

// function to get the data from the API 
async function getW(value) {
  const query = `?q=${value}&type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02&_=1604490628153`;
  let response = await axios(`${process.env.BASE_URL_SEARCH}${query}`);
  return response;
}

//controller function 
module.exports = async (req, res) => {
  console.log(req.query);
  let responseData = await getW(req.query["value"]);
  res.send(responseData.data);
};
