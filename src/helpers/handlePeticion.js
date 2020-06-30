const URL = "https://api.giphy.com/v1/gifs/search?q=";
const API_KEY = "y4CMGcCyGDtjxjh5wzS58q85BWrA0d5W";
let limit = 12;

export const handlePeticion = async (categoria) => {
  const resp = await fetch(
    `${URL}${encodeURI(categoria)}&limit=${limit}&api_key=${API_KEY}`
  );
  const { data } = await resp.json();
  const gifsData = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images?.downsized_medium.url,
  }));
  return gifsData;
};
