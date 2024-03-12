import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Nav from './Nav';

const server = import.meta.env.VITE_SERVER

export default function News() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${server}/updates`)
      .then(response => {
        response.json()
          .then(updates => {
            setPosts(updates);
          })
      });
  }, []);



  return (
    <>
    <Nav/>
    <div className='py-8 grid lg:grid-cols-2 gap-12 max-h-[calc(100vh-250px)]'>
      <div className="order-last lg:order-first h-max box-border">
        <div className='relative pl-4'>
          <div className="w-full h-1/2 border-b border-l-4 border-white/50 absolute bottom-0 left-0"></div>
          <h1 className='font-techno pb-1 tracking-wider text-2xl'>Status Updates</h1>
        </div>
        <div className='box-border h-max gap-4 flex flex-col py-3 gap-3 overflow-y-auto'>
          {posts.length > 0 ? (
            posts.map(post => (
              <NewsCard
                title={post.title}
                content={post.content}
                timestamp={new Date(post.createdAt).toLocaleDateString('en-us', {
                  month: 'short',
                  year: 'numeric',
                  day: '2-digit',
                  weekday: 'short',
                  })}
                key={post.createdAt}
              />
            ))
          ) : (
            'Waiting for status updates...'
          )}
        </div>

      </div>

      <div className='flex flex-col justify-between gap-8'>
        <div>
          <div className='relative pl-4'>
            <div className="w-full h-1/2 border-b border-l-4 border-white/50 absolute bottom-0 left-0"></div>
            <h1 className='font-techno tracking-wider text-2xl'>Highlights</h1>
          </div>
          <p className='tracking-wide font-mono py-3 flex gap-2 items-center'><EditOutlinedIcon/> Project Stardust Draft 2 ongoing! </p>
        </div>
        <div>
          <div className='relative pl-4'>
            <div className="w-full h-1/2 border-b border-l-4 border-white/50 absolute bottom-0 left-0"></div>
            <h1 className='font-techno tracking-wider text-2xl'>Extras</h1>
          </div>
            <p className='tracking-wide font-mono py-3'>Listen to a Makoltaverse-inspired playlist on Spotify!</p>
            <iframe style={{"borderRadius": "12px", "height": "152px", "width": "100%"}} src="https://open.spotify.com/embed/playlist/0z4JDNyptstDVCpbWrHiy6?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>

    </div>

    </>
  )
}
