import { UserContext } from './context/UserContext'
import { useContext } from 'react'

function App() {
  const { userInfo } = useContext(UserContext);

  return (
    <div className='grid grid-cols-2 gap-12 justify-center items-center h-[calc(100vh-98px)] box-border'>

      <div className='pl-12 flex flex-col gap-y-3'>
        <h1 className="uppercase font-mono">
          <div className='text-2xl font-light'>Welcome to The Web Portal of the </div>
          <div className='text-4xl font-bold'>Superstate of Makolta</div>
        </h1>
    
        <p className='font-light tracking-wider'>
          Makoltaverse (working name) is a fictional literary universe, set mainly in the satirical, post-cyberpunk city of Makolta. The project will encompass several different stories in varying lengths, character casts, formats, tones and more.
        </p>
        <p className='font-light tracking-wide'>
          The first few stories are under development, but you can start exploring the universe today. {JSON.stringify(userInfo) !== "{}" && console.log(userInfo) + `You are currently signed in as ${userInfo}.`}
        </p>


      </div>

      <div className='flex flex-col items-center gap-6 uppercase font-mono'>
        <div className='w-28 h-28 border rotate-45 flex place-content-center place-items-center overflow-hidden hover:bg-white/30'>
          <h1 className='-rotate-45'>Urban</h1>
        </div>
        <div className='flex flex-row gap-6'>

          <div className='w-28 h-28 border rotate-45 flex place-content-center place-items-center overflow-hidden hover:bg-white/30'>
            <h1 className='-rotate-45'>Magic</h1>
          </div>
          <div className='w-28 h-28 border rotate-45 flex place-content-center place-items-center overflow-hidden hover:bg-white/30'>
            <h1 className='-rotate-45'>Technology</h1>
          </div>
          <div className='w-28 h-28 border rotate-45 flex place-content-center place-items-center overflow-hidden hover:bg-white/30'>
            <h1 className='-rotate-45'>Relationships</h1>
          </div>

        </div>
        <div className='w-28 h-28 border rotate-45 flex place-content-center place-items-center overflow-hidden hover:bg-white/30'>
          <h1 className='-rotate-45'>Futuristic</h1>
        </div>

      </div>

    </div>
  )
}

export default App
