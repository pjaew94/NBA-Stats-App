const axios = require("axios");

export const getPlayerList = async (query) => {

  const url = 'https://api.sportsdata.io/v3/nba/scores/json/Players'
  let result = null;

  try {
    result = await axios(url, {
      headers: {
        Accept: 'application/json',
        'Ocp-Apim-Subscription-Key': 'c1e3c9f3ef774e5587964be4c5a524eb'
      }
    })

    let players = result.data;

    let searchedPlayers = await players.filter(function(e) {
      return e.FirstName.toLowerCase() === query.toLowerCase() || e.LastName.toLowerCase() === query.toLowerCase()
    })

  return searchedPlayers

  } catch(err) {
    console.error(err);
  }
}


export const getAllStars = async () => {

  const url = 'https://api.sportsdata.io/v3/nba/stats/json/AllStars/2020'
  let result = null;

  try {
    result = await axios(url, {
      headers: {
        Accept: 'application/json',
        'Ocp-Apim-Subscription-Key': 'c1e3c9f3ef774e5587964be4c5a524eb'
      }
    })

    let players = result.data;

    return players

  } catch(err) {
    console.error(err);
  }

}