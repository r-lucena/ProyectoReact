import useSWR from "swr"

const fetcher = (url)=>fetch(url).then(resp => resp.json()).then(response => response.results)

function useFetch() {
    const apiKey = "49bd95d6269340dea9cb5577a90a17d7" // cada uno debe poner su api key aqui
    const link = "games"  // esta es la ruta que queramos emplear para la api
    
    const {data, error, isLoading} = useSWR(`https://rawg.io/api/${link}?token&key=${apiKey}`, fetcher)
    
    
  return {
    data,
    error,
    isLoading,
  }
}

export default useFetch