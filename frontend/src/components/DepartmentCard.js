import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import cse from '../assets/logo/cse.svg'
import ce from '../assets/logo/ce.svg'
import me from '../assets/logo/me.svg'
import ece from '../assets/logo/ece.svg'
import ash from '../assets/logo/ash.svg'
import ee from '../assets/logo/ee.svg'
const DepartmentCard = () => {
  return (
    <Col className='text-center col'>
      <h1 className='section-heading'>Departments We have</h1>
      <hr className='section-underline' />

      <div className='description'>
        We offer course in following 5 departments, our students combine
        analytical rigor with curiosity, playful imagination, and an appetite
        for solving the hardest problems in service to society.
      </div>

      <Row className='pt-5 cardList'>
        <Col xs={12} sm={4} md={4} lg={4}>
          <LinkContainer to='/cse'>
            <Card className='departmentCard' style={{ width: '15rem' }}>
              <Card.Img variant='top' src={cse} alt='CSE Department' />
              <Card.Body>
                <Card.Title>Computer Science and Engineering</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
          <LinkContainer to='/ce'>
            <Card className='departmentCard' style={{ width: '15rem' }}>
              <Card.Img variant='top' src={ce} alt='CE Department' />
              <Card.Body>
                <Card.Title>Civil Engineering</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4}>
          <LinkContainer to='/ece'>
            <Card className='departmentCard' style={{ width: '15rem' }}>
              <Card.Img variant='top' src={ece} alt='ECE Department' />
              <Card.Body>
                <Card.Title>Electronics &amp; Comm. Engineering</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
          <LinkContainer to='/ee'>
            <Card className='departmentCard' style={{ width: '15rem' }}>
              <Card.Img variant='top' src={ee} alt='EE Department' />
              <Card.Body>
                <Card.Title>Electrical Engineering</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4} className='last-col'>
          <LinkContainer to='/me'>
            <Card
              className='departmentCard'
              alt='ME Department'
              style={{ width: '15rem' }}>
              <Card.Img variant='top' src={me} />
              <Card.Body>
                <Card.Title>Mechanical Engineering</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
          <LinkContainer to='/ash'>
            <Card
              className='departmentCard last-card'
              style={{ width: '15rem' }}>
              <Card.Img variant='top' src={ash} alt='ASH Department' />
              <Card.Body>
                <Card.Title>Applied Science &amp; Humanities</Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
        </Col>
      </Row>
    </Col>
  )
}

export default DepartmentCard
