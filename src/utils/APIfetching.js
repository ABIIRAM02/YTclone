
import axios from "axios";

let BASE_URL = 'https://youtube-v31.p.rapidapi.com'

console.log(process.env.RAPID_API_KEY);

const options = {

    url: BASE_URL ,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'e48b310c10mshe3ad9c3de1eaad4p1350b2jsn683e361aa82b',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const APIfetching = async ( url ) => {

       let {data} = await axios.get(`${BASE_URL}/${url}` , options)
       
       return data;
  }
   