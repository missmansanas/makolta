import React from 'react'

const NewsCard = ({ title, content, timestamp }) => {
  return (
    <div className="bg-black/50 py-3 px-8">
      <h6 className='font-mono text-sm font-light border-b border-white/30 uppercase'>{timestamp && 'on ' + timestamp}:</h6>
      <p className='text-xl font-techno py-3'>
        {title}
      </p>
      <p className={`${content ? 'tracking-wider text-sm font-light': 'hidden'}`}>
        {content}
      </p>

    </div>
  )
}

export default NewsCard