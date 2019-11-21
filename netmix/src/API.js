// const TEST_URL = "http://www.omdbapi.com/?apikey=a12b58ca&t=doctor+sleep"

import { baseUrl } from './config'

const signInUrl = baseUrl + '/signin'
const validateUrl = baseUrl + '/validate'
const ListUrl = baseUrl + '/lists'
const ListingURL = baseUrl + '/listings'
const searchURL = "http://www.omdbapi.com/?apikey=a12b58ca&t="
const contentURL = baseUrl + '/contents'

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

const signIn = (username, password) => post(signInUrl, { username, password })

const validate = () => get(validateUrl)

const getLists = () => get(ListUrl)

const search = query => fetch(searchURL + query).then(resp => resp.json())

const addMovieToDB = (movie) => post (contentURL, movie) 

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

export default {
  signIn,
  validate,
  getLists,
  search,
  addMovieToDB,
  addMovieToList
}