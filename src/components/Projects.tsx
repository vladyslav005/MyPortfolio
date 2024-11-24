import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
interface Project {
  title: string;
  description: string;
  imgUrl: string;
}

export const Projects = () => {
  const projects : Project[] = [
    {
      title: 'Business Sturtup',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business Sturtup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Sturtup',
      description: 'Design & Development',
      imgUrl: projImg3,
    }
  ]

  return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <div>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 row justify-content-center align-items-center"
                       id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque
                        provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta
                        officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque
                        provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta
                        officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt=" "/>
      </section>

  )
}