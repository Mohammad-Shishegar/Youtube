import axios from "axios"

const API_KEY = 'AIzaSyClwnGoBhgHKAQ3KVNL5Tn3gosyyYHB6-c'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
})