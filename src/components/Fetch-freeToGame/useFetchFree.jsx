import useSWR from "swr";

const apiKey = "ec451c852bmsh5b9f324ff0aa41fp1b32e8jsn87d4f4065455"; // cada uno debe poner su api key aqui


const headers = {
  "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  "x-rapidapi-key": apiKey,
};

const fetcher = (url) =>
  fetch(url, { mode: "cors", headers })
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response); // Muestra toda la respuesta en lugar de response.results
      return response; // Devuelve toda la respuesta
    });

function useFetchFree() {
  const { data, error } = useSWR(
    `https://free-to-play-games-database.p.rapidapi.com/api/games`,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error, // isLoading será true si no hay datos ni error
  };
}

export default useFetchFree;
