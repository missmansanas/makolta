'use client'
import { UserContext } from './context/UserContext'
import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useBleeps } from "@arwes/react-bleeps";

function App() {
  const [navMode, setNavMode] = useState(false);
  const { userInfo } = useContext(UserContext);
  const bleeps = useBleeps();

  const handleAgree = () => {
    setNavMode(true);
    bleeps.click?.play();
  }

  return (
    <div className='flex flex-col min-h-[80vh] justify-center py-8'>
      {/* <Symbol addClass='py-6'/> */}
      {!navMode ? (
        <div className="flex flex-col justify-center gap-8 md:w-[700px] place-content-center items-center mx-auto">
          <div className="bg-pink-900/50 p-0.5 shadow-all shadow-pink-500/20">
            <div className='bg-black/70 p-3 hexagon-xl'>

            <div className='flex flex-col gap-y-5 flex flex-col items-center text-center w-[95%] mx-auto p-3'>
              <h1 className="font-baybayin text-white/30 text-xl md:text-3xl lg:text-4xl tracking-widest">Ang Portal ng Ahensya</h1>
              <h1 className="uppercase font-techno text-xl md:text-4xl">Welcome to the Agency Portal</h1>
          
              <p className='tracking-wider md:text-justify'>
                The contents of this portal are confidential, privileged and intended only for the person(s) to which it is entrusted by the Agency. Any review, retransmission, dissemination or other use of this material is strictly prohibited and punishable to varying degrees. By continuing to access the portal, you are subject to the Agency by-laws and applicable penalties.
              </p>
              <div className="hexagon-btn bg-pink-900/50 hover:bg-pink-900 hover:shadow-all hover:shadow-pink-500 duration-100 px-3 py-1 font-techno">
                <div onClick={() => handleAgree()}>Agree & Continue</div>
              </div>
              <div className="hexagon-btn bg-violet-900/50 hover:bg-violet-900 hover:shadow-all hover:shadow-violet-500 duration-100 px-3 py-1 font-techno">
                <NavLink to="/locked" onClick={() => bleeps.click?.play()}>Enter as Admin</NavLink>
              </div>
              <p className={`${JSON.stringify(userInfo) !== "{}" ? 'text-xs' : 'hidden'}`}>You are currently signed in as {JSON.stringify(userInfo)}</p>
            </div>        
            </div>
          </div>

        </div>

      ) : (
        <>
        <div className="pb-20">
          <h1 className="font-baybayin text-white/30 text-xl md:text-3xl lg:text-4xl tracking-widest text-center">Piliin ang Destinasyon</h1>
          <h1 className="uppercase font-techno text-xl md:text-4xl text-center">Select Your Destination</h1>
        </div>

          <div className='grid grid-cols-2 w-max mx-auto gap-4 rotate-45'>
            <div className="min-w-28 w-max aspect-square border hover:shadow-all hover:shadow-pink-500/50 hover:border-pink-900/50">
              <div className='-rotate-45 pt-8 pl-3 uppercase font-mono text-xl'>
                <NavLink to="/city" onClick={() => bleeps.click?.play()}>City</NavLink>
              </div>
            </div>
            <div className="min-w-28 w-max aspect-square border hover:shadow-all hover:shadow-pink-500/50 hover:border-pink-900/50">
              <div className='-rotate-45 pt-8 pl-2 uppercase font-mono text-xl'>
                <NavLink to="/people" onClick={() => bleeps.click?.play()}>People</NavLink>
              </div>
            </div>
            <div className="min-w-28 w-max aspect-square border hover:shadow-all hover:shadow-pink-500/50 hover:border-pink-900/50">
              <div className='-rotate-45 pt-8 pl-3 uppercase font-mono text-xl'>
                <NavLink to="/news" onClick={() => bleeps.click?.play()}>News</NavLink>
              </div>
            </div>
            <div className="min-w-28 w-max aspect-square border hover:shadow-all hover:shadow-pink-500/50 hover:border-pink-900/50">
              <div className='-rotate-45 pt-8 pl-2 uppercase font-mono text-xl'>
                <NavLink to="/locked" onClick={() => bleeps.click?.play()}>Login</NavLink>
              </div>
            </div>
          </div>

        </>
      )}

    </div>
  )
}

export default App
