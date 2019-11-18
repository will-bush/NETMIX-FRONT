// const BASE_URL = "http://localhost:3000/"
// const TEST_URL = "http://www.omdbapi.com/?apikey=a12b58ca&t=doctor+sleep"

// GET REQUEST
	function get(url) {
        return fetch(url).then(resp => resp.json())
    }

// POST REQUEST
    function post( url, data) {
        return fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(resp => resp.json())
      }

// PATCH REQUEST
      	function patch(url, id, objToUpdate) {
              const configObject = {
                method: 'PATCH',
                body: JSON.stringify(objToUpdate),
                headers: {
                  'Content-Type': 'application/json'
                }
              };
              return fetch(`${url}${id}`, configObject).then(data => data.json());
            }

// DELETE REQUEST
	function destroy(url, id) {
        return fetch(`${url}${id}`, {
          method: 'DELETE'
          })
        }

const API = {
        get,
        post,
        patch,
        destroy
        }
          
export default API;