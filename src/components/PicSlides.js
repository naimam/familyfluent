import Carousel from 'react-bootstrap/Carousel';
import './PicSlides.css';

function PicSlides() {
  return (
    <Carousel fade className='carouselSizing'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="First slide"
          style={{ height: "400px", borderRadius:'20px' }}
          src={require('../pictures/Child Care/daycare1.jpg')}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../pictures/Child Care/daycare3.jpg')}
          alt="Second slide"
          style={{ height: "400px", borderRadius:'20px' }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../pictures/Child Care/daycare6.jpg')}
          alt="Third slide"
          style={{ height: "400px", borderRadius:'20px' }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default PicSlides;