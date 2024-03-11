import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

const server = import.meta.env.VITE_SERVER

const Locked = () => {
  const SlideTransition = (props) => {
    return <Slide {...props} direction="down" />;
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [toast, setToast] = useState({
    open: false,
    message: '',
    severity: '',
    Transition: SlideTransition,
  });
  const { open, message, severity } = toast;

  const login = async (event) => {
    event.preventDefault();

    const response = await fetch(`${server}/login`, {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });

    if (response.status === 200) {
      setToast({...toast, open: true, message: 'Successfully logged in', severity: 'success'});
      response.json().then(user => {
        console.log(user);
        setUserInfo(user);
      })
    } else {
      setToast({...toast, open: true, message: 'Incorrect credentials', severity: 'error'});
    }
  }

  const handleClose = () => {
    setToast({...toast, open: false});
  };

  return (
    <>
    <Nav/>
    <Snackbar
        anchorOrigin={{vertical: "top", horizontal: "center"}}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        TransitionComponent={toast.Transition}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          sx={{ width: '100%' }}
          
        >
          {message}
        </Alert>
      </Snackbar>
    <div className='flex flex-col mx-auto place-content-center place-items-center h-max mt-12'>
      <div className="flex flex-col justify-center gap-8 box-border md:w-[700px] place-content-center items-center mx-auto h-max mt-12">
        <div className="bg-pink-900/50 p-0.5 shadow-all shadow-pink-500/20">
          <div className='bg-black/70 p-3 hexagon-xl'>
          <div className='flex flex-col gap-y-5 flex flex-col items-center text-center w-[95%] mx-auto p-3'>

          {JSON.stringify(userInfo) === '{}' ? (
            <>
        
            <p className='text-3xl font-techno text-center'>Authorization Required</p>
            <p className='text-xl'>You are attempting to access a restricted section. Please sign in to verify your security clearance level.</p>
          
            <form className='flex flex-col p-5 gap-5 md:w-96' onSubmit={login}>
              <input type="text" name="username" placeholder='username' className='text-center font-mono bg-transparent border p-2'
              value={username}
              onChange={event => setUsername(event.target.value)}
              />
              <input type="password" name="password" placeholder='password' className='text-center font-mono bg-transparent border p-2'
              value={password}
              onChange={event => setPassword(event.target.value)}
              />
              <button type="submit" className='hexagon-btn hover:border-sky-500 bg-violet-500/30 hover:bg-sky-500/30 px-6 duration-300 py-2 font-techno'>
                Sign In
              </button>
            </form>
            </>
          ) : (
          <>
          
          <p className='text-3xl font-techno text-center'>Currently signed in as {JSON.stringify(userInfo)}</p>
            <p className='text-xl'>Keep exploring, or update the database below.</p>

            <p className='text-3xl font-mono text-center'></p>

            <div className='grid md:grid-cols-2 gap-2 text-center'>
              <Link to="/new-element" className='hexagon-btn bg-sky-900/50 hover:bg-cyan-900 duration-100 px-3 py-1 font-mono flex flex-col justify-center'>
                Add New Element
              </Link>
              <Link to="/new-character" className='hexagon-btn bg-sky-900/50 hover:bg-cyan-900 duration-100 px-3 py-1 font-mono flex flex-col justify-center'>
                Add New Character
              </Link>
              <Link to="/new-update" className='hexagon-btn bg-sky-900/50 hover:bg-cyan-900 duration-100 px-3 py-1 font-mono flex flex-col justify-center'>
                Add New Update
              </Link>

            </div>
      </>
      )
    }
    </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Locked