import axios from "axios";

const fetchCharacters = async () => {
  return await axios.get("https://swapi.dev/api/people", {
    params: {
      per_page: 10,
    },
  });
};

export default fetchCharacters;
