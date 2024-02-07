import React, { useContext, useState } from 'react'
import { Navigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext'

const server = import.meta.env.VITE_SERVER

const NewElement = () => {

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const { userInfo } = useContext(UserContext);

  const createNewElement = async (event) => {
    event.preventDefault();

    const data = {
      'title': title,
      'summary': summary,
      'content': content,
      'cover': coverUrl
    }

    try {
      const response = await fetch(`${server}/new-element`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        alert('Element created!');
        return <Navigate to="/city" />
      } else {
        alert('There was an error creating the element.')
      }
      console.log(response);
      
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
        ■ Create New World-building Element ■
      </h1>

      <form className='flex flex-col gap-4 py-6 px-8' onSubmit={createNewElement}>
        <input
          required
          type='text'
          name='title'
          placeholder='Name of this Element'
          maxLength='60'
          className='border bg-transparent p-2 focus:bg-black/50 focus:text-white'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          required
          type="text"
          name='summary'
          placeholder='A summary of this element'
          maxLength='280'
          className='border bg-transparent p-2 focus:bg-black/50 focus:text-white'
          value={summary}
          onChange={event => setSummary(event.target.value)}
        />

        <input
          type="text"
          name='coverUrl'
          className='border bg-transparent p-2 focus:bg-black/50 focus:text-white'
          placeholder='Paste URL of the cover image'
          value={coverUrl}
          onChange={event => setCoverUrl(event.target.value)}
        />

        <textarea 
          name="content"  
          cols="30"
          rows="8"
          className='border bg-transparent p-2 focus:bg-black/50 focus:text-white'
          placeholder='Everything about this element!'
          value={content}
          onChange={event => setContent(event.target.value)}
        />

        <button type="submit" className='self-end border border-purple-500 hover:border-sky-500 bg-purple-500/30 hover:bg-sky-500/30 px-6 duration-300 py-2 font-mono'>
          Create New Element 
        </button>



      </form>
    </div>
  )
}

export default NewElement