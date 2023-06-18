import axios from "axios";


const Base_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: Base_URL,
    params: {
        maxResults:'50'
    //   part: 'snippet',
    //   videoId: 'M7FIvfx5J10'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

// this allows us to use our base url and add stuff like the channel name, video name etc. 
 
  export const fetchFromApi = async(url) =>{


    const {data}=    await axios.get(`${Base_URL}/${url}`, options);

    // this is just fetching and grabbing videos basically. 
    return data;
    // this function allows us to call the api from within our function in a different folder thing. 
}