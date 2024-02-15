import React, { useContext, useState, useEffect } from 'react'
import { Navigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext'
import { useParams } from "react-router-dom";

const server = import.meta.env.VITE_SERVER

const EditCharacter = () => {
  const { id } = useParams();
  const [alias, setAlias] = useState('');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch(`${server}/character/${id}`)
      .then(response => response.json()
      .then(charInfo => {
        setAlias(charInfo.alias);
        setName(charInfo.name);
        setAvatar(charInfo.avatar);
        setSummary(charInfo.summary);
        setContent(charInfo.content);
      }))
  }, [])

  const updateCharacter = async (event) => {
    event.preventDefault();
    const data = {
      'id': id,
      'alias': alias,
      'name': name,
      'avatar': avatar,
      'summary': summary,
      'content': content
    }
  
    try {
      const response = await fetch(`${server}/edit-character`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        alert('Character updated!');
        return <Navigate to='/people'/>
      } else {
        alert('There was a problem updating this character.')
      }
    } catch (error) {
      console.log(error);
    }

  }

  if (JSON.stringify(userInfo) === "{}") {
    return <Navigate to='/locked' />
  }

  return (
    <div className='mt-6 border bg-white/10 backdrop-blur-md'>
      <h1 className='border-b font-mono p-3 text-xl'>
        ■ Update This Character ■
      </h1>

      <form className='flex flex-col gap-4 py-6 px-8' onSubmit={updateCharacter}>
        <input
          required
          type='text'
          name='alias'
          placeholder='Alias of this character'
          maxLength='10'
          className='border bg-transparent p-2 focus:bg-black/50 focus:text-white'
          value={alias}
          onChange={event => setAlias(event.target.value)}
        />

        <input
          required
          type='text'
          name='name'
          placeholder='Name of this character'
          maxLength='20'
          className='border bg-transparent p-2 focus:bg-black/50 focus:text-white'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input 
          required
          type="text"
          name='summary'
          placeholder='A summary of this character'
          maxLength='280'
          className='border bg-transparent p-2 focus:bg-black/50 focus:text-white'
          value={summary}
          onChange={event => setSummary(event.target.value)}
        />

        <input
          type="text"
          name='avatar'
          className='border bg-transparent p-2 focus:bg-black/50 focus:text-white'
          placeholder='Paste URL of the avatar'
          value={avatar}
          onChange={event => setAvatar(event.target.value)}
        />

        <textarea 
          name="content"  
          cols="30"
          rows="8"
          className='border bg-transparent p-2 focus:bg-black/50 focus:text-white'
          placeholder='Everything about this character!'
          value={content}
          onChange={event => setContent(event.target.value)}
        />

        <button type="submit" className='self-end border border-purple-500 hover:border-sky-500 bg-purple-500/30 hover:bg-sky-500/30 px-6 duration-300 py-2 font-mono'>
          Update This Character 
        </button>



      </form>
    </div>
  )
}

export default EditCharacter