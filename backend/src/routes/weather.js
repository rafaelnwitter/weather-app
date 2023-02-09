require("dotenv").config();

const axios = require("axios");

// function to get the data from the API 
async function getW(city) {
  console.log(city);
  let response = await axios(`${process.env.BASE_URL_API}?q=${city}&appid=${process.env.OPEN_WEATHER_KEY}&lang=pt_br&units=metric`);
  return response;
}

async function getCoord(lat, lon) {
  let response = await axios(`${process.env.BASE_URL_API}?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}&lang=pt_br&units=metric`);
  return response;
}

//controller function 
module.exports = async (req, res) => {
  if (req.query["city"]) {
    let responseData = await getW(req.query["city"]);
    res.send(responseData.data);
  } else if(req.query["lat"] && req.query["lon"]) {
    let responseData = await getCoord(req.query["lat"], req.query["lon"]);
    res.send(responseData.data);
  } else {
    res.send({"error": "cidade invalida"});
  }
};
