import { UserContext } from './context/UserContext'
import { useContext } from 'react'
import { ChevronsDown, Code, Loader } from "react-feather";

function App() {
  const { userInfo } = useContext(UserContext);

  return (
    <div className='py-9 md:p-9 box-border flex flex-col gap-y-16'>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[90vh] gap-12 md:gap-24">
        <div className='flex flex-col gap-y-3 md:w-3/5 justify-center'>
          <h1 className="font-baybayin text-xl md:text-3xl lg:text-4xl tracking-widest">Munisipalidad ng Makolta</h1>
          <h1 className="uppercase font-techno text-3xl md:text-4xl">Municipality of Makolta</h1>
      
          <p className='font-light tracking-wider text-justify'>
            Makoltaverse is a fictional literary universe, set mainly in the satirical, post-cyberpunk city of Makolta. The project will encompass several different stories in varying lengths, character casts, formats, tones and more.
          </p>
          <p className='font-light tracking-wide text-justify'>
            The first few stories are under development, but you can start exploring the universe today. {JSON.stringify(userInfo) !== "{}" && console.log(userInfo) + `You are currently signed in as ${userInfo}.`}
          </p>
          <ChevronsDown size={60} strokeWidth={1} className='self-center mt-16'/>
        </div>
        <div className="flex md:flex-col items-center">
          <div className="w-8 md:w-20 w-8 md:h-20 aspect-square border rotate-45"></div>
          <div className="flex flex-col md:flex-row md:justify-center">
            <div className="w-8 md:w-20 w-8 md:h-20 aspect-square border rotate-45"></div>
            <div className="w-8 md:w-20 w-8 md:h-20 aspect-square border rotate-45"></div>
            <div className="w-8 md:w-20 w-8 md:h-20 aspect-square border rotate-45"></div>

          </div>
          <div className="w-8 md:w-20 w-8 md:h-20 aspect-square border rotate-45"></div>
        </div>
      </div>

      
      <div className='w-full flex flex-col gap-24'>

        {/* Genres */}
        <div className="flex flex-row flex-wrap md:flex-nowrap items-start md:justify-end gap-x-3">
          <div className="flex flex-row-reverse md:flex-row items-center gap-x-3">
            <h2 className='text-3xl font-baybayin text-nowrap tracking-widest text-white/50'>Mga Diyanra</h2>
            <div className="w-12 h-0 border border-white/50"></div>
          </div>

          <div className="flex flex-col gap-2 max-w-lg">
            <h2 className='text-4xl font-techno tracking-widest uppercase'>Genres</h2>
            <p className='text-xl tracking-wider font-light'>Makoltaverse is mainly urban fantasy in nature, with futuristic science-fiction worldbuilding, specifically post-cyberpunk technology. Some stories will also feature romantic subplots.</p>
          </div>

        </div>

        {/* Themes */}
        <div className="flex flex-row flex-wrap md:flex-nowrap items-start md:justify-end gap-x-3">
          <div className="flex flex-row-reverse md:flex-row items-center gap-x-3">
            <h2 className='text-3xl font-baybayin text-nowrap tracking-widest text-white/50'>Mga Tema</h2>
            <div className="w-12 h-0 border border-white/50"></div>
          </div>

          <div className="flex flex-col gap-2 max-w-lg">
            <h2 className='text-4xl font-techno tracking-widest uppercase'>Themes</h2>
            <p className='text-xl tracking-wider font-light'>The library of stories will explore relationships of all kinds: platonic, familial and romantic. Magic and technology, the two most heavily used elements, will be used as metaphors for disability, will and humanity.</p>
          </div>

        </div>

        {/* Tropes */}
        <div className="flex flex-row flex-wrap md:flex-nowrap items-start md:justify-end gap-x-3">
          <div className="flex flex-row-reverse md:flex-row items-center gap-x-3">
            <h2 className='text-3xl font-baybayin text-nowrap tracking-widest text-white/50'>Mga Tropa</h2>
            <div className="w-12 h-0 border border-white/50"></div>
          </div>

          <div className="flex flex-col gap-2 max-w-lg">
            <h2 className='text-4xl font-techno tracking-widest uppercase'>Tropes</h2>
            <p className='text-xl tracking-wider font-light'>You may find the following across all or most stories: gray morality, rule of cool, technology can be good/bad, corrupt executives, technobabble, technical magic, superheroes, and more</p>
          </div>

        </div>
      </div>


        
        {/* <div className='w-28 h-28 border rotate-45 flex place-content-center place-items-center overflow-hidden hover:bg-white/30'>
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
            <h1 className='-rotate-45'>Romance</h1>
          </div>

        </div>
        <div className='w-28 h-28 border rotate-45 flex place-content-center place-items-center overflow-hidden hover:bg-white/30'>
          <h1 className='-rotate-45'>Futuristic</h1>
        </div> */}

    </div>
  )
}

export default App
