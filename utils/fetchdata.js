import axios from "axios";

export const baseUrl = 'https://www.omdbapi.com';

export const fetchData = async (url) => {
  const { data } = await axios.get((url), {
  },{
      
  });
    
  return data;
}