import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
//import ReactDOM from "react-dom"
import './commondesign.css'
import About from './mainContent/cse/About'
import Faculty from './mainContent/cse/Faculty'

const Cse = (props) => {

    const [mainContent, setContent] = useState('')

    const ChangeContent = (ContentName) => {
        if (ContentName === 'About') {
            return <About />
        }
        else if (ContentName === '') {
            return <Faculty />
        }
        else if (ContentName === 'Faculty') {
            return <Faculty />
        }
        else {
            return <div>content not found</div>
        }

    }

    const handlediv = (e) => {
        // const a=e.target.getAttribute('Value')
        // const [mainContent,setState]=useState(e.target.getAttribute('value'))
        setContent(e.target.getAttribute('Value'))
        const a=document.getElementsByClassName('item-nav');
        a[0].classList.remove("show");
        // console.log(a[0]);
        // console.log(a[0].classList);
        // console.log(mainContent);
    }

    const goback = () => {
        props.history.push('/');
    }
    return (
        <div className="screen">
            <nav className="navbar navbar-expand-lg navbar-dark bg-blue nav-fixed-top">
                <div>
                    <button className="btn goback btn-success mr-auto text-dark p-2 rounded" onClick={goback}>Go Back</button>
                </div>
                <button className="navbar-toggler collapsed ml-auto " type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse item-nav" id="navbarsExample05" style={{}}>
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                            <Link to='/cse' className="nav-link active" onClick={handlediv} value='About'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cse' className="nav-link" onClick={handlediv} value='VisionAndMission' >Visions & mission</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cse' className="nav-link" onClick={handlediv} value="Faculty" >Faculty</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cse' className="nav-link" onClick={handlediv} value='CourseOffered' >Course Offered and Thrust Areas</Link></li>
                        <li className="nav-item">
                            <Link to='/cse' className="nav-link" onClick={handlediv} value='Achievement' >Achievements</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cse' className="nav-link" onClick={handlediv} value='CourseSyllabus' >Course Syllabus</Link></li>
                        <li className="nav-item">
                            <Link to='/cse' className="nav-link" onClick={handlediv} value='Resources' >Resources</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="content pl-5 pr-5 pt-4 pb-5 bg-light">
                {ChangeContent(mainContent)}

            </div>
        </div>

    )
}

export default Cse;