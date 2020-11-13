import React from 'react'
import literary from '../assets/images/clubs&councils/literary.jpeg'
import cultural from '../assets/images/clubs&councils/cultural.jpeg'
import sports from '../assets/images/clubs&councils/sports.jpeg'
import technical from '../assets/images/clubs&councils/technical.jpeg'
import finearts from '../assets/images/clubs&councils/finearts.jpeg'
const StudentLife = () => {
  return (
    <div>
      <div className='section-heading text-center'>Life at FOET</div>
      <hr className='section-underline' />
      <div className='description container-fluid'>
        The job market is one of the most competitive ones we have ever known.
        Very often, employers tell us that a degree alone is not indicative of a
        well-rounded graduate. It is ardent that during graduation, efforts
        should be to help the students develop an all-around personality. To
        achieve this goal, we should not just provide opportunities for students
        to achieve good academic results but actively promote the benefits of a
        broad curriculum to students. The Council will provide opportunities
        through which students can prepare themselves to succeed in varied roles
        they will have to undertake in the future. To recognize the importance
        and value of both academic curriculum and co-curricular activities in
        developing the range of skills and attributes is crucial for graduates.
      </div>
      <div className='section-sub-heading text-center container'>
        Student Life
      </div>
      <div className='row container-fluid'>
        <div className='col-8 description'>
          To complement their academics, students choose their own
          extracurricular adventures, from a spectacular array of ways to
          participate in music, dance, sports and tech. Council of Student
          Activities(CSA) is in place which makes sure to help students navigate
          challenges and to ensure proper smoothness of them
        </div>
        <div className='col-4'>
          <img src='#' alt='Council of Student Activities' />
        </div>
      </div>
      <div className='section-sub-heading text-center container'>
        Clubs and Councils
      </div>
      <div className='container-fluid my-3'>
        <div className='row council-cards'>
          <div className='col-sm-6 col-md-4 col-lg-4 col-12 my-2'>
            <div className='card-image'>
              <img src={cultural} alt='Avatar' className='image' />
              <div className='overlay'>
                <div className='text'>Cultural Council</div>
              </div>
              <div className='hidden-text'></div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-4 col-12 my-2'>
            <div className='card-image'>
              <img src={technical} alt='Avatar' className='image' />
              <div className='overlay'>
                <div className='text'>Technical Council</div>
              </div>
              <div className='hidden-text'></div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-4 col-12 my-2'>
            <div className='card-image'>
              <img src={finearts} alt='Avatar' className='image' />
              <div className='overlay'>
                <div className='text'>
                  <strong>Fine Arts and Photography Club</strong> <br />
                  The club primarily focuses on letting people paint their
                  thoughts, perceptions and imaginations.
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-4 col-12 my-2'>
            <div className='card-image'>
              <img src={sports} alt='Avatar' className='image' />
              <div className='overlay'>
                <div className='text'>Sports Council</div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-4 col-12 my-2'>
            <div className='card-image'>
              <img src={literary} alt='Avatar' className='image' />
              <div className='overlay'>
                <div className='text'>Literary Council</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentLife
