import axios from 'axios';

export type DataObject = {
  id: number;
  name: string;
  type: string;
  url: string;
  created: string;
  status?: string;
  species?: string;

  gender?: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  };
  image?: string;
  episode?: Array<string>;
  dimension?: string;
  residents?: Array<string>;
};

export type ParsedDataObj = {
  id: number;
  name: string;
  type: string;
  url: string;
  status?: string;
  species?: string;
  gender?: string;
  origin?: string;
  location?: string;
  episode?: string;
  dimension?: string;
  residents?: string;
};

const transformObject = (obj: DataObject): ParsedDataObj => {
  const transformed: ParsedDataObj = {
    id: obj.id,
    name: obj.name,
    type: obj.type,
    url: obj.url,
    ...(obj.status && { status: obj.status }),
    ...(obj.species && { species: obj.species }),
    ...(obj.gender && { gender: obj.gender }),
    ...(obj.origin && { origin: obj.origin.name }),
    ...(obj.location && { location: obj.location.name }),
    ...(obj.episode && { episode: obj.episode[0] }),
    ...(obj.dimension && { dimension: obj.dimension }),
    ...(obj.residents && { residents: obj.residents[0] }),
  };

  return transformed;
};

const requestData = async (path: string) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/${path}`);
    const parsedData: Array<ParsedDataObj> = [];
    response.data.results.forEach((element: DataObject) => {
      parsedData.push(transformObject(element));
    });

    return parsedData;
  } catch (error) {
    console.log(error);
  }
};

export default requestData;
