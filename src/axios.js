import axios from 'axios'

const instance = axios.create({
    baseURL: "https://us-central1-clone-e08f0.cloudfunctions.net/api" //The API (cloud function) URL
})

export default instance

//  http://localhost:5001/clone-e08f0/us-central1/api
