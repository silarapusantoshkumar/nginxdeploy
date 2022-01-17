import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const axiosinstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL});
    const { data: { data } } = await axiosinstance.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': "39a68c1a5amsh77a8b5d4b03a2bap1fd03fjsn388c077d11f6",
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
