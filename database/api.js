
import {secret} from '../googleApi'

var googleAPI = 'AIzaSyCXqsC_AdAR_RVy0qctvcogS7cmgmKetMg'

var places = ['Grand_Canyon', 'Victoria_Falls', 'Mount_Whitney', 'Mount_Everest', 'Great_Lakes', 'Amazon_River', 'Andes', 'Sahara', 'Mount_St._Helens','Annapurna_Massif','Antarctica', 'Europe', 'Africa', 'Rift_valley', 'Angel_Falls', 'Iguazu_Falls', 'Tibetan_Plateau', 'Colorado_Plateau' ]


var urlPlace

var randoWiki=() =>{
  let searchTerm = places[Math.floor(Math.random()*places.length)]
  var urlPlace = searchTerm
  console.log(urlPlace)
  var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+urlPlace+'&prop=revisions&rvprop=content&format=json'
  var coordUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+urlPlace+'&key=AIzaSyCXqsC_AdAR_RVy0qctvcogS7cmgmKetMg'

  return [wikiUrl, coordUrl]
}

// let [url, coords] = randoWiki()



var api = {

  getRandom(){


    let [url, coords] = randoWiki();
    console.log("WIKIRULR", url)
    console.log("COORDURL", coords)
    return Promise.all([
      this.getWikis(url),
      this.getCoords(coords)
    ])
  },

  getWikis(url){
    console.log("URL GET WIKI", url)
    return fetch(url)
    .then((response) =>
    {
      return response.json()})
     .catch((error) => {
       console.error(error);
     });
 },

 getCoords(coords){
   console.log('URL COORDS', coords)
  return fetch(coords)
    .then((response) => response.json())
     .catch((error) => {
       console.error(error);
  })

},

getUser(){
  return fetch(user)
  .then((response) => response.json())
   .catch((error) => {
     console.error(error);
})

}
}


module.exports = api
