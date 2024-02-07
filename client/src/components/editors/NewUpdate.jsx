import { useContext, useState } from 'react'
import { Navigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext'

const server = import.meta.env.VITE_SERVER

const NewUpdate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { userInfo } = useContext(UserContext);

  const createNewUpdate = async (event) => {
    event.preventDefault();

    const data = {
      'title': title,
      'content': content,
    }

    try {
      const response = await fetch(`${server}/new-update`, {
        method: 'POSt',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        alert('Update posted!');
        return <Navigate to="/updates" />
      } else {
        alert('There was a problem posting.');
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (JSON.stringify(userInfo) === "{}") {
    return <Navigate to='/locked' />
  }

  return (
    <div className='mt-6 border bg-white/10 backdrop-blur-md'>
      <h1 className='border-b font-mono p-3 text-xl'>
        ■ Post New Status Update ■
      </h1>

      <form className='flex flex-col gap-4 py-6 px-8' onSubmit={createNewUpdate}>
        <input
          required
          type='text'
          name='title'
          placeholder='Main status update'
          maxLength='60'
          className='border bg-transparent p-2 focus:bg-black/50 focus:text-white'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <textarea 
          name="content"  
          cols="30"
          rows="8"
          className='border bg-transparent p-2 focus:bg-black/50 focus:text-white'
          placeholder='More info about this update (optional)'
          value={content}
          onChange={event => setContent(event.target.value)}
        />
        <button type="submit" className='self-end border border-purple-500 hover:border-sky-500 bg-purple-500/30 hover:bg-sky-500/30 px-6 duration-300 py-2 font-mono'>
          Post Update 
        </button>
      </form>
    </div>
  )
}

export default NewUpdate