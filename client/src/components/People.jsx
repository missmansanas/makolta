import React, { useContext, useState, useEffect } from 'react'
import CharacterCard from './CharacterCard';
import { UserContext } from '../context/UserContext'
import { Link } from "react-router-dom";

export default function People() {
  const [posts, setPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4000/characters')
      .then(response => {
        response.json()
          .then(characters => {
            setPosts(characters);
          })
      })
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

  // const getAvatar = (id) => {
  //   if (id) {
  //     const activeElement = posts.find(el => {
  //       return el._id === id;
  //     })
  
  //     return `${activeElement.avatar ? activeElement.avatar : 'https://raw.githubusercontent.com/Mikescher/CS_GO_Avatars/master/question%20mark.png'}`;
  //   } else {
  //     return;
  //   }
  // }

  return (
    <div className='flex flex-row gap-8'>
      <div className='p-8 overflow-y-auto box-border h-[calc(100vh-100px)] w-1/3 flex flex-col items-center'>
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

          {/* <CharacterCard
          name="Philo"
          alias="Alias"
          avatar='https://raw.githubusercontent.com/Mikescher/CS_GO_Avatars/master/question%20mark.png'
        />

          <CharacterCard
          name="Philo"
          alias="Alias"
          avatar='https://raw.githubusercontent.com/Mikescher/CS_GO_Avatars/master/question%20mark.png'
        />

          <CharacterCard
          name="Philo"
          alias="Alias"
          avatar='https://raw.githubusercontent.com/Mikescher/CS_GO_Avatars/master/question%20mark.png'
        /> */}

        </div>
        <div className={`flex flex-col w-2/3 mt-12 border min-h-96 ${!activeIndex && 'hidden'} duration-300`}>
          <h1 className='text-3xl px-6 py-3 border-b font-mono tracking-widest'>{getName(activeIndex)} {editButton(activeIndex)}</h1>
          <div className='overflow-y-auto px-6 box-border max-h-[calc(100vh-250px)]'>
            <p className='italic py-6 tracking-wider font-light'>{getSummary(activeIndex)}</p>
            <p className=''>{getContent(activeIndex)}</p>
          </div>

        </div>


    </div>

  )
}
