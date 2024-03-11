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
    <Nav/>
    <div className='flex flex-col lg:flex-row gap-8 my-12'>

      <div className='box-border h-max p-8 lg:p-12 gap-y-8 md:gap-0 border flex 
      flex-row overflow-x-auto
      lg:flex-col lg:overflow-x-hidden lg:overflow-y-auto '>
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
        <div className={`flex flex-col lg:w-3/4 border h-max ${!activeIndex && 'hidden'} duration-300`}>
          <h1 className='text-3xl px-6 py-3 border-b font-techno tracking-widest'>{getName(activeIndex)} {editButton(activeIndex)}</h1>
          <div className='p-6 overflow-y-auto box-border max-h-[calc(100vh-250px)]'>
            <p className='italic text-xl pb-6 tracking-wider font-light'>{getSummary(activeIndex)}</p>
            <img src={getAvatar(activeIndex)} className='w-36 h-36 md:w-52 md:h-52 lg:w-96 lg:h-96 aspect-square object-cover rounded-full float-right border-b border-r p-2 lg:ml-6' />
            <p className='text-xl tracking-wide whitespace-pre-line'>{getContent(activeIndex)}</p>
          </div>

        </div>


    </div>
    </>
  )
}
