import React from 'react'
import Img from '../Rasm/photo.jpg'

export default function Error() {
  return (
    <div className='text-center mt-4'>
       <img src={Img} alt='empty' className='img w-75 rounded'/>
       <h4 className='text-danger mt-3'> Hozircha mahsulot kiritilmadi </h4>
    </div>
  )
}
