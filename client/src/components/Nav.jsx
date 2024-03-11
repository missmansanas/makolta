import React, { useContext, useState } from 'react'
import { NavLink } from "react-router-dom";
import { UserContext } from '../context/UserContext'
import { useBleeps } from "@arwes/react-bleeps";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import useMediaQuery from "../hooks/useMediaQuery";

const Nav = () => {
  const { userInfo } = useContext(UserContext);

  const isMobile = useMediaQuery('(max-width: 640px)');

  const bleeps = useBleeps();
  
  return (
    <div className='flex flex-row items-center gap-2 md:gap-3 font-mono'>
      <p className=''><StarBorderOutlinedIcon/></p>
      <div className='md:border md:border-white/30 md:w-full md:h-0'></div>
      {isMobile ? (

        <div className='flex flex-row flex-wrap gap-3 text-xs z-50 min-w-max box-border text-white uppercase justify-between items-center'>
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
            {JSON.stringify(userInfo) !== "{}" ? <LockOpenOutlinedIcon/> : <LockOutlinedIcon/> }
          </NavLink>
        </div>

      ) : (

      <div className='flex min-w-max gap-9 box-border text-white justify-evenly uppercase px-9'>
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
          {JSON.stringify(userInfo) !== "{}" ? <LockOpenOutlinedIcon/> : <LockOutlinedIcon/> }
        </NavLink>
      </div>
      )}

    </div>
  )
}

export default Nav