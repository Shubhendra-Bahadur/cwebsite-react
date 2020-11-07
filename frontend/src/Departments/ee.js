import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
//import ReactDOM from "react-dom"
import './commondesign.css'
import About from './mainContent/Ee/About'
import Faculty from './mainContent/Ee/Faculty'
import Achievement from './mainContent/Ee/Achievement'
import CourseSyllabus from './mainContent/Ee/syllabus'

const Ee = (props) => {
  const [mainContent, setContent] = useState('')

  const ChangeContent = (ContentName) => {
    if (ContentName === 'About') {
      return <About />
    } else if (ContentName === '') {
      return <Faculty />
    } else if (ContentName === 'Faculty') {
      return <Faculty />
    } else if (ContentName === 'Achievement') {
      return <Achievement />
    } else if (ContentName === 'CourseSyllabus') {
      return <CourseSyllabus />
    } else {
      return <div>content not found</div>
    }
  }

  const handlediv = (e) => {
    // const a=e.target.getAttribute('Value')
    // const [mainContent,setState]=useState(e.target.getAttribute('value'))
    setContent(e.target.getAttribute('Value'))
    const a = document.getElementsByClassName('item-nav')
    a[0].classList.remove('show')
    // console.log(a[0]);
    // console.log(a[0].classList);
    // console.log(mainContent);
  }

  const goback = () => {
    props.history.push('/')
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className='scrEen'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-blue nav-fixed-top'>
        <button
          className='navbar-toggler collapsed mr-auto '
          type='button'
          data-toggle='collapse'
          data-target='#navbarsExample05'
          aria-controls='navbarsExample05'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='navbar-collapse collapse item-nav'
          id='navbarsExample05'
          style={{}}>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link
                to='/cse'
                className='nav-link sidebar-item active'
                onClick={handlediv}
                value='About'>
                About
              </Link>
            </li>
            {/* <li className="nav-item">
    <Link to='/cse' className="nav-link sidebar-item" onClick={handlediv} value='VisionAndMission' >Visions & mission</Link>
</li> */}
            <li className='nav-item'>
              <Link
                to='/cse'
                className='nav-link sidebar-item'
                onClick={handlediv}
                value='Faculty'>
                Faculty
              </Link>
            </li>
            {/* <li className="nav-item">
    <Link to='/cse' className="nav-link sidebar-item" onClick={handlediv} value='CourseOffered' >Course Offered</Link>
</li> */}
            <li className='nav-item'>
              <Link
                to='/cse'
                className='nav-link sidebar-item'
                onClick={handlediv}
                value='Achievement'>
                Achievements
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/cse'
                className='nav-link sidebar-item'
                onClick={handlediv}
                value='CourseSyllabus'>
                Course Syllabus
              </Link>
            </li>
            {/* <li className="nav-item">
    <Link to='/cse' className="nav-link sidebar-item" onClick={handlediv} value='Resources' >Resources</Link>
</li> */}
          </ul>
        </div>

        <div>
          <button
            className='btn goback btn-success ml-auto text-dark p-1 rounded'
            onClick={goback}>
            Home
          </button>
        </div>
      </nav>
      <div className='content pl-5 pr-5 pt-3 pb-5 position-realtive'>
        {ChangeContent(mainContent)}
        <Button
          onClick={scrollToTop}
          className='btn btn-dark rounded-circle position-fixed fixed-bottom mr-2 mb-3 button-top'
          href='#'>
          <i className='fas fa-arrow-up'></i>
        </Button>
      </div>
    </div>
  )
}

export default Ee
