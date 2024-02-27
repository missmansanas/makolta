import React from 'react'

const NewsCard = ({ title, content, timestamp }) => {
  return (
    <div className='rounded rounded-md p-3 bg-black/70 backdrop-blur-xs'>
    <h6 className='text-xs font-light tracking-widest'>Makolta City-State Gov posted {timestamp && 'on ' + timestamp}:</h6>
    <p className='text-xl tracking-wide font-mono py-3'>
      {title}
    </p>
    <p className={`${content ? 'tracking-wide font-mono': 'hidden'}`}>
      {content}
    </p>
    </div>
  )
}

export default NewsCard