import { useEffect, useState } from "react";
import { UserContextProvider } from './context/UserContext.jsx';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import { BleepsProvider } from "@arwes/react-bleeps";
import App from './App.jsx'
import './index.css'
import City from './components/City.jsx';
import People from './components/People.jsx';
import News from './components/News.jsx';
import NewElement from './components/editors/NewElement.jsx';
import EditElement from './components/editors/EditElement.jsx';
import Locked from './components/Locked.jsx';
import NewCharacter from './components/editors/NewCharacter.jsx';
import EditCharacter from './components/editors/EditCharacter.jsx';
import NewUpdate from './components/editors/NewUpdate.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';


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
      setBgImage('https://images.unsplash.com/photo-1562263588-35193ae8ecbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    } else if (location === '/people') {
      setBgImage('https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
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
        backgroundPositionY: '50%',
        transitionDuration: '300ms'
      }}>

        <UserContextProvider>
        <BleepsProvider {...bleepsSettings}>

        <main
          className='h-full bg-black/50 bg-grid backdrop-blur-sm p-6 overflow-y-auto box-border'>
          <Outlet/>
        </main>
        </BleepsProvider>
        </UserContextProvider>

      
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorBoundary/>,
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
