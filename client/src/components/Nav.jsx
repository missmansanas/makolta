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
    <div className='flex flex-row justify-between items-center gap-2 md:gap-3 font-mono'>
      <p className=''><StarBorderOutlinedIcon/></p>
      <div className='md:border md:border-white/30 md:w-full md:h-0'></div>
        <div className='flex flex-row flex-wrap gap-3 md:gap-6 text-xs z-50 min-w-max box-border text-white uppercase justify-between items-center'>
          <NavLink
            to='/city'
            className={({ isActive }) => isActive ? "border-b-2 py-3" : "py-3"}
            onClick={() => bleeps.click?.play()}
            >
            01. City
          </NavLink>
          <NavLink
            to='/people'
            className={({ isActive }) => isActive ? "border-b-2 py-3" : "py-3"}
            onClick={() => bleeps.click?.play()}
            >
            02. People
          </NavLink>
          <NavLink
            to='/news'
            className={({ isActive }) => isActive ? "border-b-2 py-3" : "py-3"}
            onClick={() => bleeps.click?.play()}>
            03. News
          </NavLink>
          <NavLink to='/locked' className='py-3' onClick={() => bleeps.click?.play()}>
            {JSON.stringify(userInfo) !== "{}" ? <LockOpenOutlinedIcon/> : <LockOutlinedIcon/> }
          </NavLink>
        </div>


    </div>
  )
}

export default Nav