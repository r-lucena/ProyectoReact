import Banner from "../components/home-body/banner/Banner"
import Encuesta from "../components/home-body/Encuesta"
import GameList from "../components/home-body/GameList";
import Footer from "../components/footer/Footer";
import Navbar from "../components-victor/navbar/Navbar"

import "../ObjectAPI"
import GamesCarousel from "../components/body-Cinthya/carousel/GamesCarousel";
import Recommendations from "../components/body-Cinthya/recommendations/Recommendations";


function Home() {
  
  return (
    <div>
        <Navbar />
        <Banner/>
        <Recommendations/>
        <GamesCarousel/> 
        <Encuesta/>
        <GameList/>
        <Footer />
    </div>
  )
}



export default Home