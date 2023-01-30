import React from 'react'

const Header = ({title, subtitle}) => {
  return (
    <div role='header' className=' d-flex flex-column mt-4'>
      <div className='w-50 mx-auto text-left '>
        <div className='text-white mb-4'>
        <h1 role='title' className='fw-light'>{title}</h1>
        </div>
      <div className='mx-auto mb-4 text-white bg-secondary px-2 py-2 rounded-2'>
        <h4 className='my-1 fst-normal'>{subtitle}</h4>
        </div>
      </div>
    </div>
  )
}

export default Header
