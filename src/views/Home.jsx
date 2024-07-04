import Banner from "../components/home-body/banner/Banner"
import Encuesta from "../components/home-body/Encuesta"
import GameList from "../components/home-body/GameList";
import Footer from "../components/footer/Footer";
import Navbar from "../components-victor/navbar/Navbar"
import GamesCarousel from "../components/body-Cinthya/carousel/GamesCarousel";
import MostPopular from "../components/body-Cinthya/mostPopular/MostPopular";


function Home() {

  return (
    <div>
        <Navbar />
        <Banner/>
        <MostPopular/>
        <GamesCarousel/>
        <Encuesta/>
        <GameList/>
        <Footer />
    </div>
  )
}



export default Home
