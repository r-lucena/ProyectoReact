import Banner from "../components/home-body/banner/Banner"
import Encuesta from "../components/home-body/Encuesta"
import Footer from "../components/footer/Footer";
import Navbar from "../components-victor/navbar/Navbar"
import { Container , Row } from "react-bootstrap"

import "../ObjectAPI"
import GamesCarousel from "../components/body-Cinthya/carousel/GamesCarousel";

import GameSearch from "../components/home-body/GameSearch";


function Home() {
  
  return (
    <div>
        <Container fluid>
      <Row>
        <Navbar />
      </Row>
      <Row>
        <Banner />
      </Row>
    </Container>
        <GamesCarousel/> 
        <Encuesta/>
        <GameSearch/>
        <Footer />
    </div>
  )
}



export default Home