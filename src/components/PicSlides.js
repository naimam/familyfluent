import Carousel from 'react-bootstrap/Carousel';
import './PicSlides.css';

function PicSlides() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/naimam/familyfluent/hazard/src/pictures/Child%20Care/daycare1.jpg?token=GHSAT0AAAAAABYO6675HCK65VMKNRUBQ5MGYZBM5EQ"
          alt="First slide"
          style={{ height: "400px" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/naimam/familyfluent/hazard/src/pictures/Child%20Care/daycare1.jpg?token=GHSAT0AAAAAABYO6675HCK65VMKNRUBQ5MGYZBM5EQ"
          alt="Second slide"
          style={{ height: "400px" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/naimam/familyfluent/hazard/src/pictures/Child%20Care/daycare1.jpg?token=GHSAT0AAAAAABYO6675HCK65VMKNRUBQ5MGYZBM5EQ"
          alt="First slide"
          style={{ height: "400px" }}
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