import {URL, APIHOST, APIKEY } from './secrets';
const axios = require("axios");

export const getPlayerList = async (query) => {
  try {
    const { data } = await axios({
    "method":"GET",
    "url": URL + 'players/firstName/' + query,
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":APIHOST,
    "x-rapidapi-key":APIKEY,
    "useQueryString":true
    },
  })

  let playerList = data.api.players;


  return playerList

  } catch(err) {

    console.error(err);

  }
}
