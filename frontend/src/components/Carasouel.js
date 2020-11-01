import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../assets/images/faculty-back1.jpg'
import img2 from '../assets/images/faculty-front1.jpg'
import img3 from '../assets/images/faculty-img3.jpg'
const Carasouel = () => {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const data = [
    {
      image: img1,
      title: 'Grooming the future of the world with education',
    },
    {
      image: img2,
      title: 'Join to reinvent yourself',
    },
    {
      image: img3,
      title: 'Your Growth is our aim',
    },
  ]
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((data, index) => (
        <Carousel.Item interval={1000} key={index}>
          <Image
            className='d-block carousel-img w-100'
            src={data.image}
            alt='Slide'
            fluid
          />
          <Carousel.Caption>
            <h3>{data.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Carasouel
