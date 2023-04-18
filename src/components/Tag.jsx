import React from 'react'

const Tag = (props) => {
  return (
    <h4 className='bg-red-400 p-1 text-[13px] text-center text-white rounded-[5px]'>
      {props.tag}
    </h4>
  )
}

export default Tag
