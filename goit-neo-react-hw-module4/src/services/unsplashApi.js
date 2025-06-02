import axios from 'axios';

const ACCESS_KEY = 'h6sQANzeEchZedZ9Hv5lgswjKW9Jy4nb8T_eg7R9p7c'; // заміни на свій з Unsplash
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};