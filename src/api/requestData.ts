import axios from 'axios';

const requestData = async (path: string) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/${path}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default requestData;
