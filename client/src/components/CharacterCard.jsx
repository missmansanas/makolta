import React from 'react'
import { useBleeps } from "@arwes/react-bleeps";

const CharacterCard = ({alias, name, avatar, isActive, index, setActiveIndex }) => {
  const bleeps = useBleeps();

  return (
    <div
      className='relative w-52 h-min p-2 flex flex-col items-center bg-white/10'
      onClick={() => setActiveIndex(index) + bleeps.click?.play()}
      >
      <div className="w-full h-8 border-t border-white/50 border-x absolute top-0"></div>
      <div className="w-full h-8 border-b border-white/50 border-x absolute bottom-0"></div>
        <img src={avatar} className='aspect-square object-cover p-2' />
        <h6 className='font-techno text-xl tracking-widest break-words'>
          {name ? name : alias}
        </h6>

    </div>
  )
}
  
export default CharacterCard
