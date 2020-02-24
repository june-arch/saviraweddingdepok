import axios from 'axios'

//IdFb = "1377942669031952";
//IdfbPage = "1900242190196171";
const baseUrl = 'https://graph.facebook.com/v6.0'
const idIgPage = '17841400557997710'
const token = 'EAAkThgfRLZBwBAIHsbzGcGch08ZAE5w6r7i9mJHFZANXQBM6U5DKFY2QC5BLiefkX5SQoVxwE0hWqXpGbmVrCqi1mECX8pZAptbEQnBnZA7WsWKsQuXKh0mHJk9ZC40uBLbg4bvsab5HgVV9JGLqLsB4odclc7sRes1MfvWvyEIQZDZD'

const getAllMedia = () => {
    const fields = 'fields=id,media_type,media_url,username,timestamp,thumbnail_url,caption,like_count,comments_count,permalink'
    const request = axios.get(`${baseUrl}/${idIgPage}/media?${fields}&access_token=${token}`)
    return request
                .then(res => res.data)
                .catch(err => console.log(err))
}

const getNextPage = (nextPoint) => {
    const request = axios.get(nextPoint)
    return request
                .then(res => res.data)
                .catch(err => console.log(err))
}

const getProfile = () =>{
    const fields = 'fields=biography,id,followers_count,follows_count,media_count,name,profile_picture_url,username,website'
    const request = axios.get(`${baseUrl}/${idIgPage}?${fields}&access_token=${token}`)
    return request
                .then(res => res.data)
                .catch(err => console.log(err))
}

const getOneMedia = (id) => {
    const fields = 'fields=id,media_type,media_url,like_count,comments_count,owner,timestamp,caption'
    const request = axios.get(`${baseUrl}/${id}?${fields}&access_token=${token}`)
    return request
                .then(res => res.data)
                .catch(err => console.log(err))
}

export default {getAllMedia, getNextPage, getProfile, getOneMedia}