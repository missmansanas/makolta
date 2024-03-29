import React, { useContext, useEffect, useState } from 'react'
import ElementCard from './ElementCard'
import { UserContext } from '../context/UserContext'
import { Link } from "react-router-dom";
import Nav from './Nav';

const server = import.meta.env.VITE_SERVER

export default function City() {
  const [posts, setPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await fetch(`${server}/elements`);
      const data = await response.json()
      setPosts(data);
      if (data) {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const getTitle = (id) => {
    if (id) {
      const activeElement = posts.find(el => {
        return el._id === id;
      })
  
      return activeElement.title;
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
      return <Link to={`/edit-element/${id}`} className='text-sm tracking-normal uppercase'>[Edit]</Link>
    }
  }

  return (
    <>
    <Nav/>
    <div className='flex flex-col gap-8 my-12'>
    <div className="pl-4 relative">
      <div className="w-full h-1/2 border-b border-l-4 border-blue-500/50 absolute bottom-0 left-0"></div>
      <h1 className="uppercase font-techno text-xl">World-building Elements</h1>
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
        <div className='box-border h-max gap-4 flex flex-row overflow-x-auto'>
          {posts.length > 0 && posts.map(post => (
            <ElementCard
              bgImage={post.cover}
              title={post.title}
              key={post.title}
              index={post._id}
              isActive={activeIndex === post._id}
              setActiveIndex={setActiveIndex}
            />
          ))}

          </div>
          <div className="p-0.5 bg-blue-900/30 shadow-all shadow-pink-500/20 lg:w-3/4 lg:mx-auto sticky top-[8px]">

          <div className={`hexagon-xl px-6 bg-white/10 border border-white/50 h-max ${!activeIndex && 'hidden'} duration-300`}>

            <div className='relative w-full'>
              <div className="w-full h-1/2 border-b border-l-4 border-blue-500/50 absolute bottom-0 left-0"></div>
              <h1 className='text-2xl border-b py-3 px-6 font-techno break-word'>{getTitle(activeIndex)} {editButton(activeIndex)} in Makolta</h1>
            </div>

            <div className='p-6 pb-12 overflow-y-auto max-h-[calc(100vh-400px)] box-border flex flex-col gap-6'>
              <p className='italic bg-blue-400/10 font-mono text-xl p-6 tracking-wider'>{getSummary(activeIndex)}</p>
              <p className='text-xl tracking-wide whitespace-pre-line'>{getContent(activeIndex)}</p>
            </div>

          </div>
          </div>
      </>      
    )}
      </div>
      </>

  )
}
