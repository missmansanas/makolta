import React from 'react'

const Symbol = ({addClass}) => {
  return (
    <div className={`flex md:flex-col w-max mx-auto items-center ${addClass && addClass}`}>
      <div className="w-8 w-8 aspect-square border rotate-45"></div>
      <div className="flex flex-col md:flex-row md:justify-center">
        <div className="w-8 w-8 aspect-square border rotate-45"></div>
        <div className="w-8 w-8 aspect-square border rotate-45"></div>
        <div className="w-8 w-8 aspect-square border rotate-45"></div>

      </div>
      <div className="w-8 w-8 aspect-square border rotate-45"></div>
    </div>
  )
}

export default Symbol