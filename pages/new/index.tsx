import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

//Components
import TailwindFloatingAccent from '../../components/TailwindFloatingAccent'
import Header from '../../components/Header'
import NewPostBody from '../../components/New/NewPostBodies/NewPostBody'

const New: NextPage = () => {
  return (
    <div className='min-h-screen bg-gray-200 font-inter tracking-[0.005rem]'>
        <Head>
            <title>New Post</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header toggleSearch={() => {}} />

        <NewPostBody />
    </div>
  )
}

export default New