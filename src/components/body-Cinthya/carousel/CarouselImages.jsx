function CarouselImages({ text, imageUrl, onMouseEnter,onMouseLeave }) {
  
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <img src={imageUrl} alt={text} />
    </div>
  );
}

export default CarouselImages;




// <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>