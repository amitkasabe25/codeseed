import React from 'react'
import BlogMenu from '../components/BlogMenu'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VideoPlayer from '../components/single//VideoPlayer'
const page = () => {
  const codeString = `
    function helloWorld() {
      console.log("Hello, World!");
    }
  `;
  return (
    <>
    <Navbar/>
    <div className="md:grid grid-cols-12 mt-20 gap-5 md:px-20">
      <div className="col-span-4">
        <BlogMenu/>
      </div>
      <div className="col-span-8">
        <h1 className='text-3xl font-bold'>Pytube | Python library to download youtube videos</h1>
        <p className='mt-2 text-slate-400'>
        YouTube is very popular video sharing website. Downloading a video from YouTube is a tough job. Downloading the Downloader and get the video using that or go to any other website which fetches the video and saves on your computer. Using Python, this task is very easy. Few lines of code will download the video from YouTube for you. For this, there a python library named as ‘pytube’. pytube is a lightweight, dependency-free Python library which is used for downloading videos from the web.
        </p>
        <pre>
        <VideoPlayer/>

        <code>
          {codeString}
        </code>

        </pre>
      </div>
    </div>
   
    <Footer/>
    </>
  )
}

export default page