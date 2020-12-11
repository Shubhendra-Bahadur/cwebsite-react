import React from 'react'
import '../../commondesign.css'
import imggs from '../../images/ce/faculty/GauravSrivastava.jpg'
import imgjps from '../../images/ce/faculty/JitendraPratapSingh.jpg'
import imgkp from '../../images/ce/faculty/KalpanaPatel.jpg'
import imgns from '../../images/ce/faculty/NidhiSrivastava.jpg'
import { ReactComponent as Briefcase } from '../../../assets/logo/briefcase.svg'
import { ReactComponent as Email } from '../../../assets/logo/email.svg'
import { ReactComponent as Phone } from '../../../assets/logo/phone.svg'
const Faculty = () => {
  const data = [
    {
      name: 'Er. Gaurav Srivastava',
      image: imggs,
      post: 'Assistant Professor',
      phoneNum: '9717681158',
      email: 'gaurav.ap1793@gmail.com',
    },
    {
      name: 'Er. Jitendra Pratap Singh',
      image: imgjps,
      post: 'Assistant Professor',
      phoneNum: '7977607678',
      email: 'jetendra123@gmail.com',
    },
    {
      name: 'Er. Kalpana Patel',
      image: imgkp,
      post: 'Assistant Professor',
      phoneNum: '9415068976',
      email: 'riya.patel63@gmail.com',
    },

    {
      name: 'Er. Nidhi Srivastava',
      image: imgns,
      post: 'Assistant Professor',
      phoneNum: '7985011067',
      email: 'nidhi.vnitnagpur@gmail.com',
    },
  ]
  return (
    <div className='Faculty'>
      <div className='container-fluid marketing'>
        <div className='row description faculty-data justify-content-space-between ml-1'>
          {data.map((data, index) => (
            <div className='m-4 p-3 margin-faculty-left rounded faculty-detail'>
              <img
                src={data.image}
                className='bd-placeholder-img img-shadow rounded-circle mb-3'
                preserveAspectRatio='xMidYMid slice'
                focusable='false'
                aria-label='Placeholder: 140x140'
                alt={`${data.name}`}
              />
              <h2 className='font-weight-bold faculty-name'>{data.name}</h2>
              <table className='mobile-table'>
                <tbody className='mobile-tbody'>
                  <tr>
                    <td className='p-2'>
                      <Briefcase />
                    </td>
                    <td className='p-2'>{data.post}</td>
                  </tr>
                  <tr>
                    <td className='p-2'>
                      <Phone />
                    </td>
                    <td className='p-2'>{data.phoneNum}</td>
                  </tr>
                  <tr>
                    <td className='p-2'>
                      <Email />
                    </td>
                    <td className='p-2'>
                      <a href={`mailto:${data.email}`} className='text-danger'>
                        {data.email}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}{' '}
        </div>
      </div>
    </div>
  )
}

export default Faculty
