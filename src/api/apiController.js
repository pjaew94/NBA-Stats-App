const axios = require("axios");
const config = require("config");

export const playerFirstNameStats = async (req, res) => {

  const { data } = await axios({
    method: "GET",
    url: config.get("playerFirstNameURL"),
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": config.get("APIHOST"),
      "x-rapidapi-key": config.get("APIKEY"),
      useQueryString: true,
    },
  });

  return data;
};


