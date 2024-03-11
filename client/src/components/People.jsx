import React, { useContext, useState, useEffect } from 'react'
import CharacterCard from './CharacterCard';
import { UserContext } from '../context/UserContext'
import { Link } from "react-router-dom";
import Nav from './Nav';

const server = import.meta.env.VITE_SERVER

export default function People() {
  const [posts, setPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await fetch(`${server}/characters`);
      const data = await response.json()
      setPosts(data);
      if (data) {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const getName = (id) => {
    if (id) {
      const activeElement = posts.find(el => {
        return el._id === id;
      })
  
      return `${activeElement.name ? activeElement.name : 'Real name unknown'} (alias ${activeElement.alias})`;
    } else {
      return;
    }
  }

  const getSummary = (id) => {
    if (id) {
      const activeElement = posts.find(el => {
        return el._id === id;
      })
  
      return activeElement.summary;
    } else {
      return;
    }
  }

  const getContent = (id) => {
    if (id) {
      const activeElement = posts.find(el => {
        return el._id === id;
      })
  
      return activeElement.content;
    } else {
      return;
    }
  }

  const editButton = (id) => {
    if (JSON.stringify(userInfo) !== "{}") {
      return <Link to={`/edit-character/${id}`} className='text-sm tracking-normal uppercase'>[Edit]</Link>
    }
  }

  const getAvatar = (id) => {
    if (id) {
      const activeElement = posts.find(el => {
        return el._id === id;
      })
  
      return `${activeElement.avatar ? activeElement.avatar : 'https://raw.githubusercontent.com/Mikescher/CS_GO_Avatars/master/question%20mark.png'}`;
    } else {
      return;
    }
  }

  return (
    <>
    <Nav/>
    <div className='flex flex-col gap-8 my-12'>

    <div className="pl-4 relative">
      <div className="w-full h-1/2 border-b border-l-4 border-blue-500/50 absolute bottom-0 left-0"></div>
      <h1 className="uppercase font-techno text-xl">Characters</h1>
    </div>

    {loading ? (
      <div className='border-b py-3 w-full text-center my-16'>
        <h1 className='font-techno text-3xl'>
          Please wait
        </h1>
        <h1 className='font-baybayin text-xl tracking-widest'>
          Abangan
        </h1>
      </div>
    ) : (
      <>
        <div className='box-border h-max gap-8 flex flex-row overflow-x-auto sticky top-[0.1%]'>
          {posts.length > 0 && posts.map(post => (
              <CharacterCard
                avatar={post.avatar ? post.avatar : 'https://raw.githubusercontent.com/Mikescher/CS_GO_Avatars/master/question%20mark.png'}
                alias={post.alias}
                name={post.name}
                key={post.alias}
                index={post._id}
                isActive={activeIndex === post._id}
                setActiveIndex={setActiveIndex}
              />
            ))}


          </div>
          <div className="p-0.5 bg-blue-900/30 shadow-all shadow-pink-500/20 lg:w-3/4 lg:mx-auto">

          <div className={`hexagon-xl px-6 bg-black/70 border border-white/50 h-max ${!activeIndex && 'hidden'} duration-300`}>

          <div className='relative w-full'>
              <div className="w-full h-1/2 border-b border-l-4 border-blue-500/50 absolute bottom-0 left-0"></div>
            <h1 className='text-2xl px-6 bo py-3 font-techno'>{getName(activeIndex)} {editButton(activeIndex)}</h1>
          </div>

            <div className='p-6 overflow-y-auto box-border max-h-[calc(100vh-400px)]'>
              <p className='italic bg-blue-400/10 font-mono text-xl p-6 tracking-wider'>{getSummary(activeIndex)}</p>
              <img src={getAvatar(activeIndex)} className='w-36 h-36 md:w-1/3 md:h-1/3 aspect-square object-cover rounded-full float-right border-b-2 border-blue-500/50 p-4 ml-3 -mr-4' />
              <p className='text-xl tracking-wide whitespace-pre-line pt-6 pb-12'>{getContent(activeIndex)}</p>
            </div>

          </div>
          </div>

      </>
    )}


    </div>
    </>
  )
}
