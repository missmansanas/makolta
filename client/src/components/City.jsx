import React, { useContext, useEffect, useState } from 'react'
import ElementCard from './ElementCard'
import { UserContext } from '../context/UserContext'
import { Link } from "react-router-dom";

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
    {loading && (
      <div className='border-y py-3 w-full text-center my-16'>
        <h1 className='font-techno text-3xl'>
          Loading...
        </h1>
        <h1 className='font-baybayin text-xl tracking-widest'>
          Abangan
        </h1>
      </div>
    )}

    <div className='flex flex-col lg:flex-row gap-8 my-12'>

      <div className='box-border h-max p-8 lg:p-12 gap-y-8 md:gap-0 border flex 
      flex-row overflow-x-auto
      lg:flex-col lg:overflow-x-hidden lg:overflow-y-auto '>
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
        <div className={`flex flex-col lg:w-3/4 border h-max ${!activeIndex && 'hidden'} duration-300`}>
          <h1 className='text-3xl border-b py-3 px-6 font-techno break-word tracking-widest'>{getTitle(activeIndex)} {editButton(activeIndex)}</h1>
          <div className='p-6 overflow-y-auto max-h-[calc(100vh-250px)] box-border'>
            <p className='italic text-xl pb-6 tracking-wider font-light'>{getSummary(activeIndex)}</p>
            <p className='text-xl tracking-wide whitespace-pre-line'>{getContent(activeIndex)}</p>
          </div>

        </div>
      </div>
      </>

  )
}
