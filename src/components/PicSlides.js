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
        <Carousel.Caption className='carouselText'>
          <h3>Small Groups to enhance Learning</h3>
          <p>Our 1:10 teacher to student Ratio allows for more focus on each child's development.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../pictures/Child Care/daycare3.jpg')}
          alt="Second slide"
          style={{ height: "400px", borderRadius:'20px' }}
        />
        <Carousel.Caption className='carouselText'>
          <h3>Helpful Staff</h3>
          <p>Helps your kids feel the like their at their home away from home.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../pictures/Child Care/daycare6.jpg')}
          alt="Third slide"
          style={{ height: "400px", borderRadius:'20px' }}
        />
        <Carousel.Caption className='carouselText'>
          <h3>Hands On Learning</h3>
          <p>Each new day brings a whole new lesson about the world!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default PicSlides;