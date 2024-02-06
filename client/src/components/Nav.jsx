import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { UserContext } from '../context/UserContext'
import { useBleeps } from "@arwes/react-bleeps";

const Nav = () => {
  const { userInfo } = useContext(UserContext);

  const bleeps = useBleeps();
  
  return (
    <div className='flex flex-row items-center justify-between font-mono'>
      <p className='text-3xl pr-3'>✨</p>
      <div className='border border-white/30 w-full h-0'></div>
      <div className='flex min-w-max gap-9 box-border text-white justify-evenly uppercase bg-white/30 backdrop-blur-xs px-9'>
        <NavLink
          to='/'
          className={({ isActive }) => isActive ? "border-b-2 py-3" : "py-3"}
          onClick={() => bleeps.click?.play()}
          >
          01. Home
        </NavLink>
        <NavLink
          to='/city'
          className={({ isActive }) => isActive ? "border-b-2 py-3" : "py-3"}
          onClick={() => bleeps.click?.play()}
          >
          02. City
        </NavLink>
        <NavLink
          to='/people'
          className={({ isActive }) => isActive ? "border-b-2 py-3" : "py-3"}
          onClick={() => bleeps.click?.play()}
          >
          03. People
        </NavLink>
        <NavLink
          to='/news'
          className={({ isActive }) => isActive ? "border-b-2 py-3" : "py-3"}
          onClick={() => bleeps.click?.play()}>
          04. News
        </NavLink>
        <NavLink to='/locked' className='py-3' onClick={() => bleeps.click?.play()}>
          {JSON.stringify(userInfo) !== "{}" ? '🔓' : '🔒'}
        </NavLink>
      </div>

    </div>
  )
}

export default Nav