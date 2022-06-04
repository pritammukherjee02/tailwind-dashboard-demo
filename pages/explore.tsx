import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

//Components
import Header from '../components/Header'
import TailwindFloatingAccent from '../components/TailwindFloatingAccent'
import PostsBody from '../components/PostsBody'

const Explore: NextPage = () => {
  return (
    <div className='min-h-screen font-inter tracking-[0.005rem]'>
        <Head>
            <title>Tailwind Dashboard Demo</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <TailwindFloatingAccent />
        <Header toggleSearch={() => {}} />

        <PostsBody />
    </div>
  )
}

export default Explore