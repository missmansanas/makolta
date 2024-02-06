import React from 'react'
import { useBleeps } from "@arwes/react-bleeps";

const HomepageCard = ({ bgImage, title, isActive, index, setActiveIndex }) => {
  const bleeps = useBleeps();

  return (
    <div
      className={`relative w-52 h-28 rounded shadow shadow-xl ${isActive ? 'z-50 m-3' : '-rotate-12 -m-3'} duration-300`}
      style={{
        backgroundImage: `url(${bgImage && bgImage})`,
        backgroundSize: 'cover',
        backgroundPositionY: '50%',
      }}
      onClick={() => setActiveIndex(index) + bleeps.click?.play()}
      >
      <div className='h-full bg-black/50 rounded'>
        <h1 className='font-mono tracking-widest font-semibold p-3'>
          {title}
        </h1>
      </div>
    </div>
  )
}

export default HomepageCard