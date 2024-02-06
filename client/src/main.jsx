import { useEffect, useState } from "react";
import { UserContextProvider } from './context/UserContext.jsx';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import App from './App.jsx'
import './index.css'
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
import { BleepsProvider } from "@arwes/react-bleeps";


const Layout = () => {
  const [bgImage, setBgImage] = useState('https://images.pexels.com/photos/1202849/pexels-photo-1202849.jpeg')

  const location = useLocation().pathname;

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
      <UserContextProvider>
      <BleepsProvider {...bleepsSettings}>

      <main className='h-full bg-black/50 backdrop-blur-sm p-6 overflow-y-auto box-border'>
        <Nav />
        <Outlet/>
      </main>
      {/* <Footer/> */}
      </BleepsProvider>
      </UserContextProvider>
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
