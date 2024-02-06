import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col gap-4 p-8 bg-[#f5f5f599] text-[#111111]'>
      <h5>Footer Logo</h5>
      <p>Lorem ipsum dolor sit amet consectetur.</p>

      <div className='flex flex-row justify-between'>
        <div>
          <h5 className='uppercase'>Business Portal</h5>
          <ul className='flex flex-col gap-2 text-sm py-2'>
            <ol>Business permits and regulations</ol>
            <ol>Economic development programs</ol>
            <ol>Investment opportunities in Makolta</ol>
          </ul>
        </div>
        <div>
          <h5 className='uppercase'>Citizen's Hub</h5>
          <ul className='flex flex-col gap-2 py-2 text-sm'>
            <ol>Resident resources and guides</ol>
            <ol>Permits and licenses</ol>
            <ol>Community events and initiatives</ol>
          </ul>
        </div>
        <div>
          <h5 className='uppercase'>Cyber Zone</h5>
          <ul className='flex flex-col gap-2 py-2 text-sm'>
            <ol>Smart city initiatives</ol>
            <ol>AI-assisted public services</ol>
            <ol>Cybersecurity tips and alerts</ol>
          </ul>
        </div>
        <div>
          <h5 className='uppercase'>Media Center</h5>
          <ul className='flex flex-col gap-2 py-2 text-sm'>
            <ol>Makolta in the news</ol>
            <ol>Multimedia gallery</ol>
            <ol>Press releases and official statements</ol>
          </ul>
        </div>
      </div>


      <p className='pt-12'>
        Copyright 2023 - present. All Rights Reserved. City-State Government of Makolta
      </p>
    </div>
  )
}
