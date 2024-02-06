import React, { useContext, useEffect, useState } from 'react'
import HomepageCard from './HomepageCard'
import { UserContext } from '../context/UserContext'
import { Link } from "react-router-dom";

export default function City() {
  const [posts, setPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('https://makolta-server.vercel.app/elements')
      .then(response => {
        response.json()
          .then(elements => {
            setPosts(elements);
          })
      })
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
    <div className='flex flex-row gap-8'>
      <div className='p-8 overflow-y-auto h-[calc(100vh-100px)] w-1/3 flex flex-col items-center'>
        {posts.length > 0 && posts.map(post => (
          <HomepageCard
            bgImage={post.cover}
            title={post.title}
            key={post.title}
            index={post._id}
            isActive={activeIndex === post._id}
            setActiveIndex={setActiveIndex}
          />
        ))}

        </div>
        <div className={`flex flex-col w-2/3 mt-12 border min-h-96 ${!activeIndex && 'hidden'} duration-300`}>
          <h1 className='text-3xl border-b py-3 px-6 font-mono tracking-widest'>{getTitle(activeIndex)} {editButton(activeIndex)}</h1>
          <div className='px-6 overflow-y-auto max-h-[calc(100vh-250px)] box-border'>
            <p className='italic py-6 tracking-wider font-light'>{getSummary(activeIndex)}</p>
            <p className=''>{getContent(activeIndex)}</p>
          </div>

        </div>
      </div>

  )
}
