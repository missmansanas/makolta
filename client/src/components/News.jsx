import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard';
import { useBleeps } from "@arwes/react-bleeps";

const server = import.meta.env.VITE_SERVER

export default function News() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const bleeps = useBleeps();

  useEffect(async () => {
    setLoading(true);
    await fetch(`${server}/updates`)
      .then(response => {
        response.json()
          .then(updates => {
            setPosts(updates);
          })
      });
      setLoading(false);
  }, [])


  return (
    <div className='py-8 grid grid-cols-5 gap-5'>
      <div className=''>
        <h1 className='border-b font-mono uppercase tracking-wider'>Highlights</h1>
      </div>
      <div className="flex flex-col col-span-3 gap-5 h-[calc(100vh-200px)] box-border overflow-y-auto px-3">
        <h1 className='border-b font-mono uppercase tracking-wider'>Status Updates</h1>
          {loading && `Loading... ${bleeps.intro?.play()}`}
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
            'No status updates found!'
          )}

      </div>
      <div className="">
        <h1 className='border-b font-mono uppercase tracking-wider'>Extras</h1>
      </div>

    </div>

  )
}
