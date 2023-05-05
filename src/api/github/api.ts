import axios from "axios"

const baseUrlGitHub = axios.create({
    baseURL: `https://api.github.com`,
    timeout: 6666
})

export default baseUrlGitHub