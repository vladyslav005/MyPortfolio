import {Col, Container, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2 className="skill-bx-title">Skills</h2>
              <p className="skill-bx-description">
                Fabulas iudicabit neque quam vestibulum ubique veniam reprehendunt utamur veri dissentiunt persecuti cursus dis ius vituperata eam himenaeos quo adolescens vidisse penatibus offendit his nunc tale varius definitionem persecuti dictas deseruisse eleifend option pharetra condimentum petentium malesuada unum vestibulum fastidii ius lacus vero purus libero discere ubique definitionem accumsan quis referrentur expetenda accommodare pharetra alterum offendit deseruisse consequat scripta voluptatum solum invenire hinc atqui tortor debet ponderum egestas adipiscing contentiones conclusionemque mi nunc utamur periculis aliquet dissentiunt erroribus per recteque quot has ei duo nibh melius veritus vix putent sociis repudiare suscipit periculis quidam reprimique maximus condimentum praesent ad gubergren
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt=""/>
                  <h5>Web Development</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt=""/>
                  <h5>Brand Identify</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt=""/>
                  <h5>Logo Design</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt=""/>
                  <h5>Back-end Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" alt="" />
    </section>
  )
}