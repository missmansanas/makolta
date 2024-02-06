import { useEffect, useState } from "react";
import { UserContextProvider } from './context/UserContext.jsx';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import { BleepsProvider } from "@arwes/react-bleeps";
import App from './App.jsx'
import './index.css'
import useMediaQuery from './hooks/useMediaQuery.jsx'
import Nav from './components/Nav.jsx';
import City from './components/City.jsx';
import People from './components/People.jsx';
import News from './components/News.jsx';
import NewElement from './components/editors/NewElement.jsx';
import EditElement from './components/editors/EditElement.jsx';
import Locked from './components/Locked.jsx';
import NewCharacter from './components/editors/NewCharacter.jsx';
import EditCharacter from './components/editors/EditCharacter.jsx';
import NewUpdate from './components/editors/NewUpdate.jsx';


const Layout = () => {
  const [bgImage, setBgImage] = useState('https://images.pexels.com/photos/1202849/pexels-photo-1202849.jpeg')

  const location = useLocation().pathname;

  const isDesktop = useMediaQuery('(min-width: 960px)');

  const bleepsSettings = {
    master: {
      volume: 0.3
    },
    bleeps: {
      intro: {
        sources: [
          { src: 'https://arwes.dev/assets/sounds/intro.mp3', type: 'audio/mpeg' }
        ]
      },
      click: {
        sources: [
          { src: 'https://arwes.dev/assets/sounds/click.mp3', type: 'audio/mpeg' }
        ]
      }
    }
  }

  useEffect(() => {
     if (location === '/city') {
      setBgImage('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg');
    } else if (location === '/people') {
      setBgImage('https://images.pexels.com/photos/8108362/pexels-photo-8108362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
    } else {
      setBgImage('https://images.pexels.com/photos/1202849/pexels-photo-1202849.jpeg');
    }
  }, [location])

  return (
    <div className='h-screen bg-black text-white selection:bg-violet-300/50'
      style={{
        backgroundImage: 'url(' + bgImage + ')',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        transitionDuration: '300ms'
      }}>
      {isDesktop ? (
        <UserContextProvider>
        <BleepsProvider {...bleepsSettings}>

        <main className='h-full bg-black/50 backdrop-blur-sm p-6 overflow-y-auto box-border'>
          <Nav />
          <Outlet/>
        </main>
        {/* <Footer/> */}
        </BleepsProvider>
        </UserContextProvider>
      ) : (
        <main className='h-full bg-black/50 backdrop-blur-md flex flex-col place-content-center p-8'>
          <div className="w-8 h-8 rotate-45 border"></div>
          <div className="w-8 h-8 rotate-45 border"></div>
          <div className="w-8 h-8 rotate-45 border"></div>
          <div className='border font-mono text-xl md:text-3xl mx-auto p-8 md:p-12 flex flex-col gap-5'>
          <p>
            Dearest Makoltazen,
          </p>
          <p>
            The Makolta Web Portal is not optimized for mobile and tablet devices at this time. Please view from a desktop to enjoy Makoltaverse.
          </p>
          <p>
            We're sorry for the inconvenience!
          </p>
          <p>
            Signed, Makolta City-State Gov
          </p>
          </div>

          <div className="w-8 h-8 rotate-45 border self-end"></div>
          <div className="w-8 h-8 rotate-45 border self-end"></div>
          <div className="w-8 h-8 rotate-45 border self-end"></div>
        </main>
      )}
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: 'city',
        element: <City />
      },
      {
        path: 'people',
        element: <People />
      },
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'new-element',
        element: <NewElement />
      },
      {
        path: 'edit-element/:id',
        element: <EditElement />
      },
      {
        path: 'new-character',
        element: <NewCharacter />
      },
      {
        path: 'edit-character/:id',
        element: <EditCharacter />
      },
      {
        path: 'new-update',
        element: <NewUpdate/>
      },
      {
        path: 'locked',
        element: <Locked />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
