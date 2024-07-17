import Banner from "../components/home-body/banner/Banner"
import Encuesta from "../components/home-body/Encuesta"
import GameSearch from "../components/home-body/GameSearch";
import Footer from "../components/footer/Footer";
import Navbar from "../components-victor/navbar/Navbar"
import GamesCarousel from "../components/body-Cinthya/carousel/GamesCarousel";
import MostPopular from "../components/body-Cinthya/mostPopular/MostPopular";


function Home() {

  return (
    <div className="parallax">

          <Navbar />
          <Banner/>
          <MostPopular/>
          <GamesCarousel/>
          <Encuesta/>
          <GameSearch/>
          <Footer />

    </div>
  )
}



export default Home
