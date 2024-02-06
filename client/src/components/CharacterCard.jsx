import React from 'react'
import { useBleeps } from "@arwes/react-bleeps";

const CharacterCard = ({alias, name, avatar, isActive, index, setActiveIndex }) => {
  const bleeps = useBleeps();

  return (
    <div className={`relative w-32 h-40 p-1 shadow-xl m-3 g-white/30 border flex flex-col items-center ${isActive ? 'z-50' : '-rotate-3'} duration-300 b`}
    onClick={() => setActiveIndex(index) + bleeps.click?.play()}>
      <img src={avatar} className='border aspect-square'/>
      <h6 className='justify-self-end font-mono pt-1'>{name ? name : alias}</h6>
    </div>
  )
}
  
export default CharacterCard
