import React from 'react'
import { useBleeps } from "@arwes/react-bleeps";

const ElementCard = ({ bgImage, title, isActive, index, setActiveIndex }) => {
  const bleeps = useBleeps();

  return (
    <div
      className={`relative aspect-video max-w-52 h-20 md:h-28 duration-300`}
      style={{
        backgroundImage: `url(${bgImage && bgImage})`,
        backgroundSize: 'cover',
        backgroundPositionY: '50%',
      }}
      onClick={() => setActiveIndex(index) + bleeps.click?.play()}
      >
      <div className='h-full bg-black/50'>
        <h6 className='font-techno tracking-widest p-3 break-words'>
          {title}
        </h6>
      </div>
    </div>
  )
}

export default ElementCard