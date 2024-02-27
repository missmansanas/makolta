import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard';
import { Edit2 } from "react-feather";

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
    <div className='py-8 grid lg:grid-cols-7 gap-12'>
      <div className='lg:col-span-2'>
        <h1 className='border-b font-techno pb-1 tracking-wider text-2xl'>Highlights</h1>
        <p className='tracking-wide font-mono py-3 flex gap-2 items-center'><Edit2 size={20}/> Project Stardust Draft 2 ongoing! </p>
      </div>
      <div className="flex flex-col lg:col-span-3 gap-5 h-max box-border overflow-y-auto lg:px-3">
        <h1 className='border-b font-techno pb-1 tracking-wider text-2xl'>Status Updates</h1>
          {posts.length > 0 ? (
            posts.map(post => (
              <NewsCard
                title={post.title}
                content={post.content}
                timestamp={new Date(post.createdAt).toDateString()}
                key={post.createdAt}
              />
            ))
          ) : (
            'Waiting for status updates...'
          )}

      </div>
      <div className="lg:col-span-2">
        <h1 className='border-b font-techno pb-1 tracking-wider text-2xl'>Extras</h1>
          <p className='tracking-wide font-mono py-3'>Listen to a Makoltaverse-inspired playlist on Spotify!</p>
          <iframe style={{"borderRadius": "12px", "height": "152px", "width": "100%"}} src="https://open.spotify.com/embed/playlist/0z4JDNyptstDVCpbWrHiy6?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>

    </div>

  )
}
