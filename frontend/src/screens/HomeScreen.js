import React from 'react'
import { Row, Container, Col, Card } from 'react-bootstrap'
import Carasouel from '../components/Carasouel'
import AboutHome from '../components/AboutHome'
import DepartmentCard from '../components/DepartmentCard'
const HomeScreen = () => {
  return (
    <div>
      <Carasouel />
      <Container>
        <Row>
          <AboutHome />
        </Row>
        <Row>
          <DepartmentCard />
        </Row>
        <Row>
          <Col className='text-center'>
            <h1 className='section-heading'>Campus Life</h1>
            <hr className='section-underline' />
          </Col>
          <Row className='pt-3 pl-3 justify-content-around'>
            <div className='card-description'>
              <h1>Sports and Athletics</h1>
              <h5>
                MIT’s Department of Athletics, Physical Education, and
                Recreation(opens in new window) offers sports instruction and
                participation at all levels. With 33 varsity sports — 16 for
                men, 15 for women, two co-ed — the Engineers boast 318 Academic
                All-America citations (the most in the country) and over 1,500
                athletic All-America honors. We also work to foster community,
                inspire leadership, and promote wellness through physical
                education, recreation programs, club sports, intramurals — and,
                for the swashbuckling, the pirate arts(opens in new window).
              </h5>
            </div>
            <Card className='campuslife-card'>
              <Card.Img
                variant='top'
                src='https://source.unsplash.com/featured/?athletics'
              />
            </Card>
          </Row>

          <Row className='pt-3 justify-content-around'>
            <div className='card-description'>
              <h1>Art and Culture</h1>
              <h5>
                The arts thrive naturally in our Faculty’s creative culture of
                experimentation and innovation that crosses every discipline.
                With cultural club and CSA(Council of Student Activities) in
                place, students are regularly offered with various extra
                curricular and recreational activities to explore their
                interests, rejunevate themselves.
              </h5>
            </div>
            <Card className='campuslife-card'>
              <Card.Img
                variant='top'
                src='https://source.unsplash.com/featured/?arts,culture'
              />
            </Card>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
