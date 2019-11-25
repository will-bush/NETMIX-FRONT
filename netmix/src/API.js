// const TEST_URL = "http://www.omdbapi.com/?apikey=a12b58ca&t=doctor+sleep"

import { baseUrl } from './config'

const signUpUrl = baseUrl + '/users'
const signInUrl = baseUrl + '/signin'
const validateUrl = baseUrl + '/validate'
const ListUrl = baseUrl + '/lists'
const ListingURL = baseUrl + '/listings'
const searchURL = "http://www.omdbapi.com/?apikey=a12b58ca&t="
const contentURL = baseUrl + '/contents/'
const userURL = baseUrl + '/users/'
const sourcesURL = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="

const get = url =>
  fetch(url, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then(resp => resp.json())

const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())

const signUp = (userInfo) => post(signUpUrl, userInfo)

const signIn = (username, password) => post(signInUrl, { username, password })

const validate = () => get(validateUrl)

const getLists = () => get(ListUrl)

const getUser = (id) => get(userURL + id)

const search = query => fetch(searchURL + query).then(resp => resp.json())

const addMovieToDB = (movie) => post (contentURL, movie) 

const getContent = (id) => get(contentURL + id)

const createList = (ListData) => post (ListUrl, ListData)

const addMovieToList = (ListID, MovieID ) =>
  fetch(ListingURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      list_id: ListID,
      content_id: MovieID
    })
  })

  const destroyListing = (listingID) => {
fetch(ListingURL + "/" + listingID, {
  method: 'DELETE'
})
  }

  const deleteLIST = (listID) => {
    fetch(ListUrl + "/" + listID, {
      method: 'DELETE'
    })
  }

  const getSources = (movieTitle) => {
    fetch(sourcesURL + movieTitle, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
		"x-rapidapi-key": "71a90a3dfdmshe9c671ab1abdae6p102fcejsnc16e071b0e3a"
	}
})
.then(resp => resp.json())
}
// )
// .catch(err => {
// 	console.log(err);
// });
  // }

export default {
  signIn,
  validate,
  getLists,
  search,
  addMovieToDB,
  addMovieToList,
  getUser,
  getContent,
  createList,
  signUp,
  destroyListing,
  deleteLIST,
  getSources
}