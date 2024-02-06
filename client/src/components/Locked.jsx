import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom';

const Locked = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUserInfo, userInfo } = useContext(UserContext);

  const login = async (event) => {
    event.preventDefault();

    const response = await fetch('https://makolta-server.vercel.app/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });

    if (response.status === 200) {
      alert('Successfully logged in');
      response.json().then(user => {
        console.log(user);
        setUserInfo(user);
      })
    } else {
      alert('Please try again');
    }
  }

  return (
    <div className='flex flex-col w-max mx-auto place-content-center place-items-center h-max mt-12'>
      <p className='text-3xl font-mono text-center'>{JSON.stringify(userInfo) !== '{}' ? `Currently signed in as ${userInfo}` : 'Sign in to continue'}</p>

      {JSON.stringify(userInfo) !== '{}' && (
        <div className='flex flex-row gap-2 text-center my-8'>
          <Link to="/new-element" className='border border-sky-500 hover:border-purple-500 bg-sky-500/30 hover:bg-purple-500/30 px-6 duration-300 py-2 font-mono'>
            Add New Element
          </Link>
          <Link to="/new-character" className='border border-sky-500 hover:border-purple-500 bg-sky-500/30 hover:bg-purple-500/30 px-6 duration-300 py-2 font-mono'>
            Add New Character
          </Link>
          <Link to="/new-update" className='border border-sky-500 hover:border-purple-500 bg-sky-500/30 hover:bg-purple-500/30 px-6 duration-300 py-2 font-mono'>
            Add New Update
          </Link>

        </div>

      )}

      <form className='flex flex-col p-5 gap-5 w-96' onSubmit={login}>
        <input type="text" name="username" placeholder='username' className='text-center font-mono bg-transparent border p-2'
        value={username}
        onChange={event => setUsername(event.target.value)}
        />
        <input type="password" name="password" placeholder='password' className='text-center font-mono bg-transparent border p-2'
        value={password}
        onChange={event => setPassword(event.target.value)}
        />
        <button type="submit" className='border border-purple-500 hover:border-sky-500 bg-purple-500/30 hover:bg-sky-500/30 px-6 duration-300 py-2 font-mono'>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default Locked