import axios from 'axios'

const baseUrl = 'https://graph.instagram.com/'
const token = 'IGQVJYc3ZAsNEhQeVFHeWtLSG0wbGlqeENfdDZAJOTNLZAzU4bThYa0JxekFGZAmYtSFh2ak00Rm5WQXBRN2dTOHpET0JWbGVlM1d1VVJZAME5qUnIxXzJBUUk3Y0JVTmZAtd3hmSzcyMV9n'

// 18072687004168702/children?fields=id,media_type,media_url,username,timestamp&access_token=

const getAllMedia = () => {
    const fields = 'fields=id,media_type,media_url,username,timestamp,thumbnail_url,caption'
    const request = axios.get(`${baseUrl}me/media?${fields}&access_token=${token}`)
    return request.then(res => res.data)
}

const getNextPage = (nextPoint) => {
    const request = axios.get(nextPoint)
    return request.then(res => res.data)
}

export default {getAllMedia, getNextPage}