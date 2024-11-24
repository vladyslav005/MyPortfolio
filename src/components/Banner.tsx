import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img.svg"
import {useEffect, useState} from "react";



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 500


  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {clearInterval(ticker)}
  }, [text])


  const tick = () => {
    let i = loopNum  % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);


    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.4)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(period)
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={6} lg={7} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>{`Hi I'm  `}<span className="wrap">{text}</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button onClick={() => {console.log('connect 2')}}>
              Let's connect
              <ArrowRightCircle size={25}/>
            </button>
          </Col>
          <Col xs={12} sm={12} md={6} lg={5} xl={5}>
            <img src={headerImage} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}