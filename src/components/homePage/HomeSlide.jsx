import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
function UncontrolledExample() {
  return (
    <Link to="/topwear">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wforwomanonline.gumlet.io/banner/1665641270Homepage Banner_Web.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Link to="/topwear" > */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wforwoman.gumlet.io/banner/1655271138W-website_desktop_banner-15-june.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wforwomanonline.gumlet.io/banner/1663589407stories-by-w-desktop.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* </Link> */}
      </Carousel>
    </Link>
  );
}

export default UncontrolledExample;
