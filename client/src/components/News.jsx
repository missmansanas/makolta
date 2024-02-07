import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard';

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
    <div className='py-8 grid grid-cols-5 gap-5'>
      <div className=''>
        <h1 className='border-b font-mono uppercase tracking-wider'>Highlights</h1>
      </div>
      <div className="flex flex-col col-span-3 gap-5 h-[calc(100vh-200px)] box-border overflow-y-auto px-3">
        <h1 className='border-b font-mono uppercase tracking-wider'>Status Updates</h1>
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
      <div className="">
        <h1 className='border-b font-mono uppercase tracking-wider'>Extras</h1>
      </div>

    </div>

  )
}
