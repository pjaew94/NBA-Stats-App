import { APIKEY } from './secrets'
const axios = require("axios");

export const getPlayerList = async (query) => {

  const url = 'https://api.sportsdata.io/v3/nba/scores/json/Players'
  let result = null;

  try {
    result = await axios(url, {
      headers: {
        Accept: 'application/json',
        'Ocp-Apim-Subscription-Key': APIKEY
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
  let allStars = null;
  let allStarProfiles = [];

  try {
    allStars = await axios(url, {
      headers: {
        Accept: 'application/json',
        'Ocp-Apim-Subscription-Key': APIKEY
      }
    })

    let stars = allStars.data;

    for(let i = 0; i < stars.length; i++) {

      let url = 'https://api.sportsdata.io/v3/nba/scores/json/Player/' + stars[i].PlayerID;
      let starProfile = null;

      try {
        starProfile = await axios(url, {
          headers: {
            Accept: 'application/json',
            'Ocp-Apim-Subscription-Key': APIKEY
          }
        })
      } catch(err) {
        console.error(err)
      }
      allStarProfiles.push(starProfile);
    }

 

    return allStarProfiles

  } catch(err) {
    console.error(err);
  }

}