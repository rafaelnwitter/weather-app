require("dotenv").config();
const axios = require("axios");

// function to get the data from the API 
let getWeather = async (city) => {
  let response = await axios(`${process.env.BASE_URL_API}?q=${city}&appid=${process.env.OPEN_WEATHER_KEY}&lang=pt_br&units=metric`);
  return response;
};
//controller function 
module.exports = async (req, res) => {
  let responseData = await getWeather(req.query.city);
  res.send(responseData.data);
};