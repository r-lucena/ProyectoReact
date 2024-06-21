import Banner from "../components/home-body/banner/Banner"
import Encuesta from "../components/home-body/Encuesta"
import Recomendaciones from "../components/home-body/Recomendaciones"

function Home() {
  return (
    <div>
        <Banner/>
        <br />
        <p>(CARDS)</p>
        <br />
        <Encuesta/>
        <br />
        <Recomendaciones/>
   </div>
  )
}

export default Home